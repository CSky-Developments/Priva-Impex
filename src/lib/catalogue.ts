/**
 * Product catalogue. Each category renders a card on /products and a
 * full detail page at /products/[slug] via generateStaticParams.
 */

export type Category = {
  slug: string;
  code: string;
  name: string;
  summary: string;
  /** Longer paragraph shown on the detail page hero. */
  intro: string;
  items: string[];
  /** Spec-sheet rows — the technical texture of the detail page. */
  specs: { label: string; value: string }[];
  materials: string[];
  standards: string[];
  hsHint: string;
};

export const categories: Category[] = [
  {
    slug: "hand-tools",
    code: "HT",
    name: "Hand Tools",
    summary:
      "Spanners, pliers, screwdrivers and striking tools in drop-forged chrome vanadium and carbon steel.",
    intro:
      "The backbone of any hardware programme. We source drop-forged hand tools from Punjab and Gujarat clusters with verified heat-treatment records, then batch-test hardness and torque before a container is sealed.",
    items: [
      "Combination & ring spanners",
      "Socket sets and drive tools",
      "Adjustable wrenches",
      "Combination, nose & cutting pliers",
      "Slotted, Phillips & precision screwdrivers",
      "Ball-pein, claw and sledge hammers",
      "Cold chisels and punches",
      "Hacksaw frames and blades",
      "Files and rasps",
      "Pipe wrenches and tube cutters",
    ],
    specs: [
      { label: "Primary material", value: "Chrome Vanadium (Cr-V) 6150" },
      { label: "Alternate material", value: "Carbon Steel S45C / 40Cr" },
      { label: "Hardness range", value: "HRC 44 – 52" },
      { label: "Finish options", value: "Mirror polish, satin chrome, black oxide, phosphate" },
      { label: "Typical MOQ", value: "500 – 1,000 pcs per SKU" },
      { label: "Packing", value: "Blister / skin pack / hanger card / bulk carton" },
    ],
    materials: ["Chrome Vanadium", "Carbon Steel", "Chrome Molybdenum", "Forged Alloy Steel"],
    standards: ["DIN 3113", "ANSI B107", "IS 2028", "ISO 1711"],
    hsHint: "8204 · 8203 · 8205",
  },
  {
    slug: "power-tool-accessories",
    code: "PA",
    name: "Power Tool Accessories",
    summary:
      "Drill bits, cutting discs, holesaws and driver bits engineered for consistent run-out and tool life.",
    intro:
      "Consumables move fast and fail loudly — so tolerance discipline matters more here than anywhere. We qualify suppliers on run-out, coating adhesion and cycle life, and we hold retained samples from every production lot we ship.",
    items: [
      "HSS twist drill bits (jobber, stub, long series)",
      "SDS-plus & SDS-max hammer bits",
      "Masonry and TCT-tipped drills",
      "TCT circular saw blades",
      "Diamond cutting & segmented blades",
      "Bi-metal holesaws and arbors",
      "Screwdriver bits and bit holders",
      "Router bits and forstner bits",
      "Wire brushes and flap discs",
    ],
    specs: [
      { label: "HSS grades", value: "M2 (HSS-G), M35 (5% Co), M42 (8% Co)" },
      { label: "Coatings", value: "Bright, black oxide, TiN, TiAlN" },
      { label: "Point angle", value: "118° / 135° split point" },
      { label: "Run-out tolerance", value: "≤ 0.05 mm on jobber series" },
      { label: "Typical MOQ", value: "2,000 pcs per size" },
      { label: "Packing", value: "Plastic case, metal index, poly sleeve, bulk" },
    ],
    materials: ["HSS M2 / M35 / M42", "Tungsten Carbide", "Diamond Segment", "Bi-Metal"],
    standards: ["DIN 338", "DIN 340", "EN 13236", "ISO 235"],
    hsHint: "8207 · 8202 · 6804",
  },
  {
    slug: "fasteners",
    code: "FS",
    name: "Fasteners & Fixings",
    summary:
      "Bolts, nuts, screws, anchors and washers across property classes, plating systems and thread standards.",
    intro:
      "Fasteners are a documentation business as much as a manufacturing one. Every shipment travels with mill test certificates, plating thickness reports and, where the buyer requires it, third-party mechanical verification.",
    items: [
      "Hex bolts and set screws",
      "Socket head cap screws (SHCS)",
      "Self-drilling and self-tapping screws",
      "Drywall and chipboard screws",
      "Hex, nylock and flange nuts",
      "Plain, spring and toothed washers",
      "Wedge and sleeve anchors",
      "Threaded rods and studs",
      "Rivets, clips and circlips",
    ],
    specs: [
      { label: "Property classes", value: "4.8 / 8.8 / 10.9 / 12.9" },
      { label: "Stainless grades", value: "A2-70 (SS304), A4-80 (SS316)" },
      { label: "Plating", value: "Zinc CR3, hot-dip galvanised, geomet, black phosphate" },
      { label: "Salt spray", value: "72 – 480 hrs depending on system" },
      { label: "Thread standards", value: "Metric coarse/fine, UNC, UNF, BSW" },
      { label: "Typical MOQ", value: "100 kg – 500 kg per size" },
    ],
    materials: ["Carbon Steel", "Alloy Steel", "SS 304 / 316", "Brass"],
    standards: ["ISO 898-1", "DIN 933 / 912", "ASTM A325", "IS 1367"],
    hsHint: "7318 · 7317",
  },
  {
    slug: "abrasives",
    code: "AB",
    name: "Abrasives",
    summary:
      "Bonded and coated abrasives — cutting wheels, grinding wheels, flap discs and sheet abrasives.",
    intro:
      "Abrasives carry real safety weight, so we ship only from plants that hold current oSa or EN 12413 conformity and we verify burst-speed test records lot by lot. No exceptions, no substitutions mid-order.",
    items: [
      "Depressed centre cutting wheels",
      "Grinding wheels (A24, A36, A60)",
      "Zirconia and aluminium oxide flap discs",
      "Emery cloth rolls and sheets",
      "Waterproof silicon carbide paper",
      "Fibre discs and backing pads",
      "Non-woven abrasive pads",
      "Mounted points and burrs",
    ],
    specs: [
      { label: "Grain types", value: "Aluminium Oxide, Zirconia, Silicon Carbide, Ceramic" },
      { label: "Cutting wheel sizes", value: "100 / 115 / 125 / 180 / 230 mm" },
      { label: "Thickness range", value: "1.0 – 3.0 mm (cutting), 6.0 mm (grinding)" },
      { label: "Max operating speed", value: "80 m/s (certified burst tested)" },
      { label: "Grit range", value: "P24 – P2000" },
      { label: "Typical MOQ", value: "5,000 pcs per specification" },
    ],
    materials: ["Aluminium Oxide", "Zirconia Alumina", "Silicon Carbide", "Ceramic Grain"],
    standards: ["EN 12413", "oSa Certified", "ISO 603", "ANSI B7.1"],
    hsHint: "6804 · 6805",
  },
  {
    slug: "measuring-tools",
    code: "MT",
    name: "Measuring & Layout",
    summary:
      "Tapes, callipers, squares, levels and marking tools calibrated to declared accuracy classes.",
    intro:
      "Metrology products are only worth shipping if the numbers hold. We require calibration certificates traceable to national standards and we spot-verify incoming lots against our own reference gauges.",
    items: [
      "Steel measuring tapes (3m – 10m)",
      "Long tapes and fibreglass tapes",
      "Vernier and digital callipers",
      "Micrometers (outside, inside, depth)",
      "Try squares and combination squares",
      "Spirit levels and box levels",
      "Chalk lines and marking gauges",
      "Feeler gauges and thread gauges",
      "Steel rules and straight edges",
    ],
    specs: [
      { label: "Tape accuracy", value: "EC Class I / Class II" },
      { label: "Calliper resolution", value: "0.02 mm (vernier), 0.01 mm (digital)" },
      { label: "Micrometer accuracy", value: "±0.004 mm over 0–25 mm" },
      { label: "Level vial accuracy", value: "0.5 mm/m" },
      { label: "Calibration", value: "Traceable certificate on request" },
      { label: "Typical MOQ", value: "500 – 2,000 pcs per SKU" },
    ],
    materials: ["Hardened Steel", "Stainless Steel", "ABS + TPR", "Aluminium Alloy"],
    standards: ["EC Class I/II", "DIN 862", "ISO 3599", "IS 1269"],
    hsHint: "9017 · 9015",
  },
  {
    slug: "safety-equipment",
    code: "SE",
    name: "Safety & PPE",
    summary:
      "Certified personal protective equipment — gloves, eyewear, helmets, footwear and hearing protection.",
    intro:
      "PPE is the one category where a certificate is the product. We handle only CE / EN-marked lines with valid notified-body documentation, and we keep declaration-of-conformity files on record for every article number we export.",
    items: [
      "Cut-resistant and coated work gloves",
      "Leather and welding gloves",
      "Safety spectacles and goggles",
      "Face shields and welding helmets",
      "Industrial safety helmets",
      "Steel-toe safety footwear",
      "Ear plugs and ear muffs",
      "Dust masks and respirators",
      "High-visibility vests and jackets",
    ],
    specs: [
      { label: "Glove cut levels", value: "EN 388 — Level A to F" },
      { label: "Eyewear impact", value: "EN 166 — F / B / A rated" },
      { label: "Helmet standard", value: "EN 397 / IS 2925" },
      { label: "Footwear class", value: "S1 / S1P / S3 (EN ISO 20345)" },
      { label: "Hearing protection", value: "SNR 25 – 35 dB" },
      { label: "Typical MOQ", value: "1,000 – 5,000 pcs" },
    ],
    materials: ["HPPE / Kevlar", "Polycarbonate", "Nitrile & PU", "HDPE"],
    standards: ["EN 388", "EN 166", "EN ISO 20345", "CE Marked"],
    hsHint: "6116 · 9004 · 6506",
  },
  {
    slug: "builders-hardware",
    code: "BH",
    name: "Builders Hardware",
    summary:
      "Architectural and construction hardware — hinges, locks, handles, latches and door furniture.",
    intro:
      "Finish consistency decides whether a builders-hardware order gets repeated. We lock the finish reference against a signed master sample and re-verify colour and coating on every subsequent production run.",
    items: [
      "Butt, piano and concealed hinges",
      "Mortise and cylindrical locksets",
      "Padlocks and cabinet locks",
      "Door handles and pull bars",
      "Tower bolts and aldrops",
      "Drawer slides and telescopic channels",
      "Gate hardware and latches",
      "Door closers and floor springs",
      "Furniture fittings and brackets",
    ],
    specs: [
      { label: "Base materials", value: "SS 304, brass, zinc alloy, MS" },
      { label: "Finishes", value: "Satin SS, antique brass, matt black, chrome, PVD" },
      { label: "Hinge cycle test", value: "100,000 cycles (EN 1935)" },
      { label: "Lock cycle test", value: "200,000 cycles (EN 12209)" },
      { label: "Salt spray", value: "96 – 240 hrs" },
      { label: "Typical MOQ", value: "500 – 2,000 sets" },
    ],
    materials: ["SS 304", "Brass", "Zinc Alloy", "Mild Steel"],
    standards: ["EN 1935", "EN 12209", "ANSI/BHMA", "IS 12817"],
    hsHint: "8302 · 8301",
  },
  {
    slug: "plumbing-hardware",
    code: "PH",
    name: "Plumbing Hardware",
    summary:
      "Brass fittings, valves, pipe fixings and sanitary hardware for distribution and project supply.",
    intro:
      "Brass composition drives both cost and compliance. We declare alloy grade and lead content up front, and we pressure-test valve lots to the buyer's declared working pressure before release.",
    items: [
      "Brass compression and threaded fittings",
      "Ball valves and gate valves",
      "Angle valves and stop cocks",
      "Pipe clamps and hangers",
      "Tap connectors and flexible hoses",
      "Shower arms and rain heads",
      "Waste couplings and bottle traps",
      "PTFE tape and thread sealants",
    ],
    specs: [
      { label: "Brass grade", value: "CW617N / CW614N forged brass" },
      { label: "Working pressure", value: "PN16 / PN25 rated" },
      { label: "Temperature range", value: "-20 °C to +120 °C" },
      { label: "Thread standards", value: "BSP, NPT, ISO 228" },
      { label: "Testing", value: "100% pneumatic leak test on valves" },
      { label: "Typical MOQ", value: "1,000 pcs or 300 kg" },
    ],
    materials: ["Forged Brass CW617N", "SS 304", "Chrome-plated Brass", "EPDM Seals"],
    standards: ["EN 12165", "ISO 228", "EN 1254", "IS 6912"],
    hsHint: "7412 · 8481",
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
