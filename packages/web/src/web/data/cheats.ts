// Cheat data for the vault. Every row names its source. Nothing here has been
// run in-game by us, so the UI marks each entry "unverified in-game".
export type Cheat = {
  game: string;
  consoles: string[];
  code: string;
  effect: string;
  source: string;
};

export const CONSOLES = [
  "PC",
  "PS1",
  "PS2",
  "PS3",
  "PS4",
  "PS5",
  "Xbox 360",
  "Xbox One",
  "Switch",
  "Switch 2",
  "NES",
  "SNES",
] as const;

const GTA3_PC = "GTA3.com PC cheat list";
const GTA3_PS = "Radio Times GTA III PlayStation list";
const GTA3_XB = "Radio Times GTA III Xbox list";
const GTA3_SW = "Radio Times GTA III Switch list";
const GTA4 = "Radio Times GTA IV list";
const GTA5_PHONE = "Radio Times GTA V phone cheats";
const GTA5_PC = "Radio Times GTA V PC word cheats";
const GTA5_PS = "Radio Times GTA V PlayStation list";
const GTA5_XB = "Radio Times GTA V Xbox list";

const PS_OLD = ["PS2", "PS4", "PS5"];
const ALL_GTA4 = ["PC", "PS3", "Xbox 360"];
const PHONE_V = ["PC", "PS3", "PS4", "PS5", "Xbox 360", "Xbox One"];
const XB = ["Xbox 360", "Xbox One"];

export const cheats: Cheat[] = [
  // Grand Theft Auto III
  { game: "GTA III", consoles: ["PC"], code: "GUNSGUNSGUNS", effect: "All weapons", source: GTA3_PC },
  { game: "GTA III", consoles: ["PC"], code: "IFIWEREARICHMAN", effect: "Money", source: GTA3_PC },
  { game: "GTA III", consoles: ["PC"], code: "GESUNDHEIT", effect: "Full health", source: GTA3_PC },
  { game: "GTA III", consoles: ["PC"], code: "TURTOISE", effect: "Full armour", source: GTA3_PC },
  { game: "GTA III", consoles: ["PC"], code: "MOREPOLICEPLEASE", effect: "Raise wanted level", source: GTA3_PC },
  { game: "GTA III", consoles: ["PC"], code: "NOPOLICEPLEASE", effect: "Lower wanted level", source: GTA3_PC },
  { game: "GTA III", consoles: ["PC"], code: "GIVEUSATANK", effect: "Spawn Rhino tank", source: GTA3_PC },
  { game: "GTA III", consoles: ["PC"], code: "BANGBANGBANG", effect: "All cars explode", source: GTA3_PC },
  { game: "GTA III", consoles: ["PC"], code: "ILIKEDRESSINGUP", effect: "Change outfit", source: GTA3_PC },
  { game: "GTA III", consoles: ["PC"], code: "TIMEFLIESWHENYOU", effect: "Speed up time", source: GTA3_PC },
  { game: "GTA III", consoles: ["PC"], code: "BOOOOORING", effect: "Slow down time", source: GTA3_PC },
  { game: "GTA III", consoles: ["PC"], code: "SKINCANCERFORME", effect: "Clear weather", source: GTA3_PC },
  { game: "GTA III", consoles: ["PC"], code: "PEASOUP", effect: "Fog", source: GTA3_PC },
  { game: "GTA III", consoles: ["PC"], code: "CHITTYCHITTYBB", effect: "Flying cars", source: GTA3_PC },
  { game: "GTA III", consoles: ["PC"], code: "WEAPONSFORALL", effect: "Pedestrians fight with weapons", source: GTA3_PC },
  { game: "GTA III", consoles: PS_OLD, code: "R2, R2, L1, R2, ←, ↓, →, ↑, ←, ↓, →, ↑", effect: "All weapons", source: GTA3_PS },
  { game: "GTA III", consoles: PS_OLD, code: "R2, R2, L1, R1, ←, ↓, →, ↑, ←, ↓, →, ↑", effect: "Full health", source: GTA3_PS },
  { game: "GTA III", consoles: PS_OLD, code: "R2, R2, L1, L2, ←, ↓, →, ↑, ←, ↓, →, ↑", effect: "Full armour", source: GTA3_PS },
  { game: "GTA III", consoles: PS_OLD, code: "R2, R2, L1, L1, ←, ↓, →, ↑, ←, ↓, →, ↑", effect: "Money", source: GTA3_PS },
  { game: "GTA III", consoles: PS_OLD, code: "R2, R2, L1, R2, ↑, ↓, ↑, ↓, ↑, ↓", effect: "Lower wanted level", source: GTA3_PS },
  { game: "GTA III", consoles: PS_OLD, code: "R2, R2, L1, R2, ←, →, ←, →, ←", effect: "Raise wanted level", source: GTA3_PS },
  { game: "GTA III", consoles: PS_OLD, code: "CIRCLE, CIRCLE, CIRCLE, CIRCLE, CIRCLE, CIRCLE, R1, L2, L1, TRIANGLE, CIRCLE, TRIANGLE", effect: "Spawn Rhino tank", source: GTA3_PS },
  { game: "GTA III", consoles: XB, code: "RT, RT, LB, RT, ←, ↓, →, ↑, ←, ↓, →, ↑", effect: "All weapons", source: GTA3_XB },
  { game: "GTA III", consoles: XB, code: "RT, RT, LB, RB, ←, ↓, →, ↑, ←, ↓, →, ↑", effect: "Full health", source: GTA3_XB },
  { game: "GTA III", consoles: XB, code: "RT, RT, LB, LT, ←, ↓, →, ↑, ←, ↓, →, ↑", effect: "Full armour", source: GTA3_XB },
  { game: "GTA III", consoles: XB, code: "RT, RT, LB, LB, ←, ↓, →, ↑, ←, ↓, →, ↑", effect: "Money", source: GTA3_XB },
  { game: "GTA III", consoles: ["Switch"], code: "ZR, ZR, L, ZR, ←, ↓, →, ↑, ←, ↓, →, ↑", effect: "All weapons", source: GTA3_SW },
  { game: "GTA III", consoles: ["Switch"], code: "ZR, ZR, L, R, ←, ↓, →, ↑, ←, ↓, →, ↑", effect: "Full health", source: GTA3_SW },
  { game: "GTA III", consoles: ["Switch"], code: "ZR, ZR, L, ZL, ←, ↓, →, ↑, ←, ↓, →, ↑", effect: "Full armour", source: GTA3_SW },

  // Grand Theft Auto IV (phone cheats, same numbers on PC, PS3 and Xbox 360)
  { game: "GTA IV", consoles: ALL_GTA4, code: "486-555-0150", effect: "Weapons set 1", source: GTA4 },
  { game: "GTA IV", consoles: ALL_GTA4, code: "486-555-0100", effect: "Weapons set 2", source: GTA4 },
  { game: "GTA IV", consoles: ALL_GTA4, code: "482-555-0100", effect: "Health, armour and ammo", source: GTA4 },
  { game: "GTA IV", consoles: ALL_GTA4, code: "362-555-0100", effect: "Armour", source: GTA4 },
  { game: "GTA IV", consoles: ALL_GTA4, code: "468-555-0100", effect: "Change weather (and time of day on PC)", source: GTA4 },
  { game: "GTA IV", consoles: ALL_GTA4, code: "267-555-0150", effect: "Raise wanted level", source: GTA4 },
  { game: "GTA IV", consoles: ALL_GTA4, code: "267-555-0100", effect: "Remove wanted level", source: GTA4 },
  { game: "GTA IV", consoles: ALL_GTA4, code: "948-555-0100", effect: "Song information", source: GTA4 },
  { game: "GTA IV", consoles: ALL_GTA4, code: "359-555-0100", effect: "Spawn Annihilator helicopter", source: GTA4 },
  { game: "GTA IV", consoles: ALL_GTA4, code: "227-555-0142", effect: "Spawn Cognoscenti", source: GTA4 },
  { game: "GTA IV", consoles: ALL_GTA4, code: "227-555-0175", effect: "Spawn Comet", source: GTA4 },
  { game: "GTA IV", consoles: ALL_GTA4, code: "227-555-0168", effect: "Spawn SuperGT", source: GTA4 },
  { game: "GTA IV", consoles: ALL_GTA4, code: "227-555-0100", effect: "Spawn FIB Buffalo", source: GTA4 },
  { game: "GTA IV", consoles: ALL_GTA4, code: "938-555-0100", effect: "Spawn Jetmax boat", source: GTA4 },
  { game: "GTA IV", consoles: ALL_GTA4, code: "625-555-0150", effect: "Spawn Sanchez bike", source: GTA4 },

  // Grand Theft Auto V
  { game: "GTA V", consoles: ["PC"], code: "PAINKILLER", effect: "Invincibility", source: GTA5_PC },
  { game: "GTA V", consoles: ["PC"], code: "TURTLE", effect: "Max health and armour", source: GTA5_PC },
  { game: "GTA V", consoles: ["PC"], code: "FUGITIVE", effect: "Raise wanted level", source: GTA5_PC },
  { game: "GTA V", consoles: ["PC"], code: "LAWYERUP", effect: "Lower wanted level", source: GTA5_PC },
  { game: "GTA V", consoles: ["PC"], code: "HOPTOIT", effect: "Super jump", source: GTA5_PC },
  { game: "GTA V", consoles: ["PC"], code: "INCENDIARY", effect: "Flaming bullets", source: GTA5_PC },
  { game: "GTA V", consoles: ["PC"], code: "HIGHEX", effect: "Explosive bullets", source: GTA5_PC },
  { game: "GTA V", consoles: ["PC"], code: "HOTHANDS", effect: "Explosive melee", source: GTA5_PC },
  { game: "GTA V", consoles: ["PC"], code: "SKYDIVE", effect: "Parachute", source: GTA5_PC },
  { game: "GTA V", consoles: ["PC"], code: "DEADEYE", effect: "Slow-motion aim (enter 3 times)", source: GTA5_PC },
  { game: "GTA V", consoles: ["PC"], code: "BUZZOFF", effect: "Spawn Buzzard attack helicopter", source: GTA5_PC },
  { game: "GTA V", consoles: ["PC"], code: "BARNSTORM", effect: "Spawn stunt plane", source: GTA5_PC },
  { game: "GTA V", consoles: ["PC"], code: "SNOWDAY", effect: "Slippery cars", source: GTA5_PC },
  { game: "GTA V", consoles: ["PC"], code: "MAKEITRAIN", effect: "Change weather", source: GTA5_PC },
  { game: "GTA V", consoles: ["PC"], code: "CATCHME", effect: "Fast run", source: GTA5_PC },
  { game: "GTA V", consoles: ["PC"], code: "FLOATER", effect: "Moon gravity", source: GTA5_PC },
  { game: "GTA V", consoles: ["PC"], code: "POWERUP", effect: "Recharge ability", source: GTA5_PC },
  { game: "GTA V", consoles: ["PC"], code: "VINEWOOD", effect: "Spawn Limo", source: GTA5_PC },
  { game: "GTA V", consoles: ["PC"], code: "ROCKET", effect: "Spawn PCJ-600 motorcycle", source: GTA5_PC },
  { game: "GTA V", consoles: ["PC"], code: "OFFROAD", effect: "Spawn Sanchez dirt bike", source: GTA5_PC },
  { game: "GTA V", consoles: ["PC"], code: "BANDIT", effect: "Spawn BMX", source: GTA5_PC },
  { game: "GTA V", consoles: ["PC"], code: "RAPIDGT", effect: "Spawn Rapid GT", source: GTA5_PC },
  { game: "GTA V", consoles: ["PC"], code: "COMET", effect: "Spawn Comet", source: GTA5_PC },
  { game: "GTA V", consoles: ["PC"], code: "TRASHED", effect: "Spawn Trashmaster", source: GTA5_PC },
  { game: "GTA V", consoles: ["PC"], code: "JRTALENT", effect: "Director mode", source: GTA5_PC },
  { game: "GTA V", consoles: PHONE_V, code: "1-999-887-853 (1-999-TURTLE)", effect: "Max health and armour, via in-game phone", source: GTA5_PHONE },
  { game: "GTA V", consoles: PHONE_V, code: "1-999-866-587 (1-999-TOOLUP)", effect: "Weapons and ammo, via in-game phone", source: GTA5_PHONE },
  { game: "GTA V", consoles: PHONE_V, code: "1-999-3844-8483 (1-999-FUGITIVE)", effect: "Raise wanted level, via in-game phone", source: GTA5_PHONE },
  { game: "GTA V", consoles: PHONE_V, code: "1-999-5299-3787 (1-999-LAWYERUP)", effect: "Lower wanted level, via in-game phone", source: GTA5_PHONE },
  { game: "GTA V", consoles: PHONE_V, code: "1-999-2899-633 (1-999-BUZZOFF)", effect: "Spawn helicopter, via in-game phone", source: GTA5_PHONE },
  { game: "GTA V", consoles: PHONE_V, code: "1-999-759-3483 (1-999-SKYDIVE)", effect: "Parachute, via in-game phone", source: GTA5_PHONE },
  { game: "GTA V", consoles: ["PS3", "PS4", "PS5"], code: "TRIANGLE, R2, LEFT, L1, X, RIGHT, TRIANGLE, DOWN, SQUARE, L1, L1, L1", effect: "Give weapons", source: GTA5_PS },
  { game: "GTA V", consoles: ["PS3", "PS4", "PS5"], code: "R1, R1, CIRCLE, R2, LEFT, RIGHT, LEFT, RIGHT, LEFT, RIGHT", effect: "Raise wanted level", source: GTA5_PS },
  { game: "GTA V", consoles: ["PS3", "PS4", "PS5"], code: "LEFT, LEFT, TRIANGLE, TRIANGLE, RIGHT, RIGHT, LEFT, RIGHT, SQUARE, R1, R2", effect: "Super jump", source: GTA5_PS },
  { game: "GTA V", consoles: ["PS3", "PS4", "PS5"], code: "RIGHT, X, RIGHT, LEFT, RIGHT, R1, RIGHT, LEFT, X, TRIANGLE", effect: "Invincibility", source: GTA5_PS },
  { game: "GTA V", consoles: XB, code: "RIGHT, A, RIGHT, LEFT, RIGHT, RB, RIGHT, LEFT, A, Y", effect: "Invincibility", source: GTA5_XB },
  { game: "GTA V", consoles: XB, code: "B, LB, Y, RT, A, X, B, RIGHT, X, LB, LB, LB", effect: "Max health and armour", source: GTA5_XB },
  { game: "GTA V", consoles: XB, code: "Y, RT, LEFT, LB, A, RIGHT, Y, DOWN, X, LB, LB, LB", effect: "Weapons", source: GTA5_XB },
  { game: "GTA V", consoles: XB, code: "RB, RB, B, RT, LEFT, RIGHT, LEFT, RIGHT, LEFT, RIGHT", effect: "Raise wanted level", source: GTA5_XB },
];
