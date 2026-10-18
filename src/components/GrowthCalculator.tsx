import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { AlertTriangle, TrendingUp } from 'lucide-react';

export const GrowthCalculator: React.FC = () => {
  const { t } = useLanguage();
  const [unit, setUnit] = useState<'cm' | 'ft'>('cm');
  const [childSex, setChildSex] = useState<'boy' | 'girl'>('boy');
  
  // Heights in cm
  const [fatherCm, setFatherCm] = useState<number>(175);
  const [motherCm, setMotherCm] = useState<number>(162);

  // Heights in ft & in
  const [fatherFt, setFatherFt] = useState<number>(5);
  const [fatherIn, setFatherIn] = useState<number>(9);
  const [motherFt, setMotherFt] = useState<number>(5);
  const [motherIn, setMotherIn] = useState<number>(4);

  // Optional child metrics
  const [childAge, setChildAge] = useState<number>(7);
  const [childHeight, setChildHeight] = useState<number>(120);

  // Convert to cm if imperial
  const effectiveFatherCm = unit === 'cm' ? fatherCm : Math.round((fatherFt * 12 + fatherIn) * 2.54);
  const effectiveMotherCm = unit === 'cm' ? motherCm : Math.round((motherFt * 12 + motherIn) * 2.54);

  // Tanner Formula Calculation
  // Boy = (Father + Mother + 13) / 2
  // Girl = (Father + Mother - 13) / 2
  const targetHeightCm = childSex === 'boy'
    ? Math.round((effectiveFatherCm + effectiveMotherCm + 13) / 2)
    : Math.round((effectiveFatherCm + effectiveMotherCm - 13) / 2);

  const targetRangeMin = targetHeightCm - 5;
  const targetRangeMax = targetHeightCm + 5;

  const cmToFtIn = (cm: number) => {
    const totalInches = cm / 2.54;
    const feet = Math.floor(totalInches / 12);
    const inches = Math.round(totalInches % 12);
    return `${feet}' ${inches}"`;
  };

  return (
    <section id="growth-calculator" className="py-16 lg:py-24 bg-white border-b border-[#10253F]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#168C8C] mb-2">
            <span>{t.calculator.eyebrow}</span>
            <span aria-hidden="true">·</span>
            <span>Tanner Method</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#10253F] tracking-tight">
            {t.calculator.heading}
          </h2>
          <p className="mt-3 text-base text-[#718096]">
            {t.calculator.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Calculator Controls (7 cols) */}
          <div className="lg:col-span-7 bg-[#FAFCFE] border border-[#10253F]/10 rounded-xl p-6 sm:p-8 space-y-6">
            
            {/* Top Toolbar: Sex & Unit toggles */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#10253F]/10">
              
              {/* Biological Sex Toggle */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-[#718096] block mb-1.5">
                  {t.calculator.sexLabel}
                </label>
                <div className="inline-flex p-1 bg-white border border-[#10253F]/10 rounded-md">
                  <button
                    onClick={() => setChildSex('boy')}
                    className={`px-4 py-1.5 text-xs font-medium rounded transition-colors ${
                      childSex === 'boy'
                        ? 'bg-[#10253F] text-white shadow-xs'
                        : 'text-[#10253F]/70 hover:text-[#10253F]'
                    }`}
                  >
                    {t.calculator.boy}
                  </button>
                  <button
                    onClick={() => setChildSex('girl')}
                    className={`px-4 py-1.5 text-xs font-medium rounded transition-colors ${
                      childSex === 'girl'
                        ? 'bg-[#10253F] text-white shadow-xs'
                        : 'text-[#10253F]/70 hover:text-[#10253F]'
                    }`}
                  >
                    {t.calculator.girl}
                  </button>
                </div>
              </div>

              {/* Unit Toggle */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-[#718096] block mb-1.5">
                  {t.calculator.unitLabel}
                </label>
                <div className="inline-flex p-1 bg-white border border-[#10253F]/10 rounded-md">
                  <button
                    onClick={() => setUnit('cm')}
                    className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${
                      unit === 'cm'
                        ? 'bg-[#168C8C] text-white shadow-xs'
                        : 'text-[#10253F]/70 hover:text-[#10253F]'
                    }`}
                  >
                    {t.calculator.metric}
                  </button>
                  <button
                    onClick={() => setUnit('ft')}
                    className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${
                      unit === 'ft'
                        ? 'bg-[#168C8C] text-white shadow-xs'
                        : 'text-[#10253F]/70 hover:text-[#10253F]'
                    }`}
                  >
                    {t.calculator.imperial}
                  </button>
                </div>
              </div>

            </div>

            {/* Parent Height Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Father's Height */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#10253F] mb-2">
                  {t.calculator.fatherStature}
                </label>
                {unit === 'cm' ? (
                  <div className="relative">
                    <input
                      type="number"
                      min={130}
                      max={220}
                      value={fatherCm}
                      onChange={(e) => setFatherCm(Number(e.target.value))}
                      className="w-full px-4 py-2.5 bg-white border border-[#10253F]/15 rounded-md text-sm font-semibold font-mono text-[#10253F] focus:border-[#168C8C] focus:outline-none"
                    />
                    <span className="absolute right-3.5 top-2.5 text-xs text-[#718096] font-sans">cm</span>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-2">
                    <div className="relative">
                      <input
                        type="number"
                        min={4}
                        max={7}
                        value={fatherFt}
                        onChange={(e) => setFatherFt(Number(e.target.value))}
                        className="w-full px-3 py-2.5 bg-white border border-[#10253F]/15 rounded-md text-sm font-semibold font-mono text-[#10253F] focus:border-[#168C8C] focus:outline-none"
                      />
                      <span className="absolute right-2.5 top-2.5 text-xs text-[#718096]">ft</span>
                    </div>
                    <div className="relative">
                      <input
                        type="number"
                        min={0}
                        max={11}
                        value={fatherIn}
                        onChange={(e) => setFatherIn(Number(e.target.value))}
                        className="w-full px-3 py-2.5 bg-white border border-[#10253F]/15 rounded-md text-sm font-semibold font-mono text-[#10253F] focus:border-[#168C8C] focus:outline-none"
                      />
                      <span className="absolute right-2.5 top-2.5 text-xs text-[#718096]">in</span>
                    </div>
                  </div>
                )}
                <span className="text-[11px] text-[#718096] mt-1 block">
                  {unit === 'cm' ? cmToFtIn(fatherCm) : `${effectiveFatherCm} cm`}
                </span>
              </div>

              {/* Mother's Height */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#10253F] mb-2">
                  {t.calculator.motherStature}
                </label>
                {unit === 'cm' ? (
                  <div className="relative">
                    <input
                      type="number"
                      min={120}
                      max={210}
                      value={motherCm}
                      onChange={(e) => setMotherCm(Number(e.target.value))}
                      className="w-full px-4 py-2.5 bg-white border border-[#10253F]/15 rounded-md text-sm font-semibold font-mono text-[#10253F] focus:border-[#168C8C] focus:outline-none"
                    />
                    <span className="absolute right-3.5 top-2.5 text-xs text-[#718096] font-sans">cm</span>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-2">
                    <div className="relative">
                      <input
                        type="number"
                        min={4}
                        max={6}
                        value={motherFt}
                        onChange={(e) => setMotherFt(Number(e.target.value))}
                        className="w-full px-3 py-2.5 bg-white border border-[#10253F]/15 rounded-md text-sm font-semibold font-mono text-[#10253F] focus:border-[#168C8C] focus:outline-none"
                      />
                      <span className="absolute right-2.5 top-2.5 text-xs text-[#718096]">ft</span>
                    </div>
                    <div className="relative">
                      <input
                        type="number"
                        min={0}
                        max={11}
                        value={motherIn}
                        onChange={(e) => setMotherIn(Number(e.target.value))}
                        className="w-full px-3 py-2.5 bg-white border border-[#10253F]/15 rounded-md text-sm font-semibold font-mono text-[#10253F] focus:border-[#168C8C] focus:outline-none"
                      />
                      <span className="absolute right-2.5 top-2.5 text-xs text-[#718096]">in</span>
                    </div>
                  </div>
                )}
                <span className="text-[11px] text-[#718096] mt-1 block">
                  {unit === 'cm' ? cmToFtIn(motherCm) : `${effectiveMotherCm} cm`}
                </span>
              </div>

            </div>

            {/* Child's Current Stature (Optional Context) */}
            <div className="p-4 bg-white rounded-lg border border-[#10253F]/10">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#10253F] block mb-3">
                {t.calculator.currentContext}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-[#718096] block mb-1">{t.calculator.ageLabel}</label>
                  <input
                    type="number"
                    min={1}
                    max={18}
                    value={childAge}
                    onChange={(e) => setChildAge(Number(e.target.value))}
                    className="w-full px-3 py-2 bg-[#FAFCFE] border border-[#10253F]/15 rounded text-xs font-mono text-[#10253F]"
                  />
                </div>
                <div>
                  <label className="text-xs text-[#718096] block mb-1">{t.calculator.heightLabel} ({unit === 'cm' ? 'cm' : 'inches'})</label>
                  <input
                    type="number"
                    min={40}
                    max={200}
                    value={childHeight}
                    onChange={(e) => setChildHeight(Number(e.target.value))}
                    className="w-full px-3 py-2 bg-[#FAFCFE] border border-[#10253F]/15 rounded text-xs font-mono text-[#10253F]"
                  />
                </div>
              </div>
            </div>

            {/* Tanner Formula Disclosure */}
            <div className="text-[11px] text-[#718096] leading-relaxed">
              {t.calculator.tannerNote}
            </div>

          </div>

          {/* Calculator Output Display (5 cols) */}
          <div className="lg:col-span-5 bg-[#10253F] text-white rounded-xl p-6 sm:p-8 space-y-6 shadow-md">
            
            <div className="border-b border-white/10 pb-4">
              <div className="text-xs font-semibold tracking-wider uppercase text-[#D5B77A] mb-1">
                {t.calculator.projectionTitle}
              </div>
              <h3 className="text-xl font-serif font-semibold text-white">
                {t.calculator.estimatedTitle}
              </h3>
              <p className="text-xs text-white/70 mt-1">
                {t.calculator.forLabel} <span className="capitalize font-medium text-white">{childSex === 'boy' ? t.calculator.boy : t.calculator.girl}</span>
              </p>
            </div>

            {/* Big Stat Box with Tabular Numerals */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-5 text-center">
              <div className="text-xs uppercase tracking-wider text-white/60 mb-1">{t.calculator.midpointLabel}</div>
              <div className="text-4xl sm:text-5xl font-mono font-bold text-[#FAF6ED] tabular-nums mb-1">
                {targetHeightCm} <span className="text-lg font-sans font-normal text-white/60">cm</span>
              </div>
              <div className="text-sm font-mono text-[#D5B77A] tabular-nums">
                ({cmToFtIn(targetHeightCm)})
              </div>

              {/* Target Range */}
              <div className="mt-4 pt-4 border-t border-white/10 text-xs text-white/80 flex flex-wrap items-center justify-center gap-1 sm:gap-2">
                <span>{t.calculator.targetRangeLabel}</span>
                <span className="font-mono font-semibold text-white tabular-nums">
                  {targetRangeMin} – {targetRangeMax} cm
                </span>
                <span className="text-white/60 font-mono text-[11px] block sm:inline">
                  ({cmToFtIn(targetRangeMin)} – {cmToFtIn(targetRangeMax)})
                </span>
              </div>
            </div>

            {/* Growth Velocity Benchmarks */}
            <div className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#D5B77A] flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>{t.calculator.growthVelocityTitle}</span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded bg-white/5 border border-white/10">
                  <div className="text-white/60 text-[10px]">Ages 1 to 2 Years</div>
                  <div className="font-mono font-semibold text-white">{t.calculator.velocity1to2}</div>
                </div>
                <div className="p-2.5 rounded bg-white/5 border border-white/10">
                  <div className="text-white/60 text-[10px]">Ages 4 to Puberty</div>
                  <div className="font-mono font-semibold text-white">{t.calculator.velocity4toPuberty}</div>
                </div>
                <div className="p-2.5 rounded bg-white/5 border border-white/10">
                  <div className="text-white/60 text-[10px]">Pubertal Peak (Girls)</div>
                  <div className="font-mono font-semibold text-white">{t.calculator.velocityGirlsPuberty}</div>
                </div>
                <div className="p-2.5 rounded bg-white/5 border border-white/10">
                  <div className="text-white/60 text-[10px]">Pubertal Peak (Boys)</div>
                  <div className="font-mono font-semibold text-white">{t.calculator.velocityBoysPuberty}</div>
                </div>
              </div>
            </div>

            {/* Clinical Red Flag Box */}
            <div className="p-3.5 rounded bg-[#168C8C]/20 border border-[#168C8C]/40 text-xs text-white/90">
              <div className="flex items-center gap-1.5 font-semibold text-[#FAF6ED] mb-1">
                <AlertTriangle className="w-3.5 h-3.5 text-[#D5B77A]" />
                <span>{t.calculator.consultWhenTitle}</span>
              </div>
              <p className="text-[11px] text-white/80 leading-relaxed">
                {t.calculator.consultWhenDesc}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
