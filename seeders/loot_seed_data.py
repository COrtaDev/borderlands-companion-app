from app import app
from app.models.loot import Loot

loot_seeds = [Loot(item_name=loot['name'], type=loot['type'], manufacturers=['possibleManufacturers'],
                   elemental_types=loot['possibleElements'],) for loot in loot_list]
print(loot_seeds)
loot_list = [
    {"id": 1, "name": "Carrier", "possibleManufacturers": [
        "Atlas"], "possibleElements": ["None"], "type": "AR"},
    {"id": 2, "name": "O.P.Q. System", "possibleManufacturers": [
        "Atlas"], "possibleElements": ["None"], "type": "AR"},
    {"id": 3, "name": "Portals and Shite", "possibleManufacturers": [
        "Atlas"], "possibleElements": ["None"], "type": "AR"},
    {"id": 4, "name": "Rebel Yell", "possibleManufacturers": [
        "Atlas"], "possibleElements": ["None"], "type": "AR"},
    {"id": 5, "name": "Linc", "possibleManufacturers": [
        "Atlas"], "possibleElements": ["None"], "type": "Pistol"},
    {"id": 6, "name": "Multi-tap",
        "possibleManufacturers": ["Atlas"], "possibleElements": ["None"], "type": "Pistol"},
    {"id": 7, "name": "Freeman", "possibleManufacturers": [
        "Atlas"], "possibleElements": ["None"], "type": "RPG"},
    {"id": 8, "name": "Plumage", "possibleManufacturers": [
        "Atlas"], "possibleElements": ["None"], "type": "RPG"},
    {"id": 9, "name": "Ruby's Wrath", "possibleManufacturers": [
        "Atlas"], "possibleElements": ["None"], "type": "RPG"},
    {"id": 10, "name": "Embrace the Pain", "possibleManufacturers": [
        "COV"], "possibleElements": ["Fire"], "type": "AR"},
    {"id": 11, "name": "NoPewPew", "possibleManufacturers": [
        "COV"], "possibleElements": ["Fire"], "type": "AR"},
    {"id": 12, "name": "Pain is Power", "possibleManufacturers": [
        "COV"], "possibleElements": ["Fire"], "type": "AR"},
    {"id": 13, "name": "Sawbar", "possibleManufacturers": [
        "COV"], "possibleElements": ["Fire"], "type": "AR"},
    {"id": 14, "name": "Seeryul Killur", "possibleManufacturers": [
        "COV"], "possibleElements": ["Fire"], "type": "AR"},
    {"id": 15, "name": "Stauros' Burn", "possibleManufacturers": [
        "COV"], "possibleElements": ["Fire"], "type": "AR"},
    {"id": 16, "name": "Zheitsev's Eruption", "possibleManufacturers": [
        "COV"], "possibleElements": ["Any"], "type": "AR"},
    {"id": 17, "name": "Gargoyle", "possibleManufacturers": [
        "COV"], "possibleElements": ["Corrosive"], "type": "Pistol"},
    {"id": 18, "name": "Hydrafrost", "possibleManufacturers": [
        "COV"], "possibleElements": ["Cryo"], "type": "Pistol"},
    {"id": 19, "name": "Linoge", "possibleManufacturers": [
        "COV"], "possibleElements": ["Fire", "Corrosive"], "type": "Pistol"},
    {"id": 20, "name": "Pestilence", "possibleManufacturers": [
        "COV"], "possibleElements": ["Radiation"], "type": "Pistol"},
    {"id": 21, "name": "Psycho Stabber", "possibleManufacturers": [
        "COV"], "possibleElements": ["None"], "type": "Pistol"},
    {"id": 22, "name": "SkekSil", "possibleManufacturers": [
        "COV"], "possibleElements": ["Shock", "Fire", "Corrosive"], "type": "Pistol"},
    {"id": 23, "name": "Globetrottr", "possibleManufacturers": [
        "COV"], "possibleElements": ["Any", "None"], "type": "RPG"},
    {"id": 24, "name": "Yellowcake", "possibleManufacturers": [
        "COV"], "possibleElements": ["Radiation"], "type": "RPG"},
    {"id": 25, "name": "Barrage", "possibleManufacturers": [
        "Dahl"], "possibleElements": ["None", "Corrosive", "Radiation"], "type": "AR"},
    {"id": 26, "name": "Breath of the Dying", "possibleManufacturers": [
        "Dahl"], "possibleElements": ["Corrosive"], "type": "AR"},
    {"id": 27, "name": "Good Juju", "possibleManufacturers": [
        "Dahl"], "possibleElements": ["Any"], "type": "AR"},
    {"id": 28, "name": "Kaos", "possibleManufacturers": ["Dahl"], "possibleElements": [
        "Shock", "Fire", "Corrosive", "Cryo"], "type": "AR"},
    {"id": 29, "name": "Star Helix", "possibleManufacturers": [
        "Dahl"], "possibleElements": ["Shock", "None", "Cryo", "Radiation"], "type": "AR"},
    {"id": 30, "name": "Soulrender", "possibleManufacturers": [
        "Dahl"], "possibleElements": ["Any"], "type": "AR"},
    {"id": 31, "name": "Warlord", "possibleManufacturers": [
        "Dahl"], "possibleElements": ["Shock", "Fire", "None", "Corrosive"], "type": "AR"},
    {"id": 32, "name": "AAA", "possibleManufacturers": [
        "Dahl"], "possibleElements": ["Shock"], "type": "Pistol"},
    {"id": 33, "name": "Hornet", "possibleManufacturers": [
        "Dahl"], "possibleElements": ["Corrosive"], "type": "Pistol"},
    {"id": 34, "name": "Nemesis", "possibleManufacturers": [
        "Dahl"], "possibleElements": ["Fire", "Corrosive"], "type": "Pistol"},
    {"id": 35, "name": "Night Flyer", "possibleManufacturers": [
        "Dahl"], "possibleElements": ["None"], "type": "Pistol"},
    {"id": 36, "name": "The Blanc", "possibleManufacturers": [
        "Dahl"], "possibleElements": ["Any"], "type": "Pistol"},
    {"id": 37, "name": "9-Volt",
        "possibleManufacturers": ["Dahl"], "possibleElements": ["Shock"], "type": "SMG"},
    {"id": 38, "name": "Boomer", "possibleManufacturers": [
        "Dahl"], "possibleElements": ["Fire", "None"], "type": "SMG"},
    {"id": 39, "name": "Crader's EM-P5",
        "possibleManufacturers": ["Dahl"], "possibleElements": ["None"], "type": "SMG"},
    {"id": 40, "name": "Hellfire", "possibleManufacturers": [
        "Dahl"], "possibleElements": ["Fire"], "type": "SMG"},
    {"id": 41, "name": "Kaoson", "possibleManufacturers": [
        "Dahl"], "possibleElements": ["Any"], "type": "SMG"},
    {"id": 42, "name": "Night Hawkin", "possibleManufacturers": [
        "Dahl"], "possibleElements": ["Fire", "Cryo"], "type": "SMG"},
    {"id": 43, "name": "Ripper", "possibleManufacturers": [
        "Dahl"], "possibleElements": ["Any"], "type": "SMG"},
    {"id": 44, "name": "Sleeping Giant", "possibleManufacturers": [
        "Dahl"], "possibleElements": ["Shock", "Fire", "None", "Corrosive"], "type": "SMG"},
    {"id": 45, "name": "Vanquisher", "possibleManufacturers": [
        "Dahl"], "possibleElements": ["Any"], "type": "SMG"},
    {"id": 46, "name": "AutoAimè", "possibleManufacturers": ["Dahl"], "possibleElements": [
        "Shock", "Fire", "None", "Corrosive"], "type": "Sniper"},
    {"id": 47, "name": "Sand Hawk", "possibleManufacturers": [
        "Dahl"], "possibleElements": ["Any", "None"], "type": "Sniper"},
    {"id": 48, "name": "Stalker", "possibleManufacturers": [
        "Dahl"], "possibleElements": ["Cryo"], "type": "Sniper"},
    {"id": 49, "name": "Malak's Bane", "possibleManufacturers": [
        "Dahl"], "possibleElements": ["Fire", "Cryo"], "type": "Sniper"},
    {"id": 50, "name": "Brainstormer", "possibleManufacturers": [
        "Hyperion"], "possibleElements": ["Shock"], "type": "Shotgun"},
    {"id": 51, "name": "Conference Call", "possibleManufacturers": [
        "Hyperion"], "possibleElements": ["Any"], "type": "Shotgun"},
    {"id": 52, "name": "Face-puncher", "possibleManufacturers": [
        "Hyperion"], "possibleElements": ["None"], "type": "Shotgun"},
    {"id": 53, "name": "Fearmonger", "possibleManufacturers": [
        "Hyperion"], "possibleElements": ["Any", "None"], "type": "Shotgun"},
    {"id": 54, "name": "Heart Breaker", "possibleManufacturers": [
        "Hyperion"], "possibleElements": ["Shock", "Fire", "Corrosive", "Cryo"], "type": "Shotgun"},
    {"id": 55, "name": "Iceburger", "possibleManufacturers": [
        "Hyperion"], "possibleElements": ["Fire"], "type": "Shotgun"},
    {"id": 56, "name": "Phebert", "possibleManufacturers": [
        "Hyperion"], "possibleElements": ["Any"], "type": "Shotgun"},
    {"id": 57, "name": "Reflux", "possibleManufacturers": [
        "Hyperion"], "possibleElements": ["Corrosive"], "type": "Shotgun"},
    {"id": 58, "name": "Slow Hand", "possibleManufacturers": [
        "Hyperion"], "possibleElements": ["Any"], "type": "Shotgun"},
    {"id": 59, "name": "The Butcher", "possibleManufacturers": [
        "Hyperion"], "possibleElements": ["Any"], "type": "Shotgun"},
    {"id": 60, "name": "Bitch", "possibleManufacturers": [
        "Hyperion"], "possibleElements": ["Any"], "type": "SMG"},
    {"id": 61, "name": "Cheap Tips", "possibleManufacturers": [
        "Hyperion"], "possibleElements": ["Any", "None"], "type": "SMG"},
    {"id": 62, "name": "Crossroad", "possibleManufacturers": [
        "Hyperion"], "possibleElements": ["Any"], "type": "SMG"},
    {"id": 63, "name": "Handsome Jackhammer", "possibleManufacturers": [
        "Hyperion"], "possibleElements": ["Any"], "type": "SMG"},
    {"id": 64, "name": "Hyperfocus XZ41", "possibleManufacturers": [
        "Hyperion"], "possibleElements": ["Any"], "type": "SMG"},
    {"id": 65, "name": "Oldridian", "possibleManufacturers": [
        "Hyperion"], "possibleElements": ["Shock", "Fire", "None", "Radiation"], "type": "SMG"},
    {"id": 66, "name": "Predatory Lending", "possibleManufacturers": [
        "Hyperion"], "possibleElements": ["Any", "None"], "type": "SMG"},
    {"id": 67, "name": "Proprietary License", "possibleManufacturers": [
        "Hyperion"], "possibleElements": ["Any", "None"], "type": "SMG"},
    {"id": 68, "name": "Redistributor", "possibleManufacturers": [
        "Hyperion"], "possibleElements": ["Any", "None"], "type": "SMG"},
    {"id": 69, "name": "Smog", "possibleManufacturers": [
        "Hyperion"], "possibleElements": ["Any"], "type": "SMG"},
    {"id": 70, "name": "Crossbow", "possibleManufacturers": [
        "Hyperion"], "possibleElements": ["None"], "type": "Sniper"},
    {"id": 71, "name": "Narp", "possibleManufacturers": [
        "Hyperion"], "possibleElements": ["Any"], "type": "Sniper"},
    {"id": 72, "name": "Tankman's Shield", "possibleManufacturers": [
        "Hyperion"], "possibleElements": ["Any"], "type": "Sniper"},
    {"id": 73, "name": "Woodblocker", "possibleManufacturers": [
        "Hyperion"], "possibleElements": ["Any", "None"], "type": "Sniper"},
    {"id": 74, "name": "Bekah", "possibleManufacturers": [
        "Jakobs"], "possibleElements": ["None"], "type": "AR"},
    {"id": 75, "name": "Clairvoyance", "possibleManufacturers": [
        "Jakobs"], "possibleElements": ["Cryo"], "type": "AR"},
    {"id": 76, "name": "Gatling Gun", "possibleManufacturers": [
        "Jakobs"], "possibleElements": ["None"], "type": "AR"},
    {"id": 77, "name": "Hand of Glory", "possibleManufacturers": [
        "Jakobs"], "possibleElements": ["None"], "type": "AR"},
    {"id": 78, "name": "Lead Sprinkler", "possibleManufacturers": [
        "Jakobs"], "possibleElements": ["None"], "type": "AR"},
    {"id": 79, "name": "Mutanat", "possibleManufacturers": [
        "Jakobs"], "possibleElements": ["None"], "type": "AR"},
    {"id": 80, "name": "Rowan's Call", "possibleManufacturers": [
        "Jakobs"], "possibleElements": ["Shock", "Fire", "Radiation"], "type": "AR"},
    {"id": 81, "name": "Stonethrower", "possibleManufacturers": [
        "Jakobs"], "possibleElements": ["None"], "type": "AR"},
    {"id": 82, "name": "Amazing Grace", "possibleManufacturers": [
        "Jakobs"], "possibleElements": ["None"], "type": "Pistol"},
    {"id": 83, "name": "Bite Size", "possibleManufacturers": [
        "Jakobs"], "possibleElements": ["None"], "type": "Pistol"},
    {"id": 84, "name": "Bloom", "possibleManufacturers": [
        "Jakobs"], "possibleElements": ["None"], "type": "Pistol"},
    {"id": 85, "name": "King's Call", "possibleManufacturers": [
        "Jakobs"], "possibleElements": ["Shock", "Fire"], "type": "Pistol"},
    {"id": 86, "name": "Maggie", "possibleManufacturers": [
        "Jakobs"], "possibleElements": ["None"], "type": "Pistol"},
    {"id": 87, "name": "Little Yeeti", "possibleManufacturers": [
        "Jakobs"], "possibleElements": ["None"], "type": "Pistol"},
    {"id": 88, "name": "Love Drill", "possibleManufacturers": [
        "Jakobs"], "possibleElements": ["None"], "type": "Pistol"},
    {"id": 89, "name": "Lucky 7", "possibleManufacturers": [
        "Jakobs"], "possibleElements": ["None"], "type": "Pistol"},
    {"id": 90, "name": "Seventh Sense", "possibleManufacturers": [
        "Jakobs"], "possibleElements": ["Cryo"], "type": "Pistol"},
    {"id": 91, "name": "The Companion", "possibleManufacturers": [
        "Jakobs"], "possibleElements": ["Fire"], "type": "Pistol"},
    {"id": 92, "name": "The Duc", "possibleManufacturers": [
        "Jakobs"], "possibleElements": ["None"], "type": "Pistol"},
    {"id": 93, "name": "The Flood", "possibleManufacturers": [
        "Jakobs"], "possibleElements": ["None"], "type": "Pistol"},
    {"id": 94, "name": "Unforgiven", "possibleManufacturers": [
        "Jakobs"], "possibleElements": ["None"], "type": "Pistol"},
    {"id": 95, "name": "Wagon Wheel", "possibleManufacturers": [
        "Jakobs"], "possibleElements": ["None"], "type": "Pistol"},
    {"id": 96, "name": "Hellwalker", "possibleManufacturers": [
        "Jakobs"], "possibleElements": ["Fire"], "type": "Shotgun"},
    {"id": 97, "name": "Nimble Jack", "possibleManufacturers": [
        "Jakobs"], "possibleElements": ["None"], "type": "Shotgun"},
    {"id": 98, "name": "One Pump Chump", "possibleManufacturers": [
        "Jakobs"], "possibleElements": ["None"], "type": "Shotgun"},
    {"id": 99, "name": "Robin's Call", "possibleManufacturers": [
        "Jakobs"], "possibleElements": ["None"], "type": "Shotgun"},
    {"id": 100, "name": "Sledge's Shotgun", "possibleManufacturers": [
        "Jakobs"], "possibleElements": ["None"], "type": "Shotgun"},
    {"id": 101, "name": "T.K's Wave", "possibleManufacturers": [
        "Jakobs"], "possibleElements": ["Shock", "Fire", "None"], "type": "Shotgun"},
    {"id": 102, "name": "The Garcia", "possibleManufacturers": [
        "Jakobs"], "possibleElements": ["None"], "type": "Shotgun"},
    {"id": 103, "name": "The Tidal Wave", "possibleManufacturers": [
        "Jakobs"], "possibleElements": ["None"], "type": "Shotgun"},
    {"id": 104, "name": "Cocky Bastard", "possibleManufacturers": [
        "Jakobs"], "possibleElements": ["None"], "type": "Sniper"},
    {"id": 105, "name": "Headsplosion", "possibleManufacturers": [
        "Jakobs"], "possibleElements": ["None"], "type": "Sniper"},
    {"id": 106, "name": "Monocle", "possibleManufacturers": [
        "Jakobs"], "possibleElements": ["None"], "type": "Sniper"},
    {"id": 107, "name": "Skullmasher", "possibleManufacturers": [
        "Jakobs"], "possibleElements": ["None"], "type": "Sniper"},
    {"id": 108, "name": "Unseen Threat", "possibleManufacturers": [
        "Jakobs"], "possibleElements": ["None"], "type": "Sniper"},
    {"id": 109, "name": "Wedding Invitation", "possibleManufacturers": [
        "Jakobs"], "possibleElements": ["Fire", "Cryo"], "type": "Sniper"},
    {"id": 110, "name": "Queen's Call", "possibleManufacturers": [
        "Jakobs"], "possibleElements": ["Corrosive", "Cryo", "Radiation"], "type": "Pistol"},
    {"id": 111, "name": "Beacon", "possibleManufacturers": [
        "Maliwan"], "possibleElements": ["Any", "None"], "type": "Pistol"},
    {"id": 112, "name": "Frozen Devil", "possibleManufacturers": [
        "Maliwan"], "possibleElements": ["Cryo"], "type": "Pistol"},
    {"id": 113, "name": "Grease Trap", "possibleManufacturers": [
        "Maliwan"], "possibleElements": ["Fire"], "type": "Pistol"},
    {"id": 114, "name": "Hellshock", "possibleManufacturers": [
        "Maliwan"], "possibleElements": ["Shock", "Fire"], "type": "Pistol"},
    {"id": 115, "name": "Hyper-Hydrator", "possibleManufacturers": [
        "Maliwan"], "possibleElements": ["Shock"], "type": "Pistol"},
    {"id": 116, "name": "Ice Pick", "possibleManufacturers": [
        "Maliwan"], "possibleElements": ["Any", "None"], "type": "Pistol"},
    {"id": 117, "name": "Sellout", "possibleManufacturers": [
        "Maliwan"], "possibleElements": ["Fire", "Corrosive"], "type": "Pistol"},
    {"id": 118, "name": "Superball", "possibleManufacturers": [
        "Maliwan"], "possibleElements": ["Fire"], "type": "Pistol"},
    {"id": 119, "name": "Thunderball Fists", "possibleManufacturers": [
        "Maliwan"], "possibleElements": ["Shock"], "type": "Pistol"},
    {"id": 120, "name": "Chandelier", "possibleManufacturers": [
        "Maliwan"], "possibleElements": ["Any", "None"], "type": "Shotgun"},
    {"id": 121, "name": "Frequency", "possibleManufacturers": [
        "Maliwan"], "possibleElements": ["Any", "None"], "type": "Shotgun"},
    {"id": 122, "name": "Insider", "possibleManufacturers": [
        "Maliwan"], "possibleElements": ["Any", "None"], "type": "Shotgun"},
    {"id": 123, "name": "Kill-o'-the-Wisp", "possibleManufacturers": [
        "Maliwan"], "possibleElements": ["Shock"], "type": "Shotgun"},
    {"id": 124, "name": "Mind-Killer", "possibleManufacturers": [
        "Maliwan"], "possibleElements": ["None"], "type": "Shotgun"},
    {"id": 125, "name": "Nothingness", "possibleManufacturers": [
        "Maliwan"], "possibleElements": ["Any", "None"], "type": "Shotgun"},
    {"id": 126, "name": "Recursion", "possibleManufacturers": [
        "Maliwan"], "possibleElements": ["Any", "None"], "type": "Shotgun"},
    {"id": 127, "name": "Trevonator", "possibleManufacturers": [
        "Maliwan"], "possibleElements": ["Any", "None"], "type": "Shotgun"},
    {"id": 128, "name": "Vosk's Deathgrip", "possibleManufacturers": [
        "Maliwan"], "possibleElements": ["Any", "None"], "type": "Shotgun"},
    {"id": 129, "name": "Cloud Kill", "possibleManufacturers": [
        "Maliwan"], "possibleElements": ["Corrosive"], "type": "SMG"},
    {"id": 130, "name": "Cutsman", "possibleManufacturers": [
        "Maliwan"], "possibleElements": ["Shock", "Fire", "Corrosive"], "type": "SMG"},
    {"id": 131, "name": "Destructo Spinner", "possibleManufacturers": [
        "Maliwan"], "possibleElements": ["Any", "None"], "type": "SMG"},
    {"id": 132, "name": "Devoted", "possibleManufacturers": [
        "Maliwan"], "possibleElements": ["Any", "None"], "type": "SMG"},
    {"id": 133, "name": "D.N.A.", "possibleManufacturers": [
        "Maliwan"], "possibleElements": ["Any", "Radiation"], "type": "SMG"},
    {"id": 134, "name": "Ember's Purge", "possibleManufacturers": [
        "Maliwan"], "possibleElements": ["Fire"], "type": "SMG"},
    {"id": 135, "name": "Flipper", "possibleManufacturers": [
        "Maliwan"], "possibleElements": ["Any", "None"], "type": "SMG"},
    {"id": 136, "name": "ION LASER", "possibleManufacturers": [
        "Maliwan"], "possibleElements": ["Any", "None"], "type": "SMG"},
    {"id": 137, "name": "Kyb's Worth", "possibleManufacturers": [
        "Maliwan"], "possibleElements": ["Any", "None"], "type": "SMG"},
    {"id": 138, "name": "P2P Networker", "possibleManufacturers": [
        "Maliwan"], "possibleElements": ["None", "None"], "type": "SMG"},
    {"id": 139, "name": "Polyaimorous", "possibleManufacturers": [
        "Maliwan"], "possibleElements": ["Shock", "Fire"], "type": "SMG"},
    {"id": 140, "name": "SF Force", "possibleManufacturers": [
        "Maliwan"], "possibleElements": ["Any", "None"], "type": "SMG"},
    {"id": 141, "name": "Tsunami", "possibleManufacturers": [
        "Maliwan"], "possibleElements": ["Shock", "Corrosive"], "type": "SMG"},
    {"id": 142, "name": "Vault Hero", "possibleManufacturers": [
        "Maliwan"], "possibleElements": ["Shock", "Corrosive"], "type": "SMG"},
    {"id": 143, "name": "Westergun", "possibleManufacturers": [
        "Maliwan"], "possibleElements": ["Any", "None"], "type": "SMG"},
    {"id": 144, "name": "ASMD", "possibleManufacturers": [
        "Maliwan"], "possibleElements": ["Shock"], "type": "Sniper"},
    {"id": 145, "name": "Firestorm", "possibleManufacturers": [
        "Maliwan"], "possibleElements": ["Fire"], "type": "Sniper"},
    {"id": 146, "name": "Krakatoa", "possibleManufacturers": [
        "Maliwan"], "possibleElements": ["Fire"], "type": "Sniper"},
    {"id": 147, "name": "Complex Root", "possibleManufacturers": [
        "Maliwan"], "possibleElements": ["Any", "None"], "type": "Sniper"},
    {"id": 148, "name": "Storm", "possibleManufacturers": [
        "Maliwan"], "possibleElements": ["Shock"], "type": "Sniper"},
    {"id": 149, "name": "Baby Maker ++",
        "possibleManufacturers": ["Tediore"], "possibleElements": ["Any"], "type": "Pistol"},
    {"id": 150, "name": "Bangarang XL", "possibleManufacturers": [
        "Tediore"], "possibleElements": ["Any"], "type": "Pistol"},
    {"id": 151, "name": "Gunerang XL", "possibleManufacturers": [
        "Tediore"], "possibleElements": ["Any"], "type": "Pistol"},
    {"id": 152, "name": "S3RV-8OS-EXECUTE",
        "possibleManufacturers": ["Tediore"], "possibleElements": ["Any"], "type": "Pistol"},
    {"id": 153, "name": "Scorpio XL", "possibleManufacturers": [
        "Tediore"], "possibleElements": ["None"], "type": "Pistol"},
    {"id": 154, "name": "Anarchy", "possibleManufacturers": [
        "Tediore"], "possibleElements": ["Any"], "type": "Shotgun"},
    {"id": 155, "name": "Brightside", "possibleManufacturers": [
        "Tediore"], "possibleElements": ["Any"], "type": "Shotgun"},
    {"id": 156, "name": "Creeping Death", "possibleManufacturers": [
        "Tediore"], "possibleElements": ["Corrosive"], "type": "Shotgun"},
    {"id": 157, "name": "Flama Diddle", "possibleManufacturers": [
        "Tediore"], "possibleElements": ["Any"], "type": "Shotgun"},
    {"id": 158, "name": "The Horizon", "possibleManufacturers": [
        "Tediore"], "possibleElements": ["Fire"], "type": "Shotgun"},
    {"id": 159, "name": "Pixie Dream Gun", "possibleManufacturers": [
        "Tediore"], "possibleElements": ["Any"], "type": "Shotgun"},
    {"id": 160, "name": "Polybius", "possibleManufacturers": [
        "Tediore"], "possibleElements": ["Any", "None"], "type": "Shotgun"},
    {"id": 161, "name": "Long Musket ++",
        "possibleManufacturers": ["Tediore"], "possibleElements": ["Fire"], "type": "SMG"},
    {"id": 162, "name": "Needle Gun", "possibleManufacturers": [
        "Tediore"], "possibleElements": ["Any"], "type": "SMG"},
    {"id": 163, "name": "Mother Too", "possibleManufacturers": [
        "Tediore"], "possibleElements": ["Any"], "type": "SMG"},
    {"id": 164, "name": "Smart Gun XXL", "possibleManufacturers": [
        "Tediore"], "possibleElements": ["Corrosive"], "type": "SMG"},
    {"id": 165, "name": "Ten Gallon", "possibleManufacturers": [
        "Tediore"], "possibleElements": ["Any"], "type": "SMG"},
    {"id": 166, "name": "Alchemist", "possibleManufacturers": [
        "Torgue"], "possibleElements": ["Fire"], "type": "AR"},
    {"id": 167, "name": "Bearcat", "possibleManufacturers": [
        "Torgue"], "possibleElements": ["Any"], "type": "AR"},
    {"id": 168, "name": "Contained Blast", "possibleManufacturers": [
        "Torgue"], "possibleElements": ["Any"], "type": "AR"},
    {"id": 169, "name": "Juliet's Dazzle", "possibleManufacturers": [
        "Torgue"], "possibleElements": ["None", "Cryo"], "type": "AR"},
    {"id": 170, "name": "Laser-Sploder", "possibleManufacturers": [
        "Torgue"], "possibleElements": ["Any", "None"], "type": "AR"},
    {"id": 171, "name": "Try-Bolt",
        "possibleManufacturers": ["Torgue"], "possibleElements": ["Any"], "type": "AR"},
    {"id": 172, "name": "Breeder", "possibleManufacturers": [
        "Torgue"], "possibleElements": ["Any"], "type": "Pistol"},
    {"id": 173, "name": "Craps", "possibleManufacturers": [
        "Torgue"], "possibleElements": ["Any"], "type": "Pistol"},
    {"id": 174, "name": "Devastator", "possibleManufacturers": [
        "Torgue"], "possibleElements": ["None"], "type": "Pistol"},
    {"id": 175, "name": "Devils Foursum", "possibleManufacturers": [
        "Torgue"], "possibleElements": ["Any"], "type": "Pistol"},
    {"id": 176, "name": "Echo", "possibleManufacturers": [
        "Torgue"], "possibleElements": ["Any"], "type": "Pistol"},
    {"id": 177, "name": "Girth Blaster Elite", "possibleManufacturers": [
        "Torgue"], "possibleElements": ["None"], "type": "Pistol"},
    {"id": 178, "name": "Moonfire", "possibleManufacturers": [
        "Torgue"], "possibleElements": ["Any"], "type": "Pistol"},
    {"id": 179, "name": "Occultist", "possibleManufacturers": [
        "Torgue"], "possibleElements": ["Fire"], "type": "Pistol"},
    {"id": 180, "name": "Roisen's Thorns", "possibleManufacturers": [
        "Torgue"], "possibleElements": ["Fire", "None"], "type": "Pistol"},
    {"id": 181, "name": "Scoville", "possibleManufacturers": [
        "Torgue"], "possibleElements": ["Any"], "type": "Pistol"},
    {"id": 182, "name": "Unkempt Harold", "possibleManufacturers": [
        "Torgue"], "possibleElements": ["None"], "type": "Pistol"},
    {"id": 183, "name": "Creamer", "possibleManufacturers": [
        "Torgue"], "possibleElements": ["Corrosive", "Radiation"], "type": "RPG"},
    {"id": 184, "name": "Hive", "possibleManufacturers": [
        "Torgue"], "possibleElements": ["None"], "type": "RPG"},
    {"id": 185, "name": "Nukem", "possibleManufacturers": [
        "Torgue"], "possibleElements": ["Corrosive"], "type": "RPG"},
    {"id": 186, "name": "Plaguebearer", "possibleManufacturers": [
        "Torgue"], "possibleElements": ["Any", "None"], "type": "RPG"},
    {"id": 187, "name": "Quadomizer", "possibleManufacturers": [
        "Torgue"], "possibleElements": ["Fire", "Corrosive", "Radiation"], "type": "RPG"},
    {"id": 188, "name": "R.Y.N.A.H.", "possibleManufacturers": [
        "Torgue"], "possibleElements": ["Radiation"], "type": "RPG"},
    {"id": 189, "name": "Satisfaction", "possibleManufacturers": [
        "Torgue"], "possibleElements": ["Any"], "type": "RPG"},
    {"id": 190, "name": "Scourge", "possibleManufacturers": [
        "Torgue"], "possibleElements": ["Any"], "type": "RPG"},
    {"id": 191, "name": "Tunguska", "possibleManufacturers": [
        "Torgue"], "possibleElements": ["None"], "type": "RPG"},
    {"id": 192, "name": "Flakker", "possibleManufacturers": [
        "Torgue"], "possibleElements": ["Fire", "None", "Radiation"], "type": "Shotgun"},
    {"id": 193, "name": "Redline", "possibleManufacturers": [
        "Torgue"], "possibleElements": ["Any"], "type": "Shotgun"},
    {"id": 194, "name": "Shocker", "possibleManufacturers": [
        "Torgue"], "possibleElements": ["Shock"], "type": "Shotgun"},
    {"id": 195, "name": "Spade", "possibleManufacturers": [
        "Torgue"], "possibleElements": ["Any"], "type": "Shotgun"},
    {"id": 196, "name": "The Boring Gun", "possibleManufacturers": [
        "Torgue"], "possibleElements": ["Any"], "type": "Shotgun"},
    {"id": 197, "name": "The Lob", "possibleManufacturers": [
        "Torgue"], "possibleElements": ["Any", "None"], "type": "Shotgun"},
    {"id": 198, "name": "Tiggs' Boom", "possibleManufacturers": [
        "Torgue"], "possibleElements": ["Any", "None"], "type": "Shotgun"},
    {"id": 199, "name": "Damned", "possibleManufacturers": [
        "Vladof"], "possibleElements": ["Any"], "type": "AR"},
    {"id": 200, "name": "Dowsing Rod", "possibleManufacturers": [
        "Vladof"], "possibleElements": ["Any"], "type": "AR"},
    {"id": 201, "name": "Faisor", "possibleManufacturers": [
        "Vladof"], "possibleElements": ["Any"], "type": "AR"},
    {"id": 202, "name": "Lucian's Call", "possibleManufacturers": [
        "Vladof"], "possibleElements": ["Fire", "Corrosive", "Cryo"], "type": "AR"},
    {"id": 203, "name": "Ogre", "possibleManufacturers": [
        "Vladof"], "possibleElements": ["None"], "type": "AR"},
    {"id": 204, "name": "The Dictator", "possibleManufacturers": [
        "Vladof"], "possibleElements": ["Any"], "type": "AR"},
    {"id": 205, "name": "The Monarch", "possibleManufacturers": [
        "Vladof"], "possibleElements": ["Any"], "type": "AR"},
    {"id": 206, "name": "Shredifier", "possibleManufacturers": [
        "Vladof"], "possibleElements": ["Any"], "type": "AR"},
    {"id": 207, "name": "Sickle", "possibleManufacturers": [
        "Vladof"], "possibleElements": ["Any", "None"], "type": "AR"},
    {"id": 208, "name": "Web Slinger", "possibleManufacturers": [
        "Vladof"], "possibleElements": ["Any"], "type": "AR"},
    {"id": 209, "name": "Infinity", "possibleManufacturers": [
        "Vladof"], "possibleElements": ["Any"], "type": "Pistol"},
    {"id": 210, "name": "Light Show", "possibleManufacturers": [
        "Vladof"], "possibleElements": ["Shock", "Fire", "None", "Corrosive"], "type": "Pistol"},
    {"id": 211, "name": "Magnificent", "possibleManufacturers": [
        "Vladof"], "possibleElements": ["Any"], "type": "Pistol"},
    {"id": 212, "name": "Miscreant", "possibleManufacturers": [
        "Vladof"], "possibleElements": ["Any", "None"], "type": "Pistol"},
    {"id": 213, "name": "BackBurner", "possibleManufacturers": [
        "Vladof"], "possibleElements": ["Radiation"], "type": "RPG"},
    {"id": 214, "name": "Jericho", "possibleManufacturers": [
        "Vladof"], "possibleElements": ["Any"], "type": "RPG"},
    {"id": 215, "name": "Mongol", "possibleManufacturers": [
        "Vladof"], "possibleElements": ["Any"], "type": "RPG"},
    {"id": 216, "name": "ION CANNON", "possibleManufacturers": [
        "Vladof"], "possibleElements": ["Any"], "type": "RPG"},
    {"id": 217, "name": "Lyuda", "possibleManufacturers": [
        "Vladof"], "possibleElements": ["Any"], "type": "Sniper"},
    {"id": 218, "name": "Asclepius", "possibleManufacturers": [
        "Anshin"], "possibleElements": ["None"], "type": "Shield"},
    {"id": 219, "name": "Back Ham", "possibleManufacturers": [
        "Anshin"], "possibleElements": ["None"], "type": "Shield"},
    {"id": 220, "name": "Badass Combustor", "possibleManufacturers": [
        "Anshin"], "possibleElements": ["Cryo"], "type": "Shield"},
    {"id": 221, "name": "Frozen Heart", "possibleManufacturers": [
        "Anshin"], "possibleElements": ["Any"], "type": "Shield"},
    {"id": 222, "name": "Version 0.m", "possibleManufacturers": [
        "Anshin"], "possibleElements": ["Shock", "Corrosive"], "type": "Shield"},
    {"id": 223, "name": "Messy Breakup", "possibleManufacturers": [
        "Anshin"], "possibleElements": ["Fire"], "type": "Shield"},
    {"id": 224, "name": "Nova Berner", "possibleManufacturers": [
        "Anshin"], "possibleElements": ["Any"], "type": "Shield"},
    {"id": 225, "name": "Red Card", "possibleManufacturers": [
        "Anshin"], "possibleElements": ["Any", "None"], "type": "Shield"},
    {"id": 226, "name": "Red Card Re-Charger",
        "possibleManufacturers": ["Anshin"], "possibleElements": ["Any"], "type": "Shield"},
    {"id": 227, "name": "Re-Router",
        "possibleManufacturers": ["Anshin"], "possibleElements": ["None"], "type": "Shield"},
    {"id": 228, "name": "Rico", "possibleManufacturers": [
        "Anshin"], "possibleElements": ["Any"], "type": "Shield"},
    {"id": 229, "name": "Rough Rider", "possibleManufacturers": [
        "Anshin"], "possibleElements": ["Cryo"], "type": "Shield"},
    {"id": 230, "name": "Scream of Terror", "possibleManufacturers": [
        "Anshin"], "possibleElements": ["Cryo"], "type": "Shield"},
    {"id": 231, "name": "Snowshoe", "possibleManufacturers": [
        "Anshin"], "possibleElements": ["Any"], "type": "Shield"},
    {"id": 232, "name": "Wattson", "possibleManufacturers": [
        "Anshin"], "possibleElements": ["None"], "type": "Shield"},
    {"id": 233, "name": "Whiskey Tango Foxtrot", "possibleManufacturers": [
        "Anshin"], "possibleElements": ["Shock", "Fire", "Corrosive"], "type": "Shield"},
    {"id": 234, "name": "Black Hole", "possibleManufacturers": [
        "Pangolin"], "possibleElements": ["Shock"], "type": "Shield"},
    {"id": 235, "name": "Band of Sitorak", "possibleManufacturers": [
        "Pangolin"], "possibleElements": ["Any"], "type": "Shield"},
    {"id": 236, "name": "Big Boom Blaster", "possibleManufacturers": [
        "Pangolin"], "possibleElements": ["Any"], "type": "Shield"},
    {"id": 237, "name": "Impaler", "possibleManufacturers": [
        "Pangolin"], "possibleElements": ["Corrosive"], "type": "Shield"},
    {"id": 238, "name": "Red Suit", "possibleManufacturers": [
        "Pangolin"], "possibleElements": ["Radiation"], "type": "Shield"},
    {"id": 239, "name": "Shooting Star", "possibleManufacturers": [
        "Pangolin"], "possibleElements": ["Any"], "type": "Shield"},
    {"id": 240, "name": "Stinger", "possibleManufacturers": [
        "Pangolin"], "possibleElements": ["Any"], "type": "Shield"},
    {"id": 241, "name": "Torch", "possibleManufacturers": [
        "Pangolin"], "possibleElements": ["Fire"], "type": "Shield"},
    {"id": 242, "name": "Void Rift", "possibleManufacturers": [
        "Pangolin"], "possibleElements": ["Cryo"], "type": "Shield"},
    {"id": 243, "name": "Firewall", "possibleManufacturers": [
        "Hyperion"], "possibleElements": ["None"], "type": "Shield"},
    {"id": 244, "name": "Front Loader", "possibleManufacturers": [
        "Hyperion"], "possibleElements": ["Any"], "type": "Shield"},
    {"id": 245, "name": "Old God", "possibleManufacturers": [
        "Hyperion"], "possibleElements": ["Any", "None"], "type": "Shield"},
    {"id": 246, "name": "Re-Charger", "possibleManufacturers": [
        "Hyperion"], "possibleElements": ["Any"], "type": "Shield"},
    {"id": 247, "name": "Re-Charge Berner", "possibleManufacturers": [
        "Hyperion"], "possibleElements": ["Fire", "Corrosive", "Radiation"], "type": "Shield"},
    {"id": 248, "name": "Rectifier", "possibleManufacturers": [
        "Hyperion"], "possibleElements": ["Shock"], "type": "Shield"},
    {"id": 249, "name": "Stop-Gap", "possibleManufacturers": [
        "Hyperion"], "possibleElements": ["Any"], "type": "Shield"},
    {"id": 250, "name": "The Transformer", "possibleManufacturers": [
        "Hyperion"], "possibleElements": ["Shock"], "type": "Shield"},
    {"id": 251, "name": "Ward", "possibleManufacturers": [
        "Hyperion"], "possibleElements": ["Any"], "type": "Shield"},
    {"id": 252, "name": "Commander Planetoid", "possibleManufacturers": [
        "Eridian"], "possibleElements": ["Any"], "type": "Artifact"},
    {"id": 253, "name": "Cosmic Crater", "possibleManufacturers": [
        "Eridian"], "possibleElements": ["Any"], "type": "Artifact"},
    {"id": 254, "name": "Deathless", "possibleManufacturers": [
        "Eridian"], "possibleElements": ["Any"], "type": "Artifact"},
    {"id": 255, "name": "Electric Banjo", "possibleManufacturers": [
        "Eridian"], "possibleElements": ["None", "None"], "type": "Artifact"},
    {"id": 256, "name": "Grave", "possibleManufacturers": [
        "Eridian"], "possibleElements": ["None", "None"], "type": "Artifact"},
    {"id": 257, "name": "Launch Pad", "possibleManufacturers": [
        "Eridian"], "possibleElements": ["Any"], "type": "Artifact"},
    {"id": 258, "name": "Loaded Dice", "possibleManufacturers": [
        "Eridian"], "possibleElements": ["Any"], "type": "Artifact"},
    {"id": 259, "name": "Lunacy", "possibleManufacturers": [
        "Eridian"], "possibleElements": ["None", "None"], "type": "Artifact"},
    {"id": 260, "name": "Moxxi's Endowment", "possibleManufacturers": [
        "Eridian"], "possibleElements": ["Any"], "type": "Artifact"},
    {"id": 261, "name": "Otto Idol", "possibleManufacturers": [
        "Eridian"], "possibleElements": ["Any"], "type": "Artifact"},
    {"id": 262, "name": "Phoenix Tears", "possibleManufacturers": [
        "Eridian"], "possibleElements": ["None", "None"], "type": "Artifact"},
    {"id": 263, "name": "Pull Out Method", "possibleManufacturers": [
        "Eridian"], "possibleElements": ["Any"], "type": "Artifact"},
    {"id": 264, "name": "Rocket Boots", "possibleManufacturers": [
        "Eridian"], "possibleElements": ["Any"], "type": "Artifact"},
    {"id": 265, "name": "Safeguard", "possibleManufacturers": [
        "Eridian"], "possibleElements": ["Any"], "type": "Artifact"},
    {"id": 266, "name": "Splatter Gun", "possibleManufacturers": [
        "Eridian"], "possibleElements": ["Any"], "type": "Artifact"},
    {"id": 267, "name": "Static Charge", "possibleManufacturers": [
        "Eridian"], "possibleElements": ["Any"], "type": "Artifact"},
    {"id": 268, "name": "The ... Knowledge", "possibleManufacturers": [
        "Eridian"], "possibleElements": ["None", "None"], "type": "Artifact"},
    {"id": 269, "name": "Unleash the Dragon", "possibleManufacturers": [
        "Eridian"], "possibleElements": ["None", "None"], "type": "Artifact"},
    {"id": 270, "name": "Victory Rush", "possibleManufacturers": [
        "Eridian"], "possibleElements": ["Any"], "type": "Artifact"},
    {"id": 271, "name": "White Elephant", "possibleManufacturers": [
        "Eridian"], "possibleElements": ["Any"], "type": "Artifact"},
    {"id": 272, "name": "Breaker", "possibleManufacturers": [
        "Class Mod-Amara"], "possibleElements": ["None", "None"], "type": "Class Mod-Amara"},
    {"id": 273, "name": "Dragon", "possibleManufacturers": [
        "Class Mod-Amara"], "possibleElements": ["None", "None"], "type": "Class Mod-Amara"},
    {"id": 274, "name": "Elementalist", "possibleManufacturers": [
        "Class Mod-Amara"], "possibleElements": ["Any"], "type": "Class Mod-Amara"},
    {"id": 275, "name": "Golden Rule", "possibleManufacturers": [
        "Class Mod-Amara"], "possibleElements": ["None", "None"], "type": "Class Mod-Amara"},
    {"id": 276, "name": "Nimbus", "possibleManufacturers": [
        "Class Mod-Amara"], "possibleElements": ["None", "None"], "type": "Class Mod-Amara"},
    {"id": 277, "name": "Phasezerker", "possibleManufacturers": [
        "Class Mod-Amara"], "possibleElements": ["None", "None"], "type": "Class Mod-Amara"},
    {"id": 278, "name": "Spiritual Driver", "possibleManufacturers": [
        "Class Mod-Amara"], "possibleElements": ["None", "None"], "type": "Class Mod-Amara"},
    {"id": 279, "name": "Stone", "possibleManufacturers": [
        "Class Mod-Amara"], "possibleElements": ["None", "None"], "type": "Class Mod-Amara"},
    {"id": 280, "name": "Bounty Hunter", "possibleManufacturers": [
        "Class Mod-Fl4k"], "possibleElements": ["None", "None"], "type": "Class Mod-Fl4k"},
    {"id": 281, "name": "Cosmic Stalker", "possibleManufacturers": [
        "Class Mod-Fl4k"], "possibleElements": ["None", "None"], "type": "Class Mod-Fl4k"},
    {"id": 282, "name": "DE4DEYE", "possibleManufacturers": [
        "Class Mod-Fl4k"], "possibleElements": ["None", "None"], "type": "Class Mod-Fl4k"},
    {"id": 283, "name": "Friend-Bot", "possibleManufacturers": [
        "Class Mod-Fl4k"], "possibleElements": ["None", "None"], "type": "Class Mod-Fl4k"},
    {"id": 284, "name": "R4kk P4k", "possibleManufacturers": [
        "Class Mod-Fl4k"], "possibleElements": ["None", "None"], "type": "Class Mod-Fl4k"},
    {"id": 285, "name": "Rakk Commander", "possibleManufacturers": [
        "Class Mod-Fl4k"], "possibleElements": ["None", "None"], "type": "Class Mod-Fl4k"},
    {"id": 286, "name": "Red Fang", "possibleManufacturers": [
        "Class Mod-Fl4k"], "possibleElements": ["None", "None"], "type": "Class Mod-Fl4k"},
    {"id": 287, "name": "St4ckbot", "possibleManufacturers": [
        "Class Mod-Fl4k"], "possibleElements": ["None", "None"], "type": "Class Mod-Fl4k"},
    {"id": 288, "name": "Tr4iner", "possibleManufacturers": [
        "Class Mod-Fl4k"], "possibleElements": ["None", "None"], "type": "Class Mod-Fl4k"},
    {"id": 289, "name": "Bear Trooper", "possibleManufacturers": [
        "Class Mod-Moze"], "possibleElements": ["None", "None"], "type": "Class Mod-Moze"},
    {"id": 290, "name": "Blast Master", "possibleManufacturers": [
        "Class Mod-Moze"], "possibleElements": ["None", "None"], "type": "Class Mod-Moze"},
    {"id": 291, "name": "Bloodletter", "possibleManufacturers": [
        "Class Mod-Moze"], "possibleElements": ["None", "None"], "type": "Class Mod-Moze"},
    {"id": 292, "name": "Green Monster", "possibleManufacturers": [
        "Class Mod-Moze"], "possibleElements": ["None", "None"], "type": "Class Mod-Moze"},
    {"id": 293, "name": "Mind Sweeper", "possibleManufacturers": [
        "Class Mod-Moze"], "possibleElements": ["None", "None"], "type": "Class Mod-Moze"},
    {"id": 294, "name": "Raging Bear", "possibleManufacturers": [
        "Class Mod-Moze"], "possibleElements": ["None", "None"], "type": "Class Mod-Moze"},
    {"id": 295, "name": "Rocketeer", "possibleManufacturers": [
        "Class Mod-Moze"], "possibleElements": ["None", "None"], "type": "Class Mod-Moze"},
    {"id": 296, "name": "Sapper", "possibleManufacturers": [
        "Class Mod-Moze"], "possibleElements": ["None", "None"], "type": "Class Mod-Moze"},
    {"id": 297, "name": "Antifreeze", "possibleManufacturers": [
        "Class Mod-Zane"], "possibleElements": ["None", "None"], "type": "Class Mod-Zane"},
    {"id": 298, "name": "Cold Warrior", "possibleManufacturers": [
        "Class Mod-Zane"], "possibleElements": ["None", "None"], "type": "Class Mod-Zane"},
    {"id": 299, "name": "Conductor", "possibleManufacturers": [
        "Class Mod-Zane"], "possibleElements": ["None", "None"], "type": "Class Mod-Zane"},
    {"id": 300, "name": "Executor", "possibleManufacturers": [
        "Class Mod-Zane"], "possibleElements": ["None", "None"], "type": "Class Mod-Zane"},
    {"id": 301, "name": "Infiltrator", "possibleManufacturers": [
        "Class Mod-Zane"], "possibleElements": ["None", "None"], "type": "Class Mod-Zane"},
    {"id": 302, "name": "Seein' Dead", "possibleManufacturers": [
        "Class Mod-Zane"], "possibleElements": ["None", "None"], "type": "Class Mod-Zane"},
    {"id": 303, "name": "Shockerator", "possibleManufacturers": [
        "Class Mod-Zane"], "possibleElements": ["None", "None"], "type": "Class Mod-Zane"},
    {"id": 304, "name": "Techspert", "possibleManufacturers": [
        "Class Mod-Zane"], "possibleElements": ["None", "None"], "type": "Class Mod-Zane"},
    {"id": 305, "name": "Cheddar Shredder", "possibleManufacturers": [
        "Tediore"], "possibleElements": ["None"], "type": "Grenade Mod"},
    {"id": 306, "name": "Chupa's Organ", "possibleManufacturers": [
        "Atlas", "Hyperion"], "possibleElements": ["None"], "type": "Grenade Mod"},
    {"id": 307, "name": "Diamond Butt Bomb", "possibleManufacturers": [
        "Vladof"], "possibleElements": ["None"], "type": "Grenade Mod"},
    {"id": 308, "name": "EMP", "possibleManufacturers": [
        "Hyperion"], "possibleElements": ["Shock"], "type": "Grenade Mod"},
    {"id": 309, "name": "Epicenter", "possibleManufacturers": [
        "Vladof"], "possibleElements": ["Fire"], "type": "Grenade Mod"},
    {"id": 310, "name": "Fastball", "possibleManufacturers": [
        "Tediore"], "possibleElements": ["Any"], "type": "Grenade Mod"},
    {"id": 311, "name": "Firestorm (sniper)", "possibleManufacturers": [
        "Hyperion", "Vladof", "Tediore"], "possibleElements": ["Fire"], "type": "Grenade Mod"},
    {"id": 312, "name": "Fish Slap", "possibleManufacturers": [
        "Pangolin"], "possibleElements": ["Corrosive"], "type": "Grenade Mod"},
    {"id": 313, "name": "Ghast Call", "possibleManufacturers": [
        "Torgue"], "possibleElements": ["Shock", "Cryo", "Radiation"], "type": "Grenade Mod"},
    {"id": 314, "name": "Hex", "possibleManufacturers": [
        "Atlas"], "possibleElements": ["Any"], "type": "Grenade Mod"},
    {"id": 315, "name": "Hunter-Seeker", "possibleManufacturers": [
        "Tediore"], "possibleElements": ["Any"], "type": "Grenade Mod"},
    {"id": 316, "name": "It's Piss", "possibleManufacturers": [
        "Vladof"], "possibleElements": ["Shock", "Fire"], "type": "Grenade Mod"},
    {"id": 317, "name": "Lightspeed", "possibleManufacturers": [
        "Hyperion"], "possibleElements": ["None"], "type": "Grenade Mod"},
    {"id": 318, "name": "Moxxi's Bouncing Pair", "possibleManufacturers": [
        "Pangolin"], "possibleElements": ["Shock"], "type": "Grenade Mod"},
    {"id": 319, "name": "Nagata", "possibleManufacturers": [
        "Hyperion"], "possibleElements": ["None"], "type": "Grenade Mod"},
    {"id": 320, "name": "Quasar", "possibleManufacturers": [
        "Atlas", "Hyperion", "Tediore"], "possibleElements": ["Shock"], "type": "Grenade Mod"},
    {"id": 321, "name": "Red Queen", "possibleManufacturers": [
        "Vladof"], "possibleElements": ["Any"], "type": "Grenade Mod"},
    {"id": 322, "name": "Storm Front", "possibleManufacturers": [
        "Hyperion", "Vladof", "Tediore"], "possibleElements": ["Any"], "type": "Grenade Mod"},
    {"id": 323, "name": "Surge", "possibleManufacturers": [
        "Torgue"], "possibleElements": ["Any"], "type": "Grenade Mod"},
    {"id": 324, "name": "Tina's Hippity Hopper", "possibleManufacturers": [
        "Torgue"], "possibleElements": ["Any"], "type": "Grenade Mod"},
    {"id": 325, "name": "Tran-fusion", "possibleManufacturers": [
        "Atlas", "Hyperion", "Tediore"], "possibleElements": ["None"], "type": "Grenade Mod"},
    {"id": 326, "name": "Ultraball", "possibleManufacturers": [
        "Torgue"], "possibleElements": ["None", "None"], "type": "Grenade Mod"},
    {"id": 327, "name": "Widowmaker", "possibleManufacturers": [
        "Hyperion", "Vladof", "Tediore", "Torgue"], "possibleElements": ["None"], "type": "Grenade Mod"}
]
