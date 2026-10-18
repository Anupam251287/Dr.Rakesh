/**
 * Authentic Indian Food Dataset & Pediatric Nutrition Engine
 * Grounded in ICMR-NIN (National Institute of Nutrition, Hyderabad) Indian Food Composition Tables (IFCT)
 * and clinical pediatric endocrinology guidelines by Dr. Rakesh Kumar (PGIMER Chandigarh).
 */

export interface IndianFoodItem {
  name: string;
  hindiName?: string;
  calories: number; // kcal per servingSize
  protein: number; // grams
  carbohydrates: number; // total carbs in grams
  fiber: number; // dietary fiber in grams
  netCarbs: number; // digestible carbs = carbs - fiber
  fat: number; // grams
  calciumMg: number; // mg
  ironMg: number; // mg
  potassiumMg?: number; // mg
  serving_size: number; // in grams
  householdMeasure: string; // e.g. "1 medium phulka", "1 katori (150ml)"
  food_group: 'Vegetable' | 'Protein' | 'Grain' | 'Dairy' | 'Mixed' | 'Snack';
  regionalCategory?: 'North Indian' | 'South Indian' | 'East Indian' | 'West Indian' | 'All';
  gi: 'Low' | 'Medium' | 'High';
  glycemicLoad: number; // (netCarbs * GI_factor) / 100
  deductionKeywords: string[]; // Keywords to deduce exact item from speech or text
  visualFeatures: string; // Visual cues for vision AI deduction
  description?: string;
  image?: string;
}

export interface DeducedFoodItem {
  id: string;
  name: string;
  hindiName?: string;
  quantity: number; // Multiplier, e.g. 2 for 2 rotis or 1.5 for 1.5 katori
  portionText: string;
  servingGrams: number;
  totalGrams: number;
  calories: number;
  carbs: number; // total carbs
  fiber: number;
  netCarbs: number;
  protein: number;
  fat: number;
  calciumMg: number;
  ironMg: number;
  gi: 'Low' | 'Medium' | 'High';
  glycemicLoad: number;
  foodGroup: string;
  confidenceScore: number;
  deductionReasoning?: string;
}

// Complete ICMR-NIN calibrated Indian Food Composition Dataset
export const INDIAN_FOOD_DATASET: IndianFoodItem[] = [
  // --- Grains & Breads ---
  {
    name: 'Roti (Phulka)',
    hindiName: 'रोटी (फुल्का)',
    calories: 120,
    protein: 3.5,
    carbohydrates: 22,
    fiber: 3.8,
    netCarbs: 18.2,
    fat: 1.8,
    calciumMg: 18,
    ironMg: 1.5,
    potassiumMg: 120,
    serving_size: 35,
    householdMeasure: '1 medium phulka (35g)',
    food_group: 'Grain',
    regionalCategory: 'North Indian',
    gi: 'Medium',
    glycemicLoad: 10.9,
    deductionKeywords: ['roti', 'phulka', 'chapati', 'chapatti', 'rotis', 'phulkas', 'wheat bread'],
    visualFeatures: 'Round puffed whole-wheat flatbread with dry flame brown speckles, no heavy oil glaze.',
    description: 'Whole wheat flatbread puffed on naked flame, rich in complex carbs and insoluble fiber.',
  },
  {
    name: 'Tandoori Roti',
    hindiName: 'तंदूरी रोटी',
    calories: 145,
    protein: 4.2,
    carbohydrates: 26,
    fiber: 4.0,
    netCarbs: 22.0,
    fat: 2.5,
    calciumMg: 22,
    ironMg: 1.8,
    serving_size: 45,
    householdMeasure: '1 piece (45g)',
    food_group: 'Grain',
    regionalCategory: 'North Indian',
    gi: 'Medium',
    glycemicLoad: 13.2,
    deductionKeywords: ['tandoori roti', 'tandoori', 'khamiri roti'],
    visualFeatures: 'Thicker clay-oven charred disk with crisp blistered patches.',
    description: 'Whole wheat flatbread baked inside clay tandoor, slower digestive breakdown.',
  },
  {
    name: 'Butter Naan',
    hindiName: 'बटर नान',
    calories: 280,
    protein: 7.8,
    carbohydrates: 38,
    fiber: 1.8,
    netCarbs: 36.2,
    fat: 11.0,
    calciumMg: 35,
    ironMg: 1.2,
    serving_size: 85,
    householdMeasure: '1 piece (85g)',
    food_group: 'Grain',
    regionalCategory: 'North Indian',
    gi: 'High',
    glycemicLoad: 25.3,
    deductionKeywords: ['naan', 'butter naan', 'garlic naan', 'plain naan'],
    visualFeatures: 'Teardrop-shaped leavened refined flour flatbread with glossy melted butter surface and tandoor bubbles.',
    description: 'Refined flour leavened bread baked in tandoor; causes rapid glycemic spike.',
  },
  {
    name: 'Methi Paratha',
    hindiName: 'मेथी पराठा',
    calories: 180,
    protein: 4.5,
    carbohydrates: 24,
    fiber: 4.2,
    netCarbs: 19.8,
    fat: 7.5,
    calciumMg: 65,
    ironMg: 2.8,
    serving_size: 55,
    householdMeasure: '1 paratha (55g)',
    food_group: 'Grain',
    regionalCategory: 'North Indian',
    gi: 'Low',
    glycemicLoad: 8.9,
    deductionKeywords: ['methi paratha', 'fenugreek paratha', 'paratha', 'plain paratha'],
    visualFeatures: 'Shallow fried round flatbread infused with fresh green fenugreek leaves and cumin seeds.',
    description: 'Fenugreek leaves provide high soluble fiber that significantly delays postprandial glucose surges.',
  },
  {
    name: 'Steamed Basmati Rice',
    hindiName: 'सादा बासमती चावल',
    calories: 155,
    protein: 3.2,
    carbohydrates: 34,
    fiber: 1.2,
    netCarbs: 32.8,
    fat: 0.5,
    calciumMg: 10,
    ironMg: 0.8,
    serving_size: 120,
    householdMeasure: '1 katori (120g cooked)',
    food_group: 'Grain',
    regionalCategory: 'All',
    gi: 'High',
    glycemicLoad: 23.0,
    deductionKeywords: ['rice', 'chawal', 'plain rice', 'basmati rice', 'steamed rice', 'white rice'],
    visualFeatures: 'Fluffy separated long white grains, unseasoned and moist.',
    description: 'Boiled long-grain rice with high glycemic response; pair with lentils and ghee to moderate absorption.',
  },
  {
    name: 'Jeera Rice',
    hindiName: 'जीरा राइस',
    calories: 185,
    protein: 3.4,
    carbohydrates: 33,
    fiber: 1.6,
    netCarbs: 31.4,
    fat: 4.2,
    calciumMg: 16,
    ironMg: 1.2,
    serving_size: 130,
    householdMeasure: '1 katori (130g)',
    food_group: 'Grain',
    regionalCategory: 'North Indian',
    gi: 'Medium',
    glycemicLoad: 18.8,
    deductionKeywords: ['jeera rice', 'cumin rice'],
    visualFeatures: 'Long white rice grains speckled with toasted dark brown cumin seeds and mild ghee sheen.',
    description: 'Steamed rice tempered with cumin seeds and mild ghee; cumin aids digestion.',
  },
  {
    name: 'Vegetable Biryani / Pulao',
    hindiName: 'वेज बिरयानी / पुलाव',
    calories: 250,
    protein: 6.5,
    carbohydrates: 40,
    fiber: 4.5,
    netCarbs: 35.5,
    fat: 7.2,
    calciumMg: 45,
    ironMg: 2.1,
    serving_size: 160,
    householdMeasure: '1 bowl (160g)',
    food_group: 'Mixed',
    regionalCategory: 'All',
    gi: 'Medium',
    glycemicLoad: 19.5,
    deductionKeywords: ['biryani', 'veg biryani', 'pulao', 'veg pulao', 'matar pulao'],
    visualFeatures: 'Aromatic layered saffron-tinted rice mixed with diced carrots, beans, peas, and whole spices.',
    description: 'Rice cooked with mixed vegetables and aromatic spices, providing moderate satiety.',
  },
  {
    name: 'Idli',
    hindiName: 'इडली',
    calories: 62,
    protein: 2.2,
    carbohydrates: 13.5,
    fiber: 1.5,
    netCarbs: 12.0,
    fat: 0.3,
    calciumMg: 12,
    ironMg: 0.9,
    serving_size: 40,
    householdMeasure: '1 medium piece (40g)',
    food_group: 'Grain',
    regionalCategory: 'South Indian',
    gi: 'Medium',
    glycemicLoad: 7.2,
    deductionKeywords: ['idli', 'idlis', 'steamed rice cake'],
    visualFeatures: 'Pure white round disc-shaped steamed cake with spongy porous surface.',
    description: 'Fermented rice and urad dal steamed cake; excellent gut microbiome support and easy digestion.',
  },
  {
    name: 'Masala Dosa',
    hindiName: 'मसाला डोसा',
    calories: 240,
    protein: 5.5,
    carbohydrates: 36,
    fiber: 3.2,
    netCarbs: 32.8,
    fat: 8.5,
    calciumMg: 28,
    ironMg: 2.0,
    serving_size: 140,
    householdMeasure: '1 dosa with potato filling (140g)',
    food_group: 'Mixed',
    regionalCategory: 'South Indian',
    gi: 'Medium',
    glycemicLoad: 18.0,
    deductionKeywords: ['dosa', 'masala dosa', 'plain dosa'],
    visualFeatures: 'Golden brown crisp rolled fermented crepe stuffed with spiced yellow potato-onion bhaji.',
    description: 'Crispy fermented crepe with potato subzi filling; moderate carb load.',
  },
  {
    name: 'Poha with Peanuts',
    hindiName: 'पोहा मूंगफली सहित',
    calories: 275,
    protein: 5.8,
    carbohydrates: 42,
    fiber: 3.5,
    netCarbs: 38.5,
    fat: 9.8,
    calciumMg: 35,
    ironMg: 3.2,
    serving_size: 140,
    householdMeasure: '1 plate (140g)',
    food_group: 'Grain',
    regionalCategory: 'West Indian',
    gi: 'Medium',
    glycemicLoad: 21.1,
    deductionKeywords: ['poha', 'pohe', 'flattened rice', 'kanda poha'],
    visualFeatures: 'Bright yellow flattened rice flakes tempered with mustard seeds, curry leaves, and crunchy red peanuts.',
    description: 'Flattened rice seasoned with turmeric and peanuts; peanuts provide healthy fats and zinc.',
  },
  {
    name: 'Besan Chilla',
    hindiName: 'बेसन चीला',
    calories: 165,
    protein: 8.5,
    carbohydrates: 18,
    fiber: 4.8,
    netCarbs: 13.2,
    fat: 6.0,
    calciumMg: 42,
    ironMg: 2.6,
    serving_size: 80,
    householdMeasure: '1 medium chilla (80g)',
    food_group: 'Protein',
    regionalCategory: 'North Indian',
    gi: 'Low',
    glycemicLoad: 5.3,
    deductionKeywords: ['besan chilla', 'chilla', 'cheela', 'gram flour pancake'],
    visualFeatures: 'Thin savory gram flour golden pancake with flecks of green chili, onion, and cilantro.',
    description: 'Bengal gram flour savory crepe; exceptional plant-based protein with very low glycemic index.',
  },

  // --- Dals & Lentils ---
  {
    name: 'Moong Dal Tadka',
    hindiName: 'मूंग दाल तड़का',
    calories: 145,
    protein: 8.5,
    carbohydrates: 19,
    fiber: 5.2,
    netCarbs: 13.8,
    fat: 3.8,
    calciumMg: 32,
    ironMg: 2.4,
    potassiumMg: 310,
    serving_size: 150,
    householdMeasure: '1 medium katori (150g)',
    food_group: 'Protein',
    regionalCategory: 'North Indian',
    gi: 'Low',
    glycemicLoad: 4.8,
    deductionKeywords: ['dal', 'moong dal', 'dal tadka', 'yellow dal', 'arhar dal', 'toor dal'],
    visualFeatures: 'Golden yellow thick lentil soup with aromatic tadka of cumin, dried red chili, and minced garlic.',
    description: 'Split yellow mung beans tempered with cumin and ghee; gentle on young gastrointestinal tracts.',
  },
  {
    name: 'Dal Makhani',
    hindiName: 'दाल मखनी',
    calories: 240,
    protein: 9.8,
    carbohydrates: 28,
    fiber: 6.5,
    netCarbs: 21.5,
    fat: 10.5,
    calciumMg: 85,
    ironMg: 3.1,
    serving_size: 150,
    householdMeasure: '1 katori (150g)',
    food_group: 'Protein',
    regionalCategory: 'North Indian',
    gi: 'Low',
    glycemicLoad: 7.5,
    deductionKeywords: ['dal makhani', 'makhani dal', 'black dal', 'urad dal'],
    visualFeatures: 'Rich creamy dark brown slow-cooked lentils swirled with fresh white cream or butter.',
    description: 'Black gram and kidney beans simmered with butter; high fat slows carb absorption over 3-5 hours.',
  },
  {
    name: 'Chana Masala (Chole)',
    hindiName: 'चना मसाला (छोले)',
    calories: 195,
    protein: 8.8,
    carbohydrates: 29,
    fiber: 7.2,
    netCarbs: 21.8,
    fat: 5.5,
    calciumMg: 68,
    ironMg: 3.4,
    serving_size: 150,
    householdMeasure: '1 katori (150g)',
    food_group: 'Protein',
    regionalCategory: 'North Indian',
    gi: 'Low',
    glycemicLoad: 6.5,
    deductionKeywords: ['chole', 'chana masala', 'chickpea curry', 'kabuli chana'],
    visualFeatures: 'Plump tan chickpeas in thick spiced dark onion-tomato gravy with ginger juliennes.',
    description: 'White chickpeas packed with resistant starch and iron; minimizes post-meal blood sugar fluctuations.',
  },
  {
    name: 'Rajma Masala',
    hindiName: 'राजमा मसाला',
    calories: 190,
    protein: 9.2,
    carbohydrates: 28,
    fiber: 6.8,
    netCarbs: 21.2,
    fat: 5.0,
    calciumMg: 55,
    ironMg: 3.8,
    serving_size: 150,
    householdMeasure: '1 katori (150g)',
    food_group: 'Protein',
    regionalCategory: 'North Indian',
    gi: 'Low',
    glycemicLoad: 6.1,
    deductionKeywords: ['rajma', 'rajma masala', 'kidney bean curry'],
    visualFeatures: 'Dark reddish-brown kidney beans in a glossy rich tomato-ginger gravy.',
    description: 'Red kidney beans offering high protein, soluble fiber, and iron for hemoglobin support.',
  },
  {
    name: 'Sambar',
    hindiName: 'सांबर',
    calories: 125,
    protein: 4.8,
    carbohydrates: 20,
    fiber: 4.5,
    netCarbs: 15.5,
    fat: 2.8,
    calciumMg: 45,
    ironMg: 1.8,
    serving_size: 160,
    householdMeasure: '1 large katori (160g)',
    food_group: 'Vegetable',
    regionalCategory: 'South Indian',
    gi: 'Low',
    glycemicLoad: 5.4,
    deductionKeywords: ['sambar', 'sambhar', 'lentil vegetable stew'],
    visualFeatures: 'Tangy red-orange lentil broth with chunks of drumstick, pumpkin, shallots, and curry leaves.',
    description: 'Pigeon pea stew with tamarind and vegetables, providing polyphenols and minerals.',
  },

  // --- Curries & Vegetables ---
  {
    name: 'Palak Paneer',
    hindiName: 'पालक पनीर',
    calories: 210,
    protein: 12.5,
    carbohydrates: 7.5,
    fiber: 3.8,
    netCarbs: 3.7,
    fat: 14.5,
    calciumMg: 210,
    ironMg: 3.5,
    serving_size: 150,
    householdMeasure: '1 katori (150g)',
    food_group: 'Protein',
    regionalCategory: 'North Indian',
    gi: 'Low',
    glycemicLoad: 1.1,
    deductionKeywords: ['palak paneer', 'spinach paneer', 'saag paneer'],
    visualFeatures: 'Vibrant dark green pureed spinach gravy with white soft paneer cubes embedded.',
    description: 'Spinach and cottage cheese; power combination of bioavailable calcium and iron for growing bones.',
  },
  {
    name: 'Paneer Bhurji',
    hindiName: 'पनीर भुर्जी',
    calories: 235,
    protein: 14.0,
    carbohydrates: 6.0,
    fiber: 2.0,
    netCarbs: 4.0,
    fat: 17.0,
    calciumMg: 195,
    ironMg: 1.5,
    serving_size: 120,
    householdMeasure: '1 katori (120g)',
    food_group: 'Protein',
    regionalCategory: 'North Indian',
    gi: 'Low',
    glycemicLoad: 1.2,
    deductionKeywords: ['paneer bhurji', 'bhurji', 'scrambled paneer'],
    visualFeatures: 'Crumbled cottage cheese tossed with onions, green chilies, tomatoes, and golden turmeric.',
    description: 'Scrambled fresh cottage cheese; high protein and healthy fats stabilize overnight glucose.',
  },
  {
    name: 'Aloo Gobi',
    hindiName: 'आलू गोभी',
    calories: 140,
    protein: 3.2,
    carbohydrates: 17,
    fiber: 3.5,
    netCarbs: 13.5,
    fat: 6.8,
    calciumMg: 28,
    ironMg: 1.4,
    serving_size: 120,
    householdMeasure: '1 katori (120g)',
    food_group: 'Vegetable',
    regionalCategory: 'North Indian',
    gi: 'Medium',
    glycemicLoad: 8.1,
    deductionKeywords: ['aloo gobi', 'aloo gobhi', 'cauliflower potato'],
    visualFeatures: 'Dry spiced cauliflower florets with soft potato cubes dusted with roasted cumin and coriander.',
    description: 'Cauliflower and potato subzi cooked with turmeric; cauliflower delivers glucosinolates and vitamin C.',
  },
  {
    name: 'Bhindi Masala (Okra)',
    hindiName: 'भिंडी मसाला',
    calories: 110,
    protein: 2.8,
    carbohydrates: 11,
    fiber: 4.2,
    netCarbs: 6.8,
    fat: 6.0,
    calciumMg: 65,
    ironMg: 1.6,
    serving_size: 110,
    householdMeasure: '1 katori (110g)',
    food_group: 'Vegetable',
    regionalCategory: 'North Indian',
    gi: 'Low',
    glycemicLoad: 2.0,
    deductionKeywords: ['bhindi', 'bhindi masala', 'okra', 'ladyfinger'],
    visualFeatures: 'Slit green okra rounds pan-sautéed with onions, dry mango powder, and carom seeds (ajwain).',
    description: 'Mucilaginous soluble fiber in okra slows glucose intestinal transport, excellent for T1D.',
  },

  // --- Dairy, Salads & Accompaniments ---
  {
    name: 'Plain Curd (Dahi)',
    hindiName: 'सादा दही',
    calories: 95,
    protein: 5.2,
    carbohydrates: 6.2,
    fiber: 0.0,
    netCarbs: 6.2,
    fat: 6.0,
    calciumMg: 180,
    ironMg: 0.2,
    serving_size: 150,
    householdMeasure: '1 katori (150g)',
    food_group: 'Dairy',
    regionalCategory: 'All',
    gi: 'Low',
    glycemicLoad: 2.2,
    deductionKeywords: ['curd', 'dahi', 'yogurt', 'plain curd', 'plain dahi'],
    visualFeatures: 'Thick creamy white set yogurt in a stainless or glass katori, smooth surface.',
    description: 'Probiotic set curd; exceptional source of bioavailable calcium for childhood stature velocity.',
  },
  {
    name: 'Cucumber Raita',
    hindiName: 'खीरे का रायता',
    calories: 80,
    protein: 4.2,
    carbohydrates: 5.0,
    fiber: 1.0,
    netCarbs: 4.0,
    fat: 4.8,
    calciumMg: 140,
    ironMg: 0.4,
    serving_size: 150,
    householdMeasure: '1 katori (150g)',
    food_group: 'Dairy',
    regionalCategory: 'All',
    gi: 'Low',
    glycemicLoad: 1.2,
    deductionKeywords: ['raita', 'cucumber raita', 'kheera raita', 'boondi raita'],
    visualFeatures: 'Whisked yogurt flecked with finely grated cucumber, roasted jeera, and pink black salt.',
    description: 'Cooling probiotic curd side dish that blunts the glycemic response of high-carb rice meals.',
  },
  {
    name: 'Fresh Kachumber Salad',
    hindiName: 'कचुम्बर सलाद',
    calories: 30,
    protein: 1.2,
    carbohydrates: 6.5,
    fiber: 2.5,
    netCarbs: 4.0,
    fat: 0.2,
    calciumMg: 25,
    ironMg: 0.8,
    serving_size: 100,
    householdMeasure: '1 small bowl (100g)',
    food_group: 'Vegetable',
    regionalCategory: 'All',
    gi: 'Low',
    glycemicLoad: 0.8,
    deductionKeywords: ['salad', 'kachumber', 'kachumber salad', 'cucumber salad', 'green salad', 'onion tomato salad'],
    visualFeatures: 'Freshly diced crisp cucumbers, firm red tomatoes, sliced onions, dressed with lemon juice and chaat masala.',
    description: 'Crunchy raw vegetables offering vital micronutrients, vitamin C, and prebiotic fiber.',
  },
  {
    name: 'Coconut Chutney',
    hindiName: 'नारियल चटनी',
    calories: 68,
    protein: 0.9,
    carbohydrates: 3.2,
    fiber: 1.8,
    netCarbs: 1.4,
    fat: 5.8,
    calciumMg: 12,
    ironMg: 0.6,
    serving_size: 30,
    householdMeasure: '2 tablespoons (30g)',
    food_group: 'Mixed',
    regionalCategory: 'South Indian',
    gi: 'Low',
    glycemicLoad: 0.4,
    deductionKeywords: ['coconut chutney', 'chutney', 'nariyal chutney'],
    visualFeatures: 'Off-white creamy ground coconut paste tempered with mustard seeds and curry leaves.',
    description: 'Fresh coconut with roasted gram and green chilies; medium-chain triglycerides (MCTs).',
  },

  // --- Protein & Non-Veg ---
  {
    name: 'Tandoori Chicken',
    hindiName: 'तंदूरी चिकन',
    calories: 185,
    protein: 31.0,
    carbohydrates: 1.2,
    fiber: 0.2,
    netCarbs: 1.0,
    fat: 6.2,
    calciumMg: 24,
    ironMg: 1.8,
    serving_size: 120,
    householdMeasure: '2 pieces (120g bone-in)',
    food_group: 'Protein',
    regionalCategory: 'North Indian',
    gi: 'Low',
    glycemicLoad: 0.1,
    deductionKeywords: ['chicken', 'tandoori chicken', 'chicken tikka', 'grilled chicken'],
    visualFeatures: 'Charred reddish-orange spiced chicken pieces with blackened grill marks and lemon wedges.',
    description: 'Clay-oven roasted chicken rich in High Biological Value (HBV) protein; zero impact on post-meal blood sugar.',
  },
  {
    name: 'Boiled Egg',
    hindiName: 'उबला अंडा',
    calories: 78,
    protein: 6.3,
    carbohydrates: 0.6,
    fiber: 0.0,
    netCarbs: 0.6,
    fat: 5.3,
    calciumMg: 28,
    ironMg: 0.9,
    serving_size: 50,
    householdMeasure: '1 whole large egg (50g)',
    food_group: 'Protein',
    regionalCategory: 'All',
    gi: 'Low',
    glycemicLoad: 0.1,
    deductionKeywords: ['egg', 'boiled egg', 'eggs', 'anda'],
    visualFeatures: 'Firm white oval egg or sliced halves showing golden-yellow set yolk.',
    description: 'Gold standard complete protein containing all 9 essential amino acids plus choline for pediatric brain development.',
  },
];

// ICMR-NIN 2024 Pediatric Recommended Dietary Allowances (RDA)
export interface ICMRPediatricRDA {
  ageGroup: string;
  minAge: number;
  maxAge: number;
  caloriesKcal: number;
  proteinGrams: number;
  calciumMg: number;
  ironMg: number;
  fiberGrams: number;
}

export const ICMR_PEDIATRIC_RDAS: ICMRPediatricRDA[] = [
  { ageGroup: 'Toddler (1-3 Years)', minAge: 1, maxAge: 3, caloriesKcal: 1110, proteinGrams: 12.5, calciumMg: 500, ironMg: 8, fiberGrams: 15 },
  { ageGroup: 'Pre-School (4-6 Years)', minAge: 4, maxAge: 6, caloriesKcal: 1360, proteinGrams: 16.0, calciumMg: 550, ironMg: 11, fiberGrams: 18 },
  { ageGroup: 'Primary School (7-9 Years)', minAge: 7, maxAge: 9, caloriesKcal: 1700, proteinGrams: 23.0, calciumMg: 650, ironMg: 15, fiberGrams: 22 },
  { ageGroup: 'Pre-Adolescent (10-12 Years)', minAge: 10, maxAge: 12, caloriesKcal: 2050, proteinGrams: 32.0, calciumMg: 850, ironMg: 16, fiberGrams: 26 },
  { ageGroup: 'Adolescent (13-17 Years)', minAge: 13, maxAge: 17, caloriesKcal: 2500, proteinGrams: 50.0, calciumMg: 1000, ironMg: 21, fiberGrams: 30 },
];

export function getICMRRdaForAge(ageYears: number): ICMRPediatricRDA {
  const match = ICMR_PEDIATRIC_RDAS.find((r) => ageYears >= r.minAge && ageYears <= r.maxAge);
  return match || ICMR_PEDIATRIC_RDAS[2];
}

/**
 * Smart natural language parser to deduce exact Indian food items and quantities
 * from spoken or typed parent descriptions (e.g. "2 phulkas with 1 bowl dal makhani and curd")
 */
export function deduceExactFoodItemsFromText(input: string): DeducedFoodItem[] {
  if (!input || !input.trim()) return [];
  const text = input.toLowerCase();
  const results: DeducedFoodItem[] = [];

  // Matcher for numbers preceding keywords
  const findQuantity = (keywords: string[]): number => {
    for (const kw of keywords) {
      // Regex looking for e.g. "2 phulkas", "1.5 katori", "two rotis", "half bowl"
      const numberMap: Record<string, number> = {
        one: 1, two: 2, three: 3, four: 4, five: 5,
        half: 0.5, single: 1, double: 2, pair: 2,
      };

      const regexDigit = new RegExp(`(\\d+(\\.\\d+)?)\\s*(?:pieces?|plate|plates?|katori|katoris?|bowl|bowls?|cups?)?\\s*${kw}`, 'i');
      const mDigit = text.match(regexDigit);
      if (mDigit) return parseFloat(mDigit[1]);

      for (const [word, val] of Object.entries(numberMap)) {
        if (text.includes(`${word} ${kw}`) || text.includes(`${word} piece of ${kw}`)) {
          return val;
        }
      }

      if (text.includes(kw)) {
        return 1;
      }
    }
    return 0;
  };

  INDIAN_FOOD_DATASET.forEach((item) => {
    const qty = findQuantity(item.deductionKeywords);
    if (qty > 0) {
      const scale = qty;
      const totalGrams = Math.round(item.serving_size * scale);
      results.push({
        id: `deduced_${item.name.replace(/\s+/g, '_')}_${Date.now()}`,
        name: item.name,
        hindiName: item.hindiName,
        quantity: qty,
        portionText: qty === 1 ? item.householdMeasure : `${qty}x (${totalGrams}g)`,
        servingGrams: item.serving_size,
        totalGrams,
        calories: Math.round(item.calories * scale),
        carbs: Math.round(item.carbohydrates * scale * 10) / 10,
        fiber: Math.round(item.fiber * scale * 10) / 10,
        netCarbs: Math.round(item.netCarbs * scale * 10) / 10,
        protein: Math.round(item.protein * scale * 10) / 10,
        fat: Math.round(item.fat * scale * 10) / 10,
        calciumMg: Math.round(item.calciumMg * scale),
        ironMg: Math.round(item.ironMg * scale * 10) / 10,
        gi: item.gi,
        glycemicLoad: Math.round(item.glycemicLoad * scale * 10) / 10,
        foodGroup: item.food_group,
        confidenceScore: 0.95,
        deductionReasoning: item.visualFeatures,
      });
    }
  });

  return results;
}

// Calculate comprehensive nutrition aggregate from deduced items
export function calculateMealFullNutrition(items: DeducedFoodItem[], patientAge: number) {
  const totalCalories = items.reduce((acc, i) => acc + i.calories, 0);
  const totalCarbs = Math.round(items.reduce((acc, i) => acc + i.carbs, 0) * 10) / 10;
  const totalFiber = Math.round(items.reduce((acc, i) => acc + i.fiber, 0) * 10) / 10;
  const totalNetCarbs = Math.round(items.reduce((acc, i) => acc + i.netCarbs, 0) * 10) / 10;
  const totalProtein = Math.round(items.reduce((acc, i) => acc + i.protein, 0) * 10) / 10;
  const totalFat = Math.round(items.reduce((acc, i) => acc + i.fat, 0) * 10) / 10;
  const totalCalciumMg = Math.round(items.reduce((acc, i) => acc + i.calciumMg, 0));
  const totalIronMg = Math.round(items.reduce((acc, i) => acc + i.ironMg, 0) * 10) / 10;
  const totalGlycemicLoad = Math.round(items.reduce((acc, i) => acc + i.glycemicLoad, 0) * 10) / 10;

  // Meal GL classification: Low <= 10, Medium 11-19, High >= 20
  let glycemicLoadCategory: 'Low' | 'Medium' | 'High' = 'Medium';
  if (totalGlycemicLoad <= 10) glycemicLoadCategory = 'Low';
  else if (totalGlycemicLoad >= 20) glycemicLoadCategory = 'High';

  // Overall GI classification based on dominant source
  const hasHighGi = items.some((i) => i.gi === 'High');
  const allLow = items.every((i) => i.gi === 'Low');
  const overallGi: 'Low' | 'Medium' | 'High' = hasHighGi ? 'High' : allLow ? 'Low' : 'Medium';

  // ICMR RDA percentages
  const rda = getICMRRdaForAge(patientAge);
  const rdaPercentages = {
    calories: Math.min(100, Math.round((totalCalories / rda.caloriesKcal) * 100)),
    protein: Math.min(100, Math.round((totalProtein / rda.proteinGrams) * 100)),
    calcium: Math.min(100, Math.round((totalCalciumMg / rda.calciumMg) * 100)),
    iron: Math.min(100, Math.round((totalIronMg / rda.ironMg) * 100)),
    fiber: Math.min(100, Math.round((totalFiber / rda.fiberGrams) * 100)),
  };

  // Dual-wave bolus advisory for high-fat / high-protein meals
  const needsDualWaveBolus = totalFat >= 18 || (totalFat >= 12 && totalProtein >= 20);

  return {
    totalCalories,
    totalCarbs,
    totalFiber,
    totalNetCarbs,
    totalProtein,
    totalFat,
    totalCalciumMg,
    totalIronMg,
    totalGlycemicLoad,
    glycemicLoadCategory,
    overallGi,
    rdaPercentages,
    rda,
    needsDualWaveBolus,
  };
}

// Preset sample meals for instant testing and demonstration
export const PRESET_SAMPLE_MEALS = [
  {
    id: 'thali-roti-dal',
    name: 'North Indian School-Age Lunch (2 Phulkas + Dal Makhani + Palak Sabzi + Salad)',
    mealCategory: 'Lunch',
    imageUrl: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=600&q=80',
    totalCalories: 480,
    totalCarbs: 58,
    totalProtein: 18,
    totalFat: 14,
    items: [
      { name: 'Roti (Phulka)', portion: '2 pieces (70g)', calories: 240, carbs: 36, protein: 7, fat: 3.6 },
      { name: 'Dal Makhani', portion: '1 katori (150g)', calories: 240, carbs: 28, protein: 9.8, fat: 10.5 },
      { name: 'Fresh Kachumber Salad', portion: '1 bowl (100g)', calories: 30, carbs: 6.5, protein: 1.2, fat: 0.2 },
    ],
    pediatricNote: 'Whole wheat phulka combined with lentils delivers balanced amino acids. High fiber slows carb absorption.',
  },
  {
    id: 'idli-sambar-breakfast',
    name: 'South Indian High-Energy Breakfast (3 Idlis + Sambar + Coconut Chutney)',
    mealCategory: 'Breakfast',
    imageUrl: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80',
    totalCalories: 380,
    totalCarbs: 60,
    totalProtein: 11,
    totalFat: 8,
    items: [
      { name: 'Idli', portion: '3 pieces (120g)', calories: 186, carbs: 40.5, protein: 6.6, fat: 0.9 },
      { name: 'Sambar', portion: '1 bowl (160g)', calories: 125, carbs: 20, protein: 4.8, fat: 2.8 },
      { name: 'Coconut Chutney', portion: '2 tbsp (30g)', calories: 68, carbs: 3.2, protein: 0.9, fat: 5.8 },
    ],
    pediatricNote: 'Fermented batter promotes gut microbiome. Medium glycemic load; ideal prior to active morning classes.',
  },
  {
    id: 'paneer-roti-dinner',
    name: 'Paneer Bhurji with 1 Phulka and Cucumber Raita (Dinner)',
    mealCategory: 'Dinner',
    imageUrl: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80',
    totalCalories: 435,
    totalCarbs: 33,
    totalProtein: 21.7,
    totalFat: 23.6,
    items: [
      { name: 'Roti (Phulka)', portion: '1 piece (35g)', calories: 120, carbs: 18.2, protein: 3.5, fat: 1.8 },
      { name: 'Paneer Bhurji', portion: '1 katori (120g)', calories: 235, carbs: 6.0, protein: 14.0, fat: 17.0 },
      { name: 'Cucumber Raita', portion: '1 katori (150g)', calories: 80, carbs: 5.0, protein: 4.2, fat: 4.8 },
    ],
    pediatricNote: 'High protein and calcium stabilize overnight glucose and prevent 3 AM nocturnal hypoglycemia.',
  },
  {
    id: 'poha-peanuts-morning',
    name: 'Maharashtrian Poha with Peanuts & Boiled Egg (Breakfast)',
    mealCategory: 'Breakfast',
    imageUrl: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80',
    totalCalories: 353,
    totalCarbs: 42.6,
    totalProtein: 12.1,
    totalFat: 15.1,
    items: [
      { name: 'Poha with Peanuts', portion: '1 plate (140g)', calories: 275, carbs: 42, protein: 5.8, fat: 9.8 },
      { name: 'Boiled Egg', portion: '1 egg (50g)', calories: 78, carbs: 0.6, protein: 6.3, fat: 5.3 },
    ],
    pediatricNote: 'Adding a boiled egg to flattened rice enhances satiety and reduces postprandial glucose spike.',
  },
];

export const INDIAN_RECIPES: Record<string, string> = {
  'Aloo Gobi': 'Ingredients: Potatoes, Cauliflower, Spices (cumin, turmeric, garam masala).\nInstructions: Sauté spices, add veggies, cover and cook on low heat until tender. Garnish with fresh cilantro.',
  'Butter Chicken': 'Ingredients: Chicken breast, Butter, Cream, Spices, Tomato puree.\nInstructions: Marinate chicken with ginger-garlic paste and curd. Grill and simmer gently in spiced tomato-cashew sauce.',
  'Idli': 'Ingredients: Parboiled rice, Urad dal (black gram).\nInstructions: Soak, grind finely, ferment overnight (10-12 hrs), steam in molds for 10-12 minutes until light and fluffy.',
  'Dal Makhani': 'Ingredients: Whole black urad dal, rajma (kidney beans), butter, ginger, garlic, tomatoes.\nInstructions: Pressure cook lentils, simmer for 3-4 hours with tomato reduction and unsalted butter.',
  'Palak Paneer': 'Ingredients: Fresh spinach leaves, low-fat paneer, green chilies, garlic, cumin.\nInstructions: Blanch spinach and shock in ice water. Puree smoothly and cook with tempered spices. Gently fold in paneer cubes.',
  'Chana Masala': 'Ingredients: Kabuli chana (chickpeas), onions, tomatoes, amchur (dry mango), chana masala blend.\nInstructions: Pressure cook soaked chickpeas. Simmer in bhuna onion-tomato gravy until thick.',
  'Poha': 'Ingredients: Thick flattened rice (poha), raw peanuts, mustard seeds, curry leaves, turmeric, lemon.\nInstructions: Rinse poha gently. Temper peanuts and mustard seeds in 1 tsp oil, sauté onions, mix in poha and finish with fresh lemon juice.',
  'Sambar': 'Ingredients: Toor dal (pigeon pea), drumstick, pumpkin, shallots, tamarind extract, sambar powder.\nInstructions: Boil dal until mushy. Cook veggies in tamarind water with sambar spice. Combine and temper with mustard and curry leaves.',
};

// Harris-Benedict BMR and Caloric needs calculation
export function calculateCaloricNeeds(
  weight: number,
  height: number,
  age: number,
  gender: 'male' | 'female',
  activityLevel: 'sedentary' | 'lightly active' | 'moderately active' | 'very active' | 'extra active'
): number {
  if (weight <= 0 || height <= 0 || age <= 0) return 0;
  let bmr: number;
  if (gender === 'male') {
    bmr = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
  } else {
    bmr = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
  }

  const multipliers: Record<string, number> = {
    sedentary: 1.2,
    'lightly active': 1.375,
    'moderately active': 1.55,
    'very active': 1.725,
    'extra active': 1.9,
  };

  const mult = multipliers[activityLevel.toLowerCase()] || 1.375;
  return Math.round(bmr * mult);
}

export function calculateMacros(
  caloricNeeds: number,
  goal: 'Weight Loss' | 'Maintenance' | 'Muscle Gain'
): { calories: number; protein: number; carbs: number; fat: number } {
  let adjustedCalories = caloricNeeds;
  let proteinRatio = 0.25;
  let fatRatio = 0.3;
  let carbRatio = 0.45;

  if (goal === 'Weight Loss') {
    adjustedCalories = caloricNeeds * 0.85;
    proteinRatio = 0.3;
    fatRatio = 0.3;
    carbRatio = 0.4;
  } else if (goal === 'Muscle Gain') {
    adjustedCalories = caloricNeeds * 1.15;
    proteinRatio = 0.3;
    fatRatio = 0.25;
    carbRatio = 0.45;
  }

  return {
    calories: Math.round(adjustedCalories),
    protein: Math.round((adjustedCalories * proteinRatio) / 4),
    carbs: Math.round((adjustedCalories * carbRatio) / 4),
    fat: Math.round((adjustedCalories * fatRatio) / 9),
  };
}

export interface PediatricInsulinInput {
  ageYears: number;
  weightKg: number;
  currentBgMgDl: number;
  targetBgMgDl?: number;
  mealCarbsGrams: number;
  icrOverride?: number;
  isfOverride?: number;
  activeIobUnits?: number;
  useHalfUnits?: boolean;
}

export interface PediatricInsulinResult {
  isEligibleAge: boolean;
  ageCategory: 'Toddler (1-3)' | 'Pre-School (4-6)' | 'School-Age (7-11)' | 'Adolescent (12-17)' | 'Invalid';
  estimatedTdd: number;
  calculatedIcr: number;
  calculatedIsf: number;
  carbBolus: number;
  correctionBolus: number;
  iobDeduction: number;
  rawTotalBolus: number;
  roundedBolus: number;
  isHypoWarning: boolean;
  hypoActionPlan?: string;
  timingGuidance: string;
}

export function calculatePediatricInsulin(input: PediatricInsulinInput): PediatricInsulinResult {
  const {
    ageYears,
    weightKg,
    currentBgMgDl,
    targetBgMgDl = 110,
    mealCarbsGrams,
    icrOverride,
    isfOverride,
    activeIobUnits = 0,
    useHalfUnits = true,
  } = input;

  if (ageYears <= 0 || ageYears > 17) {
    return {
      isEligibleAge: false,
      ageCategory: 'Invalid',
      estimatedTdd: 0,
      calculatedIcr: 15,
      calculatedIsf: 50,
      carbBolus: 0,
      correctionBolus: 0,
      iobDeduction: 0,
      rawTotalBolus: 0,
      roundedBolus: 0,
      isHypoWarning: false,
      timingGuidance: 'Please specify age between 1 and 17 for pediatric dosing.',
    };
  }

  let multiplierPerKg = 0.6;
  let ageCategory: PediatricInsulinResult['ageCategory'] = 'School-Age (7-11)';

  if (ageYears <= 3) {
    ageCategory = 'Toddler (1-3)';
    multiplierPerKg = 0.5;
  } else if (ageYears <= 6) {
    ageCategory = 'Pre-School (4-6)';
    multiplierPerKg = 0.6;
  } else if (ageYears <= 11) {
    ageCategory = 'School-Age (7-11)';
    multiplierPerKg = 0.7;
  } else {
    ageCategory = 'Adolescent (12-17)';
    multiplierPerKg = 0.95;
  }

  const estimatedTdd = Math.round(weightKg * multiplierPerKg * 10) / 10;
  const defaultIcr = Math.max(6, Math.min(35, Math.round(500 / estimatedTdd)));
  const icr = icrOverride && icrOverride > 0 ? icrOverride : defaultIcr;

  const defaultIsf = Math.max(20, Math.min(150, Math.round(1800 / estimatedTdd)));
  const isf = isfOverride && isfOverride > 0 ? isfOverride : defaultIsf;

  const carbBolus = mealCarbsGrams > 0 ? mealCarbsGrams / icr : 0;
  const isHypoWarning = currentBgMgDl < 70;
  let correctionBolus = 0;

  if (isHypoWarning) {
    correctionBolus = 0;
  } else if (currentBgMgDl > targetBgMgDl) {
    correctionBolus = (currentBgMgDl - targetBgMgDl) / isf;
  }

  const effectiveIobDeduction = Math.min(activeIobUnits, Math.max(0, correctionBolus));
  const totalCorrectionAfterIob = Math.max(0, correctionBolus - effectiveIobDeduction);
  const rawTotalBolus = Math.max(0, carbBolus + totalCorrectionAfterIob);

  let roundedBolus = rawTotalBolus;
  if (useHalfUnits) {
    roundedBolus = Math.round(rawTotalBolus * 2) / 2;
  } else {
    roundedBolus = Math.round(rawTotalBolus * 10) / 10;
  }

  let timingGuidance = 'Administer rapid-acting insulin 10-15 minutes prior to meal.';
  if (ageCategory === 'Toddler (1-3)') {
    timingGuidance = 'For toddlers with unpredictable food intake: inject immediately after meal based on carbs actually consumed.';
  } else if (currentBgMgDl > 200) {
    timingGuidance = 'Blood sugar is elevated: allow a 20-minute lead time after injection before beginning meal.';
  }

  let hypoActionPlan: string | undefined;
  if (isHypoWarning) {
    hypoActionPlan = 'CRITICAL ALERT (BG < 70 mg/dL): DO NOT GIVE INSULIN NOW. Implement the Rule of 15 immediately: Provide 15g fast-acting simple carbs (1/2 cup juice or 3 glucose tablets). Re-check in 15 minutes. Wait until blood glucose is > 90 mg/dL before re-evaluating meal bolus.';
  }

  return {
    isEligibleAge: true,
    ageCategory,
    estimatedTdd,
    calculatedIcr: icr,
    calculatedIsf: isf,
    carbBolus: Math.round(carbBolus * 100) / 100,
    correctionBolus: Math.round(correctionBolus * 100) / 100,
    iobDeduction: Math.round(effectiveIobDeduction * 100) / 100,
    rawTotalBolus: Math.round(rawTotalBolus * 100) / 100,
    roundedBolus,
    isHypoWarning,
    hypoActionPlan,
    timingGuidance,
  };
}
