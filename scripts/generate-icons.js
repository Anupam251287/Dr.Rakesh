import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

function createCRC32Table() {
  const table = new Uint32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let k = 0; k < 8; k++) {
      c = (c & 1) ? 0xEDB88320 ^ (c >>> 1) : c >>> 1;
    }
    table[i] = c >>> 0;
  }
  return table;
}

const crcTable = createCRC32Table();

function crc32(buf) {
  let crc = 0xFFFFFFFF;
  for (let i = 0; i < buf.length; i++) {
    crc = crcTable[(crc ^ buf[i]) & 0xFF] ^ (crc >>> 8);
  }
  return (crc ^ 0xFFFFFFFF) >>> 0;
}

function makeChunk(type, data) {
  const len = data.length;
  const buf = Buffer.alloc(4 + 4 + len + 4);
  buf.writeUInt32BE(len, 0);
  buf.write(type, 4, 4, 'ascii');
  data.copy(buf, 8);
  const typeAndData = buf.subarray(4, 8 + len);
  const crc = crc32(typeAndData);
  buf.writeUInt32BE(crc, 8 + len);
  return buf;
}

function generatePNG(width, height, isMaskable = false) {
  // RGBA buffer: (width * 4 + 1) per row (filter byte 0)
  const rowBytes = 1 + width * 4;
  const rawData = Buffer.alloc(height * rowBytes);

  const cx = width / 2;
  const cy = height / 2;
  const r = width * (isMaskable ? 0.38 : 0.44);

  for (let y = 0; y < height; y++) {
    const rowOffset = y * rowBytes;
    rawData[rowOffset] = 0; // Filter: None

    for (let x = 0; x < width; x++) {
      const pxOffset = rowOffset + 1 + x * 4;

      // Base background: Deep Medical Navy (#10253F)
      let rCol = 16, gCol = 37, bCol = 63, aCol = 255;

      // Inner circular badge: Vibrant Medical Teal (#168C8C)
      const dx = x - cx;
      const dy = y - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist <= r) {
        // Teal gradient
        const t = (y / height);
        rCol = Math.round(22 * (1 - t * 0.3));
        gCol = Math.round(140 * (1 - t * 0.2));
        bCol = Math.round(140 * (1 - t * 0.1));

        // Subtle gold ring near border
        if (dist > r - (width * 0.035)) {
          rCol = 213; gCol = 183; bCol = 122; // Gold #D5B77A
        }

        // Medical Cross in center
        const crossW = width * 0.12;
        const crossH = width * 0.42;
        const inVertBar = Math.abs(dx) <= crossW / 2 && Math.abs(dy) <= crossH / 2;
        const inHorizBar = Math.abs(dy) <= crossW / 2 && Math.abs(dx) <= crossH / 2;

        if (inVertBar || inHorizBar) {
          rCol = 255; gCol = 255; bCol = 255; // Crisp White Medical Cross
        }
      }

      rawData[pxOffset] = rCol;
      rawData[pxOffset + 1] = gCol;
      rawData[pxOffset + 2] = bCol;
      rawData[pxOffset + 3] = aCol;
    }
  }

  const deflated = zlib.deflateSync(rawData);

  // PNG Signature
  const sig = Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]);

  // IHDR chunk
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8; // Bit depth: 8
  ihdrData[9] = 6; // Color type: 6 (RGBA)
  ihdrData[10] = 0; // Compression: 0
  ihdrData[11] = 0; // Filter: 0
  ihdrData[12] = 0; // Interlace: 0
  const ihdr = makeChunk('IHDR', ihdrData);

  // IDAT chunk
  const idat = makeChunk('IDAT', deflated);

  // IEND chunk
  const iend = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([sig, ihdr, idat, iend]);
}

const publicDir = path.resolve(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Generate PNGs
fs.writeFileSync(path.join(publicDir, 'pwa-192x192.png'), generatePNG(192, 192, false));
fs.writeFileSync(path.join(publicDir, 'pwa-512x512.png'), generatePNG(512, 512, false));
fs.writeFileSync(path.join(publicDir, 'pwa-maskable-512x512.png'), generatePNG(512, 512, true));
fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), generatePNG(180, 180, false));
fs.writeFileSync(path.join(publicDir, 'favicon.ico'), generatePNG(64, 64, false));

// Generate SVG icon
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10253F"/>
      <stop offset="100%" stop-color="#0A1829"/>
    </linearGradient>
    <linearGradient id="tealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1DB5B5"/>
      <stop offset="100%" stop-color="#168C8C"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="110" fill="url(#bgGrad)"/>
  <circle cx="256" cy="256" r="190" fill="url(#tealGrad)" stroke="#D5B77A" stroke-width="8"/>
  <!-- Medical Cross -->
  <rect x="220" y="140" width="72" height="232" rx="16" fill="#FFFFFF"/>
  <rect x="140" y="220" width="232" height="72" rx="16" fill="#FFFFFF"/>
  <!-- Center Heart & Pulse line -->
  <circle cx="256" cy="256" r="34" fill="#10253F"/>
  <path d="M236 256 L246 256 L252 242 L260 270 L266 256 L276 256" stroke="#D5B77A" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</svg>`;

fs.writeFileSync(path.join(publicDir, 'icon.svg'), svgContent, 'utf8');

console.log('Successfully generated all PWA icons in /public directory!');
