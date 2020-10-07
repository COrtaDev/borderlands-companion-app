const fs = require('fs');
const allManufacturers =
    [
        {
            "id": 1,
            "name": "Carrier",
            "manufacturer": "Atlas",
            "element": "N",
            "type": "AR"
        },
        {
            "id": 2,
            "name": "O.P.Q. System",
            "manufacturer": "Atlas",
            "element": "N",
            "type": "AR"
        },
        {
            "id": 3,
            "name": "Portals and Shite",
            "manufacturer": "Atlas",
            "element": "N",
            "type": "AR"
        },
        {
            "id": 4,
            "name": "Rebel Yell",
            "manufacturer": "Atlas",
            "element": "N",
            "type": "AR"
        },
        {
            "id": 5,
            "name": "Linc",
            "manufacturer": "Atlas",
            "element": "N",
            "type": "Pistol"
        },
        {
            "id": 6,
            "name": "Multi-tap",
            "manufacturer": "Atlas",
            "element": "N",
            "type": "Pistol"
        },
        {
            "id": 7,
            "name": "Freeman",
            "manufacturer": "Atlas",
            "element": "N",
            "type": "RPG"
        },
        {
            "id": 8,
            "name": "Plumage",
            "manufacturer": "Atlas",
            "element": "N",
            "type": "RPG"
        },
        {
            "id": 9,
            "name": "Ruby's Wrath",
            "manufacturer": "Atlas",
            "element": "N",
            "type": "RPG"
        },
        {
            "id": 10,
            "name": "Embrace the Pain",
            "manufacturer": "COV",
            "element": "F",
            "type": "AR"
        },
        {
            "id": 11,
            "name": "NoPewPew",
            "manufacturer": "COV",
            "element": "F",
            "type": "AR"
        },
        {
            "id": 12,
            "name": "Pain is Power",
            "manufacturer": "COV",
            "element": "F",
            "type": "AR"
        },
        {
            "id": 13,
            "name": "Sawbar",
            "manufacturer": "COV",
            "element": "F",
            "type": "AR"
        },
        {
            "id": 14,
            "name": "Seeryul Killur",
            "manufacturer": "COV",
            "element": "F",
            "type": "AR"
        },
        {
            "id": 15,
            "name": "Stauros' Burn",
            "manufacturer": "COV",
            "element": "F",
            "type": "AR"
        },
        {
            "id": 16,
            "name": "Zheitsev's Eruption",
            "manufacturer": "COV",
            "element": "Any",
            "type": "AR"
        },
        {
            "id": 17,
            "name": "Gargoyle",
            "manufacturer": "COV",
            "element": "C",
            "type": "Pistol"
        },
        {
            "id": 18,
            "name": "Hydrafrost",
            "manufacturer": "COV",
            "element": "O",
            "type": "Pistol"
        },
        {
            "id": 19,
            "name": "Linoge",
            "manufacturer": "COV",
            "element": "F C",
            "type": "Pistol"
        },
        {
            "id": 20,
            "name": "Pestilence",
            "manufacturer": "COV",
            "element": "R",
            "type": "Pistol"
        },
        {
            "id": 21,
            "name": "Psycho Stabber",
            "manufacturer": "COV",
            "element": "N",
            "type": "Pistol"
        },
        {
            "id": 22,
            "name": "SkekSil",
            "manufacturer": "COV",
            "element": "F C S",
            "type": "Pistol"
        },
        {
            "id": 23,
            "name": "Globetrottr",
            "manufacturer": "COV",
            "element": "Any N",
            "type": "RPG"
        },
        {
            "id": 24,
            "name": "Yellowcake",
            "manufacturer": "COV",
            "element": "R",
            "type": "RPG"
        },
        {
            "id": 25,
            "name": "Barrage",
            "manufacturer": "Dahl",
            "element": "N C R",
            "type": "AR"
        },
        {
            "id": 26,
            "name": "Breath of the Dying",
            "manufacturer": "Dahl",
            "element": "C",
            "type": "AR"
        },
        {
            "id": 27,
            "name": "Good Juju",
            "manufacturer": "Dahl",
            "element": "Any",
            "type": "AR"
        },
        {
            "id": 28,
            "name": "Kaos",
            "manufacturer": "Dahl",
            "element": "F C S O",
            "type": "AR"
        },
        {
            "id": 29,
            "name": "Star Helix",
            "manufacturer": "Dahl",
            "element": "N S R O",
            "type": "AR"
        },
        {
            "id": 30,
            "name": "Soulrender",
            "manufacturer": "Dahl",
            "element": "Any",
            "type": "AR"
        },
        {
            "id": 31,
            "name": "Warlord",
            "manufacturer": "Dahl",
            "element": "N F C S",
            "type": "AR"
        },
        {
            "id": 32,
            "name": "AAA",
            "manufacturer": "Dahl",
            "element": "S",
            "type": "Pistol"
        },
        {
            "id": 33,
            "name": "Hornet",
            "manufacturer": "Dahl",
            "element": "C",
            "type": "Pistol"
        },
        {
            "id": 34,
            "name": "Nemesis",
            "manufacturer": "Dahl",
            "element": "F C",
            "type": "Pistol"
        },
        {
            "id": 35,
            "name": "Night Flyer",
            "manufacturer": "Dahl",
            "element": "N",
            "type": "Pistol"
        },
        {
            "id": 36,
            "name": "The Blanc",
            "manufacturer": "Dahl",
            "element": "Any",
            "type": "Pistol"
        },
        {
            "id": 37,
            "name": "9-Volt",
            "manufacturer": "Dahl",
            "element": "S",
            "type": "SMG"
        },
        {
            "id": 38,
            "name": "Boomer",
            "manufacturer": "Dahl",
            "element": "N F",
            "type": "SMG"
        },
        {
            "id": 39,
            "name": "Crader's EM-P5",
            "manufacturer": "Dahl",
            "element": "N",
            "type": "SMG"
        },
        {
            "id": 40,
            "name": "Hellfire",
            "manufacturer": "Dahl",
            "element": "F",
            "type": "SMG"
        },
        {
            "id": 41,
            "name": "Kaoson",
            "manufacturer": "Dahl",
            "element": "Any",
            "type": "SMG"
        },
        {
            "id": 42,
            "name": "Night Hawkin",
            "manufacturer": "Dahl",
            "element": "FO",
            "type": "SMG"
        },
        {
            "id": 43,
            "name": "Ripper",
            "manufacturer": "Dahl",
            "element": "Any",
            "type": "SMG"
        },
        {
            "id": 44,
            "name": "Sleeping Giant",
            "manufacturer": "Dahl",
            "element": "N F C S",
            "type": "SMG"
        },
        {
            "id": 45,
            "name": "Vanquisher",
            "manufacturer": "Dahl",
            "element": "Any",
            "type": "SMG"
        },
        {
            "id": 46,
            "name": "AutoAimè",
            "manufacturer": "Dahl",
            "element": "N F C S",
            "type": "Sniper"
        },
        {
            "id": 47,
            "name": "Sand Hawk",
            "manufacturer": "Dahl",
            "element": "Any N",
            "type": "Sniper"
        },
        {
            "id": 48,
            "name": "Stalker",
            "manufacturer": "Dahl",
            "element": "O",
            "type": "Sniper"
        },
        {
            "id": 49,
            "name": "Malak's Bane",
            "manufacturer": "Dahl",
            "element": "F O",
            "type": "Sniper"
        },
        {
            "id": 50,
            "name": "Brainstormer",
            "manufacturer": "Hyperion",
            "element": "S",
            "type": "Shotgun"
        },
        {
            "id": 51,
            "name": "Conference Call",
            "manufacturer": "Hyperion",
            "element": "Any",
            "type": "Shotgun"
        },
        {
            "id": 52,
            "name": "Face-puncher",
            "manufacturer": "Hyperion",
            "element": "N",
            "type": "Shotgun"
        },
        {
            "id": 53,
            "name": "Fearmonger",
            "manufacturer": "Hyperion",
            "element": "Any N",
            "type": "Shotgun"
        },
        {
            "id": 54,
            "name": "Heart Breaker",
            "manufacturer": "Hyperion",
            "element": "F C S O",
            "type": "Shotgun"
        },
        {
            "id": 55,
            "name": "Iceburger",
            "manufacturer": "Hyperion",
            "element": "F",
            "type": "Shotgun"
        },
        {
            "id": 56,
            "name": "Phebert",
            "manufacturer": "Hyperion",
            "element": "Any",
            "type": "Shotgun"
        },
        {
            "id": 57,
            "name": "Reflux",
            "manufacturer": "Hyperion",
            "element": "C",
            "type": "Shotgun"
        },
        {
            "id": 58,
            "name": "Slow Hand",
            "manufacturer": "Hyperion",
            "element": "Any",
            "type": "Shotgun"
        },
        {
            "id": 59,
            "name": "The Butcher",
            "manufacturer": "Hyperion",
            "element": "Any",
            "type": "Shotgun"
        },
        {
            "id": 60,
            "name": "Bitch",
            "manufacturer": "Hyperion",
            "element": "Any",
            "type": "SMG"
        },
        {
            "id": 61,
            "name": "Cheap Tips",
            "manufacturer": "Hyperion",
            "element": "Any N",
            "type": "SMG"
        },
        {
            "id": 62,
            "name": "Crossroad",
            "manufacturer": "Hyperion",
            "element": "Any",
            "type": "SMG"
        },
        {
            "id": 63,
            "name": "Handsome Jackhammer",
            "manufacturer": "Hyperion",
            "element": "Any",
            "type": "SMG"
        },
        {
            "id": 64,
            "name": "Hyperfocus XZ41",
            "manufacturer": "Hyperion",
            "element": "*Any",
            "type": "SMG"
        },
        {
            "id": 65,
            "name": "Oldridian",
            "manufacturer": "Hyperion",
            "element": "N F S R",
            "type": "SMG"
        },
        {
            "id": 66,
            "name": "Predatory Lending",
            "manufacturer": "Hyperion",
            "element": "Any N",
            "type": "SMG"
        },
        {
            "id": 67,
            "name": "Proprietary License",
            "manufacturer": "Hyperion",
            "element": "Any N",
            "type": "SMG"
        },
        {
            "id": 68,
            "name": "Redistributor",
            "manufacturer": "Hyperion",
            "element": "Any N",
            "type": "SMG"
        },
        {
            "id": 69,
            "name": "Smog",
            "manufacturer": "Hyperion",
            "element": "Any",
            "type": "SMG"
        },
        {
            "id": 70,
            "name": "Crossbow",
            "manufacturer": "Hyperion",
            "element": "N",
            "type": "Sniper"
        },
        {
            "id": 71,
            "name": "Narp",
            "manufacturer": "Hyperion",
            "element": "Any",
            "type": "Sniper"
        },
        {
            "id": 72,
            "name": "Tankman's Shield",
            "manufacturer": "Hyperion",
            "element": "Any",
            "type": "Sniper"
        },
        {
            "id": 73,
            "name": "Woodblocker",
            "manufacturer": "Hyperion",
            "element": "Any N",
            "type": "Sniper"
        },
        {
            "id": 74,
            "name": "Bekah",
            "manufacturer": "Jakobs",
            "element": "N",
            "type": "AR"
        },
        {
            "id": 75,
            "name": "Clairvoyance",
            "manufacturer": "Jakobs",
            "element": "O",
            "type": "AR"
        },
        {
            "id": 76,
            "name": "Gatling Gun",
            "manufacturer": "Jakobs",
            "element": "N",
            "type": "AR"
        },
        {
            "id": 77,
            "name": "Hand of Glory",
            "manufacturer": "Jakobs",
            "element": "N",
            "type": "AR"
        },
        {
            "id": 78,
            "name": "Lead Sprinkler",
            "manufacturer": "Jakobs",
            "element": "N",
            "type": "AR"
        },
        {
            "id": 79,
            "name": "Mutanat",
            "manufacturer": "Jakobs",
            "element": "N",
            "type": "AR"
        },
        {
            "id": 80,
            "name": "Rowan's Call",
            "manufacturer": "Jakobs",
            "element": "F S R",
            "type": "AR"
        },
        {
            "id": 81,
            "name": "Stonethrower",
            "manufacturer": "Jakobs",
            "element": "N",
            "type": "AR"
        },
        {
            "id": 82,
            "name": "Amazing Grace",
            "manufacturer": "Jakobs",
            "element": "N",
            "type": "Pistol"
        },
        {
            "id": 83,
            "name": "Bite Size",
            "manufacturer": "Jakobs",
            "element": "N",
            "type": "Pistol"
        },
        {
            "id": 84,
            "name": "Bloom",
            "manufacturer": "Jakobs",
            "element": "N",
            "type": "Pistol"
        },
        {
            "id": 85,
            "name": "King's Call",
            "manufacturer": "Jakobs",
            "element": "F S",
            "type": "Pistol"
        },
        {
            "id": 86,
            "name": "Maggie",
            "manufacturer": "Jakobs",
            "element": "N",
            "type": "Pistol"
        },
        {
            "id": 87,
            "name": "Little Yeeti",
            "manufacturer": "Jakobs",
            "element": "N",
            "type": "Pistol"
        },
        {
            "id": 88,
            "name": "Love Drill",
            "manufacturer": "Jakobs",
            "element": "N",
            "type": "Pistol"
        },
        {
            "id": 89,
            "name": "Lucky 7",
            "manufacturer": "Jakobs",
            "element": "N",
            "type": "Pistol"
        },
        {
            "id": 90,
            "name": "Seventh Sense",
            "manufacturer": "Jakobs",
            "element": "O",
            "type": "Pistol"
        },
        {
            "id": 91,
            "name": "The Companion",
            "manufacturer": "Jakobs",
            "element": "F",
            "type": "Pistol"
        },
        {
            "id": 92,
            "name": "The Duc",
            "manufacturer": "Jakobs",
            "element": "N",
            "type": "Pistol"
        },
        {
            "id": 93,
            "name": "The Flood",
            "manufacturer": "Jakobs",
            "element": "N",
            "type": "Pistol"
        },
        {
            "id": 94,
            "name": "Unforgiven",
            "manufacturer": "Jakobs",
            "element": "N",
            "type": "Pistol"
        },
        {
            "id": 95,
            "name": "Wagon Wheel",
            "manufacturer": "Jakobs",
            "element": "N",
            "type": "Pistol"
        },
        {
            "id": 96,
            "name": "Hellwalker",
            "manufacturer": "Jakobs",
            "element": "F",
            "type": "Shotgun"
        },
        {
            "id": 97,
            "name": "Nimble Jack",
            "manufacturer": "Jakobs",
            "element": "N",
            "type": "Shotgun"
        },
        {
            "id": 98,
            "name": "One Pump Chump",
            "manufacturer": "Jakobs",
            "element": "N",
            "type": "Shotgun"
        },
        {
            "id": 99,
            "name": "Robin's Call",
            "manufacturer": "Jakobs",
            "element": "N",
            "type": "Shotgun"
        },
        {
            "id": 100,
            "name": "Sledge's Shotgun",
            "manufacturer": "Jakobs",
            "element": "N",
            "type": "Shotgun"
        },
        {
            "id": 101,
            "name": "T.K's Wave",
            "manufacturer": "Jakobs",
            "element": "N F S",
            "type": "Shotgun"
        },
        {
            "id": 102,
            "name": "The Garcia",
            "manufacturer": "Jakobs",
            "element": "N",
            "type": "Shotgun"
        },
        {
            "id": 103,
            "name": "The Tidal Wave",
            "manufacturer": "Jakobs",
            "element": "N",
            "type": "Shotgun"
        },
        {
            "id": 104,
            "name": "Cocky Bastard",
            "manufacturer": "Jakobs",
            "element": "N",
            "type": "Sniper"
        },
        {
            "id": 105,
            "name": "Headsplosion",
            "manufacturer": "Jakobs",
            "element": "N",
            "type": "Sniper"
        },
        {
            "id": 106,
            "name": "Monocle",
            "manufacturer": "Jakobs",
            "element": "N",
            "type": "Sniper"
        },
        {
            "id": 107,
            "name": "Skullmasher",
            "manufacturer": "Jakobs",
            "element": "N",
            "type": "Sniper"
        },
        {
            "id": 108,
            "name": "Unseen Threat",
            "manufacturer": "Jakobs",
            "element": "N",
            "type": "Sniper"
        },
        {
            "id": 109,
            "name": "Wedding Invitation",
            "manufacturer": "Jakobs",
            "element": "FO",
            "type": "Sniper"
        },
        {
            "id": 110,
            "name": "Queen's Call",
            "manufacturer": "Jakobs",
            "element": "C R O",
            "type": "Pistol"
        },
        {
            "id": 111,
            "name": "Beacon",
            "manufacturer": "Maliwan",
            "element": "Any N",
            "type": "Pistol"
        },
        {
            "id": 112,
            "name": "Frozen Devil",
            "manufacturer": "Maliwan",
            "element": "O",
            "type": "Pistol"
        },
        {
            "id": 113,
            "name": "Grease Trap",
            "manufacturer": "Maliwan",
            "element": "F",
            "type": "Pistol"
        },
        {
            "id": 114,
            "name": "Hellshock",
            "manufacturer": "Maliwan",
            "element": "FS",
            "type": "Pistol"
        },
        {
            "id": 115,
            "name": "Hyper-Hydrator",
            "manufacturer": "Maliwan",
            "element": "S",
            "type": "Pistol"
        },
        {
            "id": 116,
            "name": "Ice Pick",
            "manufacturer": "Maliwan",
            "element": "Any N",
            "type": "Pistol"
        },
        {
            "id": 117,
            "name": "Sellout",
            "manufacturer": "Maliwan",
            "element": "FC",
            "type": "Pistol"
        },
        {
            "id": 118,
            "name": "Superball",
            "manufacturer": "Maliwan",
            "element": "F",
            "type": "Pistol"
        },
        {
            "id": 119,
            "name": "Thunderball Fists",
            "manufacturer": "Maliwan",
            "element": "S",
            "type": "Pistol"
        },
        {
            "id": 120,
            "name": "Chandelier",
            "manufacturer": "Maliwan",
            "element": "Any N",
            "type": "Shotgun"
        },
        {
            "id": 121,
            "name": "Frequency",
            "manufacturer": "Maliwan",
            "element": "Any N",
            "type": "Shotgun"
        },
        {
            "id": 122,
            "name": "Insider",
            "manufacturer": "Maliwan",
            "element": "Any N",
            "type": "Shotgun"
        },
        {
            "id": 123,
            "name": "Kill-o'-the-Wisp",
            "manufacturer": "Maliwan",
            "element": "S",
            "type": "Shotgun"
        },
        {
            "id": 124,
            "name": "Mind-Killer",
            "manufacturer": "Maliwan",
            "element": "N",
            "type": "Shotgun"
        },
        {
            "id": 125,
            "name": "Nothingness",
            "manufacturer": "Maliwan",
            "element": "Any N",
            "type": "Shotgun"
        },
        {
            "id": 126,
            "name": "Recursion",
            "manufacturer": "Maliwan",
            "element": "Any N",
            "type": "Shotgun"
        },
        {
            "id": 127,
            "name": "Trevonator",
            "manufacturer": "Maliwan",
            "element": "Any N",
            "type": "Shotgun"
        },
        {
            "id": 128,
            "name": "Vosk's Deathgrip",
            "manufacturer": "Maliwan",
            "element": "Any N",
            "type": "Shotgun"
        },
        {
            "id": 129,
            "name": "Cloud Kill",
            "manufacturer": "Maliwan",
            "element": "C",
            "type": "SMG"
        },
        {
            "id": 130,
            "name": "Cutsman",
            "manufacturer": "Maliwan",
            "element": "F C S",
            "type": "SMG"
        },
        {
            "id": 131,
            "name": "Destructo Spinner",
            "manufacturer": "Maliwan",
            "element": "Any N",
            "type": "SMG"
        },
        {
            "id": 132,
            "name": "Devoted",
            "manufacturer": "Maliwan",
            "element": "Any N",
            "type": "SMG"
        },
        {
            "id": 133,
            "name": "D.N.A.",
            "manufacturer": "Maliwan",
            "element": "*Any R",
            "type": "SMG"
        },
        {
            "id": 134,
            "name": "Ember's Purge",
            "manufacturer": "Maliwan",
            "element": "F",
            "type": "SMG"
        },
        {
            "id": 135,
            "name": "Flipper",
            "manufacturer": "Maliwan",
            "element": "Any N",
            "type": "SMG"
        },
        {
            "id": 136,
            "name": "ION LASER",
            "manufacturer": "Maliwan",
            "element": "Any N",
            "type": "SMG"
        },
        {
            "id": 137,
            "name": "Kyb's Worth",
            "manufacturer": "Maliwan",
            "element": "Any N",
            "type": "SMG"
        },
        {
            "id": 138,
            "name": "P2P Networker",
            "manufacturer": "Maliwan",
            "element": "None",
            "type": "SMG"
        },
        {
            "id": 139,
            "name": "Polyaimorous",
            "manufacturer": "Maliwan",
            "element": "FS",
            "type": "SMG"
        },
        {
            "id": 140,
            "name": "SF Force",
            "manufacturer": "Maliwan",
            "element": "Any N",
            "type": "SMG"
        },
        {
            "id": 141,
            "name": "Tsunami",
            "manufacturer": "Maliwan",
            "element": "*CS",
            "type": "SMG"
        },
        {
            "id": 142,
            "name": "Vault Hero",
            "manufacturer": "Maliwan",
            "element": "CS",
            "type": "SMG"
        },
        {
            "id": 143,
            "name": "Westergun",
            "manufacturer": "Maliwan",
            "element": "Any N",
            "type": "SMG"
        },
        {
            "id": 144,
            "name": "ASMD",
            "manufacturer": "Maliwan",
            "element": "S",
            "type": "Sniper"
        },
        {
            "id": 145,
            "name": "Firestorm",
            "manufacturer": "Maliwan",
            "element": "F",
            "type": "Sniper"
        },
        {
            "id": 146,
            "name": "Krakatoa",
            "manufacturer": "Maliwan",
            "element": "F",
            "type": "Sniper"
        },
        {
            "id": 147,
            "name": "Complex Root",
            "manufacturer": "Maliwan",
            "element": "Any N",
            "type": "Sniper"
        },
        {
            "id": 148,
            "name": "Storm",
            "manufacturer": "Maliwan",
            "element": "S",
            "type": "Sniper"
        },
        {
            "id": 149,
            "name": "Baby Maker ++",
            "manufacturer": "Tediore",
            "element": "Any",
            "type": "Pistol"
        },
        {
            "id": 150,
            "name": "Bangarang XL",
            "manufacturer": "Tediore",
            "element": "Any",
            "type": "Pistol"
        },
        {
            "id": 151,
            "name": "Gunerang XL",
            "manufacturer": "Tediore",
            "element": "Any",
            "type": "Pistol"
        },
        {
            "id": 152,
            "name": "S3RV-8OS-EXECUTE",
            "manufacturer": "Tediore",
            "element": "Any",
            "type": "Pistol"
        },
        {
            "id": 153,
            "name": "Scorpio XL",
            "manufacturer": "Tediore",
            "element": "N",
            "type": "Pistol"
        },
        {
            "id": 154,
            "name": "Anarchy",
            "manufacturer": "Tediore",
            "element": "Any",
            "type": "Shotgun"
        },
        {
            "id": 155,
            "name": "Brightside",
            "manufacturer": "Tediore",
            "element": "Any",
            "type": "Shotgun"
        },
        {
            "id": 156,
            "name": "Creeping Death",
            "manufacturer": "Tediore",
            "element": "C",
            "type": "Shotgun"
        },
        {
            "id": 157,
            "name": "Flama Diddle",
            "manufacturer": "Tediore",
            "element": "Any",
            "type": "Shotgun"
        },
        {
            "id": 158,
            "name": "The Horizon",
            "manufacturer": "Tediore",
            "element": "F",
            "type": "Shotgun"
        },
        {
            "id": 159,
            "name": "Pixie Dream Gun",
            "manufacturer": "Tediore",
            "element": "Any",
            "type": "Shotgun"
        },
        {
            "id": 160,
            "name": "Polybius",
            "manufacturer": "Tediore",
            "element": "Any N",
            "type": "Shotgun"
        },
        {
            "id": 161,
            "name": "Long Musket ++",
            "manufacturer": "Tediore",
            "element": "F",
            "type": "SMG"
        },
        {
            "id": 162,
            "name": "Needle Gun",
            "manufacturer": "Tediore",
            "element": "Any",
            "type": "SMG"
        },
        {
            "id": 163,
            "name": "Mother Too",
            "manufacturer": "Tediore",
            "element": "Any",
            "type": "SMG"
        },
        {
            "id": 164,
            "name": "Smart Gun XXL",
            "manufacturer": "Tediore",
            "element": "C",
            "type": "SMG"
        },
        {
            "id": 165,
            "name": "Ten Gallon",
            "manufacturer": "Tediore",
            "element": "Any",
            "type": "SMG"
        },
        {
            "id": 166,
            "name": "Alchemist",
            "manufacturer": "Torgue",
            "element": "F",
            "type": "AR"
        },
        {
            "id": 167,
            "name": "Bearcat",
            "manufacturer": "Torgue",
            "element": "Any",
            "type": "AR"
        },
        {
            "id": 168,
            "name": "Contained Blast",
            "manufacturer": "Torgue",
            "element": "Any",
            "type": "AR"
        },
        {
            "id": 169,
            "name": "Juliet's Dazzle",
            "manufacturer": "Torgue",
            "element": "N O",
            "type": "AR"
        },
        {
            "id": 170,
            "name": "Laser-Sploder",
            "manufacturer": "Torgue",
            "element": "Any N",
            "type": "AR"
        },
        {
            "id": 171,
            "name": "Try-Bolt",
            "manufacturer": "Torgue",
            "element": "Any",
            "type": "AR"
        },
        {
            "id": 172,
            "name": "Breeder",
            "manufacturer": "Torgue",
            "element": "Any",
            "type": "Pistol"
        },
        {
            "id": 173,
            "name": "Craps",
            "manufacturer": "Torgue",
            "element": "Any",
            "type": "Pistol"
        },
        {
            "id": 174,
            "name": "Devastator",
            "manufacturer": "Torgue",
            "element": "N",
            "type": "Pistol"
        },
        {
            "id": 175,
            "name": "Devils Foursum",
            "manufacturer": "Torgue",
            "element": "Any",
            "type": "Pistol"
        },
        {
            "id": 176,
            "name": "Echo",
            "manufacturer": "Torgue",
            "element": "Any",
            "type": "Pistol"
        },
        {
            "id": 177,
            "name": "Girth Blaster Elite",
            "manufacturer": "Torgue",
            "element": "N",
            "type": "Pistol"
        },
        {
            "id": 178,
            "name": "Moonfire",
            "manufacturer": "Torgue",
            "element": "Any",
            "type": "Pistol"
        },
        {
            "id": 179,
            "name": "Occultist",
            "manufacturer": "Torgue",
            "element": "F",
            "type": "Pistol"
        },
        {
            "id": 180,
            "name": "Roisen's Thorns",
            "manufacturer": "Torgue",
            "element": "N F",
            "type": "Pistol"
        },
        {
            "id": 181,
            "name": "Scoville",
            "manufacturer": "Torgue",
            "element": "Any",
            "type": "Pistol"
        },
        {
            "id": 182,
            "name": "Unkempt Harold",
            "manufacturer": "Torgue",
            "element": "N",
            "type": "Pistol"
        },
        {
            "id": 183,
            "name": "Creamer",
            "manufacturer": "Torgue",
            "element": "C R",
            "type": "RPG"
        },
        {
            "id": 184,
            "name": "Hive",
            "manufacturer": "Torgue",
            "element": "N",
            "type": "RPG"
        },
        {
            "id": 185,
            "name": "Nukem",
            "manufacturer": "Torgue",
            "element": "C",
            "type": "RPG"
        },
        {
            "id": 186,
            "name": "Plaguebearer",
            "manufacturer": "Torgue",
            "element": "Any N",
            "type": "RPG"
        },
        {
            "id": 187,
            "name": "Quadomizer",
            "manufacturer": "Torgue",
            "element": "FCR",
            "type": "RPG"
        },
        {
            "id": 188,
            "name": "R.Y.N.A.H.",
            "manufacturer": "Torgue",
            "element": "R",
            "type": "RPG"
        },
        {
            "id": 189,
            "name": "Satisfaction",
            "manufacturer": "Torgue",
            "element": "Any",
            "type": "RPG"
        },
        {
            "id": 190,
            "name": "Scourge",
            "manufacturer": "Torgue",
            "element": "Any",
            "type": "RPG"
        },
        {
            "id": 191,
            "name": "Tunguska",
            "manufacturer": "Torgue",
            "element": "N",
            "type": "RPG"
        },
        {
            "id": 192,
            "name": "Flakker",
            "manufacturer": "Torgue",
            "element": "N F R",
            "type": "Shotgun"
        },
        {
            "id": 193,
            "name": "Redline",
            "manufacturer": "Torgue",
            "element": "Any",
            "type": "Shotgun"
        },
        {
            "id": 194,
            "name": "Shocker",
            "manufacturer": "Torgue",
            "element": "S",
            "type": "Shotgun"
        },
        {
            "id": 195,
            "name": "Spade",
            "manufacturer": "Torgue",
            "element": "Any",
            "type": "Shotgun"
        },
        {
            "id": 196,
            "name": "The Boring Gun",
            "manufacturer": "Torgue",
            "element": "Any",
            "type": "Shotgun"
        },
        {
            "id": 197,
            "name": "The Lob",
            "manufacturer": "Torgue",
            "element": "Any N",
            "type": "Shotgun"
        },
        {
            "id": 198,
            "name": "Tiggs' Boom",
            "manufacturer": "Torgue",
            "element": "Any N",
            "type": "Shotgun"
        },
        {
            "id": 199,
            "name": "Damned",
            "manufacturer": "Vladof",
            "element": "Any",
            "type": "AR"
        },
        {
            "id": 200,
            "name": "Dowsing Rod",
            "manufacturer": "Vladof",
            "element": "Any",
            "type": "AR"
        },
        {
            "id": 201,
            "name": "Faisor",
            "manufacturer": "Vladof",
            "element": "Any",
            "type": "AR"
        },
        {
            "id": 202,
            "name": "Lucian's Call",
            "manufacturer": "Vladof",
            "element": "F C O",
            "type": "AR"
        },
        {
            "id": 203,
            "name": "Ogre",
            "manufacturer": "Vladof",
            "element": "N",
            "type": "AR"
        },
        {
            "id": 204,
            "name": "The Dictator",
            "manufacturer": "Vladof",
            "element": "Any",
            "type": "AR"
        },
        {
            "id": 205,
            "name": "The Monarch",
            "manufacturer": "Vladof",
            "element": "Any",
            "type": "AR"
        },
        {
            "id": 206,
            "name": "Shredifier",
            "manufacturer": "Vladof",
            "element": "Any",
            "type": "AR"
        },
        {
            "id": 207,
            "name": "Sickle",
            "manufacturer": "Vladof",
            "element": "Any N",
            "type": "AR"
        },
        {
            "id": 208,
            "name": "Web Slinger",
            "manufacturer": "Vladof",
            "element": "Any",
            "type": "AR"
        },
        {
            "id": 209,
            "name": "Infinity",
            "manufacturer": "Vladof",
            "element": "Any",
            "type": "Pistol"
        },
        {
            "id": 210,
            "name": "Light Show",
            "manufacturer": "Vladof",
            "element": "N F C S",
            "type": "Pistol"
        },
        {
            "id": 211,
            "name": "Magnificent",
            "manufacturer": "Vladof",
            "element": "Any",
            "type": "Pistol"
        },
        {
            "id": 212,
            "name": "Miscreant",
            "manufacturer": "Vladof",
            "element": "Any N",
            "type": "Pistol"
        },
        {
            "id": 213,
            "name": "BackBurner",
            "manufacturer": "Vladof",
            "element": "R",
            "type": "RPG"
        },
        {
            "id": 214,
            "name": "Jericho",
            "manufacturer": "Vladof",
            "element": "Any",
            "type": "RPG"
        },
        {
            "id": 215,
            "name": "Mongol",
            "manufacturer": "Vladof",
            "element": "Any",
            "type": "RPG"
        },
        {
            "id": 216,
            "name": "ION CANNON",
            "manufacturer": "Vladof",
            "element": "Any",
            "type": "RPG"
        },
        {
            "id": 217,
            "name": "Lyuda",
            "manufacturer": "Vladof",
            "element": "Any",
            "type": "Sniper"
        },
        {
            "id": 218,
            "name": "Asclepius",
            "manufacturer": "Anshin",
            "element": "N",
            "type": "Shield"
        },
        {
            "id": 219,
            "name": "Back Ham",
            "manufacturer": "Anshin",
            "element": "N",
            "type": "Shield"
        },
        {
            "id": 220,
            "name": "Badass Combustor",
            "manufacturer": "Anshin",
            "element": "O",
            "type": "Shield"
        },
        {
            "id": 221,
            "name": "Frozen Heart",
            "manufacturer": "Anshin",
            "element": "Any",
            "type": "Shield"
        },
        {
            "id": 222,
            "name": "Version 0.m",
            "manufacturer": "Anshin",
            "element": "C S",
            "type": "Shield"
        },
        {
            "id": 223,
            "name": "Messy Breakup",
            "manufacturer": "Anshin",
            "element": "F",
            "type": "Shield"
        },
        {
            "id": 224,
            "name": "Nova Berner",
            "manufacturer": "Anshin",
            "element": "Any",
            "type": "Shield"
        },
        {
            "id": 225,
            "name": "Red Card",
            "manufacturer": "Anshin",
            "element": "Any N",
            "type": "Shield"
        },
        {
            "id": 226,
            "name": "Red Card Re-Charger",
            "manufacturer": "Anshin",
            "element": "Any",
            "type": "Shield"
        },
        {
            "id": 227,
            "name": "Re-Router",
            "manufacturer": "Anshin",
            "element": "N",
            "type": "Shield"
        },
        {
            "id": 228,
            "name": "Rico",
            "manufacturer": "Anshin",
            "element": "Any",
            "type": "Shield"
        },
        {
            "id": 229,
            "name": "Rough Rider",
            "manufacturer": "Anshin",
            "element": "O",
            "type": "Shield"
        },
        {
            "id": 230,
            "name": "Scream of Terror",
            "manufacturer": "Anshin",
            "element": "O",
            "type": "Shield"
        },
        {
            "id": 231,
            "name": "Snowshoe",
            "manufacturer": "Anshin",
            "element": "Any",
            "type": "Shield"
        },
        {
            "id": 232,
            "name": "Wattson",
            "manufacturer": "Anshin",
            "element": "N",
            "type": "Shield"
        },
        {
            "id": 233,
            "name": "Whiskey Tango Foxtrot",
            "manufacturer": "Anshin",
            "element": "F C S",
            "type": "Shield"
        },
        {
            "id": 234,
            "name": "Black Hole",
            "manufacturer": "Pangolin",
            "element": "S",
            "type": "Shield"
        },
        {
            "id": 235,
            "name": "Band of Sitorak",
            "manufacturer": "Pangolin",
            "element": "Any",
            "type": "Shield"
        },
        {
            "id": 236,
            "name": "Big Boom Blaster",
            "manufacturer": "Pangolin",
            "element": "Any",
            "type": "Shield"
        },
        {
            "id": 237,
            "name": "Impaler",
            "manufacturer": "Pangolin",
            "element": "C",
            "type": "Shield"
        },
        {
            "id": 238,
            "name": "Red Suit",
            "manufacturer": "Pangolin",
            "element": "R",
            "type": "Shield"
        },
        {
            "id": 239,
            "name": "Shooting Star",
            "manufacturer": "Pangolin",
            "element": "Any",
            "type": "Shield"
        },
        {
            "id": 240,
            "name": "Stinger",
            "manufacturer": "Pangolin",
            "element": "Any",
            "type": "Shield"
        },
        {
            "id": 241,
            "name": "Torch",
            "manufacturer": "Pangolin",
            "element": "F",
            "type": "Shield"
        },
        {
            "id": 242,
            "name": "Void Rift",
            "manufacturer": "Pangolin",
            "element": "O",
            "type": "Shield"
        },
        {
            "id": 243,
            "name": "Firewall",
            "manufacturer": "Hyperion",
            "element": "N",
            "type": "Shield"
        },
        {
            "id": 244,
            "name": "Front Loader",
            "manufacturer": "Hyperion",
            "element": "Any",
            "type": "Shield"
        },
        {
            "id": 245,
            "name": "Old God",
            "manufacturer": "Hyperion",
            "element": "Any N",
            "type": "Shield"
        },
        {
            "id": 246,
            "name": "Re-Charger",
            "manufacturer": "Hyperion",
            "element": "Any",
            "type": "Shield"
        },
        {
            "id": 247,
            "name": "Re-Charge Berner",
            "manufacturer": "Hyperion",
            "element": "F C R",
            "type": "Shield"
        },
        {
            "id": 248,
            "name": "Rectifier",
            "manufacturer": "Hyperion",
            "element": "S",
            "type": "Shield"
        },
        {
            "id": 249,
            "name": "Stop-Gap",
            "manufacturer": "Hyperion",
            "element": "Any",
            "type": "Shield"
        },
        {
            "id": 250,
            "name": "The Transformer",
            "manufacturer": "Hyperion",
            "element": "S",
            "type": "Shield"
        },
        {
            "id": 251,
            "name": "Ward",
            "manufacturer": "Hyperion",
            "element": "Any",
            "type": "Shield"
        },
        {
            "id": 252,
            "name": "Commander Planetoid",
            "manufacturer": "Eridian",
            "element": "Any",
            "type": "Artifact"
        },
        {
            "id": 253,
            "name": "Cosmic Crater",
            "manufacturer": "Eridian",
            "element": "Any",
            "type": "Artifact"
        },
        {
            "id": 254,
            "name": "Deathless",
            "manufacturer": "Eridian",
            "element": "Any",
            "type": "Artifact"
        },
        {
            "id": 255,
            "name": "Electric Banjo",
            "manufacturer": "Eridian",
            "element": "None",
            "type": "Artifact"
        },
        {
            "id": 256,
            "name": "Grave",
            "manufacturer": "Eridian",
            "element": "None",
            "type": "Artifact"
        },
        {
            "id": 257,
            "name": "Launch Pad",
            "manufacturer": "Eridian",
            "element": "Any",
            "type": "Artifact"
        },
        {
            "id": 258,
            "name": "Loaded Dice",
            "manufacturer": "Eridian",
            "element": "Any",
            "type": "Artifact"
        },
        {
            "id": 259,
            "name": "Lunacy",
            "manufacturer": "Eridian",
            "element": "None",
            "type": "Artifact"
        },
        {
            "id": 260,
            "name": "Moxxi's Endowment",
            "manufacturer": "Eridian",
            "element": "Any",
            "type": "Artifact"
        },
        {
            "id": 261,
            "name": "Otto Idol",
            "manufacturer": "Eridian",
            "element": "Any",
            "type": "Artifact"
        },
        {
            "id": 262,
            "name": "Phoenix Tears",
            "manufacturer": "Eridian",
            "element": "None",
            "type": "Artifact"
        },
        {
            "id": 263,
            "name": "Pull Out Method",
            "manufacturer": "Eridian",
            "element": "Any",
            "type": "Artifact"
        },
        {
            "id": 264,
            "name": "Rocket Boots",
            "manufacturer": "Eridian",
            "element": "Any",
            "type": "Artifact"
        },
        {
            "id": 265,
            "name": "Safeguard",
            "manufacturer": "Eridian",
            "element": "Any",
            "type": "Artifact"
        },
        {
            "id": 266,
            "name": "Splatter Gun",
            "manufacturer": "Eridian",
            "element": "Any",
            "type": "Artifact"
        },
        {
            "id": 267,
            "name": "Static Charge",
            "manufacturer": "Eridian",
            "element": "Any",
            "type": "Artifact"
        },
        {
            "id": 268,
            "name": "The ... Knowledge",
            "manufacturer": "Eridian",
            "element": "None",
            "type": "Artifact"
        },
        {
            "id": 269,
            "name": "Unleash the Dragon",
            "manufacturer": "Eridian",
            "element": "None",
            "type": "Artifact"
        },
        {
            "id": 270,
            "name": "Victory Rush",
            "manufacturer": "Eridian",
            "element": "Any",
            "type": "Artifact"
        },
        {
            "id": 271,
            "name": "White Elephant",
            "manufacturer": "Eridian",
            "element": "Any",
            "type": "Artifact"
        },
        {
            "id": 272,
            "name": "Breaker",
            "manufacturer": "Class Mod-Amara",
            "element": "None",
            "type": "Class Mod-Amara"
        },
        {
            "id": 273,
            "name": "Dragon",
            "manufacturer": "Class Mod-Amara",
            "element": "None",
            "type": "Class Mod-Amara"
        },
        {
            "id": 274,
            "name": "Elementalist",
            "manufacturer": "Class Mod-Amara",
            "element": "Any",
            "type": "Class Mod-Amara"
        },
        {
            "id": 275,
            "name": "Golden Rule",
            "manufacturer": "Class Mod-Amara",
            "element": "None",
            "type": "Class Mod-Amara"
        },
        {
            "id": 276,
            "name": "Nimbus",
            "manufacturer": "Class Mod-Amara",
            "element": "None",
            "type": "Class Mod-Amara"
        },
        {
            "id": 277,
            "name": "Phasezerker",
            "manufacturer": "Class Mod-Amara",
            "element": "None",
            "type": "Class Mod-Amara"
        },
        {
            "id": 278,
            "name": "Spiritual Driver",
            "manufacturer": "Class Mod-Amara",
            "element": "None",
            "type": "Class Mod-Amara"
        },
        {
            "id": 279,
            "name": "Stone",
            "manufacturer": "Class Mod-Amara",
            "element": "None",
            "type": "Class Mod-Amara"
        },
        {
            "id": 280,
            "name": "Bounty Hunter",
            "manufacturer": "Class Mod-Fl4k",
            "element": "None",
            "type": "Class Mod-Fl4k"
        },
        {
            "id": 281,
            "name": "Cosmic Stalker",
            "manufacturer": "Class Mod-Fl4k",
            "element": "None",
            "type": "Class Mod-Fl4k"
        },
        {
            "id": 282,
            "name": "DE4DEYE",
            "manufacturer": "Class Mod-Fl4k",
            "element": "None",
            "type": "Class Mod-Fl4k"
        },
        {
            "id": 283,
            "name": "Friend-Bot",
            "manufacturer": "Class Mod-Fl4k",
            "element": "None",
            "type": "Class Mod-Fl4k"
        },
        {
            "id": 284,
            "name": "R4kk P4k",
            "manufacturer": "Class Mod-Fl4k",
            "element": "None",
            "type": "Class Mod-Fl4k"
        },
        {
            "id": 285,
            "name": "Rakk Commander",
            "manufacturer": "Class Mod-Fl4k",
            "element": "None",
            "type": "Class Mod-Fl4k"
        },
        {
            "id": 286,
            "name": "Red Fang",
            "manufacturer": "Class Mod-Fl4k",
            "element": "None",
            "type": "Class Mod-Fl4k"
        },
        {
            "id": 287,
            "name": "St4ckbot",
            "manufacturer": "Class Mod-Fl4k",
            "element": "None",
            "type": "Class Mod-Fl4k"
        },
        {
            "id": 288,
            "name": "Tr4iner",
            "manufacturer": "Class Mod-Fl4k",
            "element": "None",
            "type": "Class Mod-Fl4k"
        },
        {
            "id": 289,
            "name": "Bear Trooper",
            "manufacturer": "Class Mod-Moze",
            "element": "None",
            "type": "Class Mod-Moze"
        },
        {
            "id": 290,
            "name": "Blast Master",
            "manufacturer": "Class Mod-Moze",
            "element": "None",
            "type": "Class Mod-Moze"
        },
        {
            "id": 291,
            "name": "Bloodletter",
            "manufacturer": "Class Mod-Moze",
            "element": "None",
            "type": "Class Mod-Moze"
        },
        {
            "id": 292,
            "name": "Green Monster",
            "manufacturer": "Class Mod-Moze",
            "element": "None",
            "type": "Class Mod-Moze"
        },
        {
            "id": 293,
            "name": "Mind Sweeper",
            "manufacturer": "Class Mod-Moze",
            "element": "None",
            "type": "Class Mod-Moze"
        },
        {
            "id": 294,
            "name": "Raging Bear",
            "manufacturer": "Class Mod-Moze",
            "element": "None",
            "type": "Class Mod-Moze"
        },
        {
            "id": 295,
            "name": "Rocketeer",
            "manufacturer": "Class Mod-Moze",
            "element": "None",
            "type": "Class Mod-Moze"
        },
        {
            "id": 296,
            "name": "Sapper",
            "manufacturer": "Class Mod-Moze",
            "element": "None",
            "type": "Class Mod-Moze"
        },
        {
            "id": 297,
            "name": "Antifreeze",
            "manufacturer": "Class Mod-Zane",
            "element": "None",
            "type": "Class Mod-Zane"
        },
        {
            "id": 298,
            "name": "Cold Warrior",
            "manufacturer": "Class Mod-Zane",
            "element": "None",
            "type": "Class Mod-Zane"
        },
        {
            "id": 299,
            "name": "Conductor",
            "manufacturer": "Class Mod-Zane",
            "element": "None",
            "type": "Class Mod-Zane"
        },
        {
            "id": 300,
            "name": "Executor",
            "manufacturer": "Class Mod-Zane",
            "element": "None",
            "type": "Class Mod-Zane"
        },
        {
            "id": 301,
            "name": "Infiltrator",
            "manufacturer": "Class Mod-Zane",
            "element": "None",
            "type": "Class Mod-Zane"
        },
        {
            "id": 302,
            "name": "Seein' Dead",
            "manufacturer": "Class Mod-Zane",
            "element": "None",
            "type": "Class Mod-Zane"
        },
        {
            "id": 303,
            "name": "Shockerator",
            "manufacturer": "Class Mod-Zane",
            "element": "None",
            "type": "Class Mod-Zane"
        },
        {
            "id": 304,
            "name": "Techspert",
            "manufacturer": "Class Mod-Zane",
            "element": "None",
            "type": "Class Mod-Zane"
        },
        {
            "id": 305,
            "name": "Cheddar Shredder",
            "manufacturer": "t",
            "element": "N",
            "type": "Grenade Mod"
        },
        {
            "id": 306,
            "name": "Chupa's Organ",
            "manufacturer": "A H",
            "element": "N",
            "type": "Grenade Mod"
        },
        {
            "id": 307,
            "name": "Diamond Butt Bomb",
            "manufacturer": "V",
            "element": "N",
            "type": "Grenade Mod"
        },
        {
            "id": 308,
            "name": "EMP",
            "manufacturer": "H",
            "element": "S",
            "type": "Grenade Mod"
        },
        {
            "id": 309,
            "name": "Epicenter",
            "manufacturer": "V",
            "element": "F",
            "type": "Grenade Mod"
        },
        {
            "id": 310,
            "name": "Fastball",
            "manufacturer": "t",
            "element": "Any",
            "type": "Grenade Mod"
        },
        {
            "id": 311,
            "name": "Firestorm (sniper)",
            "manufacturer": "H t V",
            "element": "F",
            "type": "Grenade Mod"
        },
        {
            "id": 312,
            "name": "Fish Slap",
            "manufacturer": "P",
            "element": "C",
            "type": "Grenade Mod"
        },
        {
            "id": 313,
            "name": "Ghast Call",
            "manufacturer": "T",
            "element": "S R O",
            "type": "Grenade Mod"
        },
        {
            "id": 314,
            "name": "Hex",
            "manufacturer": "A",
            "element": "Any",
            "type": "Grenade Mod"
        },
        {
            "id": 315,
            "name": "Hunter-Seeker",
            "manufacturer": "t",
            "element": "Any",
            "type": "Grenade Mod"
        },
        {
            "id": 316,
            "name": "It's Piss",
            "manufacturer": "V",
            "element": "FS",
            "type": "Grenade Mod"
        },
        {
            "id": 317,
            "name": "Lightspeed",
            "manufacturer": "H",
            "element": "N",
            "type": "Grenade Mod"
        },
        {
            "id": 318,
            "name": "Moxxi's Bouncing Pair",
            "manufacturer": "P",
            "element": "S",
            "type": "Grenade Mod"
        },
        {
            "id": 319,
            "name": "Nagata",
            "manufacturer": "H",
            "element": "N",
            "type": "Grenade Mod"
        },
        {
            "id": 320,
            "name": "Quasar",
            "manufacturer": "A H t",
            "element": "S",
            "type": "Grenade Mod"
        },
        {
            "id": 321,
            "name": "Red Queen",
            "manufacturer": "V",
            "element": "Any",
            "type": "Grenade Mod"
        },
        {
            "id": 322,
            "name": "Storm Front",
            "manufacturer": "H t V",
            "element": "Any",
            "type": "Grenade Mod"
        },
        {
            "id": 323,
            "name": "Surge",
            "manufacturer": "T",
            "element": "Any",
            "type": "Grenade Mod"
        },
        {
            "id": 324,
            "name": "Tina's Hippity Hopper",
            "manufacturer": "T",
            "element": "Any",
            "type": "Grenade Mod"
        },
        {
            "id": 325,
            "name": "Tran-fusion",
            "manufacturer": "A H t",
            "element": "N",
            "type": "Grenade Mod"
        },
        {
            "id": 326,
            "name": "Ultraball",
            "manufacturer": "T",
            "element": "None",
            "type": "Grenade Mod"
        },
        {
            "id": 327,
            "name": "Widowmaker",
            "manufacturer": "H T t V",
            "element": "N",
            "type": "Grenade Mod"
        }
    ]

const more = allManufacturers.map((item) => {
    let items = {
        id: item.id,
        name: item.name,
        possibleManufacturers: [],
        possibleElements: [],
        type: item.type,
    }
    // the special case if the type is grenade mod, we populate the data this way.
    if (item.type === "Grenade Mod") {
        if (item.manufacturer.includes("A")) items.possibleManufacturers.push("Atlas");
        if (item.manufacturer.includes("H")) items.possibleManufacturers.push("Hyperion");
        if (item.manufacturer.includes("V")) items.possibleManufacturers.push("Vladof");
        if (item.manufacturer.includes("t")) items.possibleManufacturers.push("Tediore");
        if (item.manufacturer.includes("P")) items.possibleManufacturers.push("Pangolin");
        if (item.manufacturer.includes("T")) items.possibleManufacturers.push("Torgue");
    } else {
        items.possibleManufacturers.push((item.manufacturer));
    }
    if (item.element.includes("Any")) items.possibleElements.push("Any")
    if (item.element.includes("S")) items.possibleElements.push("Shock")
    if (item.element.includes("F")) items.possibleElements.push("Fire")
    if (item.element.includes("N")) items.possibleElements.push("None")
    if (item.element.includes("C")) items.possibleElements.push("Corrosive")
    if (item.element.includes("O")) items.possibleElements.push("Cryo")
    if (item.element.includes("R")) items.possibleElements.push("Radiation")
    if (item.element.includes("None")) items.possibleElements.push("None")
    return (items);
})

// const items = allManufacturers.map((item) => {
//     let items = {
//         id: item.id,
//         name: item.name,
//         type: item.type,
//         possibleElements: []
//     }
//     if (item.element.includes("Any")) items.possibleElements.push("Any")
//     if (item.element.includes("S")) items.possibleElements.push("Shock")
//     if (item.element.includes("F")) items.possibleElements.push("Fire")
//     if (item.element.includes("N")) items.possibleElements.push("None")
//     if (item.element.includes("C")) items.possibleElements.push("Corrosive")
//     if (item.element.includes("O")) items.possibleElements.push("Cryo")
//     if (item.element.includes("R")) items.possibleElements.push("Radiation")
//     if (item.element.includes("None")) items.possibleElements.push("None")
//     return (items)
// })
const data = JSON.stringify(more)
fs.writeFile('loot.txt', data, function (err) {
    if (err) return console.log(err);
    console.log("loot enabled")

});
console.log(more)
