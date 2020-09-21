const grenades = [
    {
        "id": 1,
        "name": "Chupa's Organ",
        "possibleManufacturers": "A H"
    },
    {
        "id": 2,
        "name": "EMP",
        "possibleManufacturers": "H"
    },
    {
        "id": 3,
        "name": "Epicenter",
        "possibleManufacturers": "V"
    },
    {
        "id": 4,
        "name": "Fastball",
        "possibleManufacturers": "t"
    },
    {
        "id": 5,
        "name": "Firestorm",
        "possibleManufacturers": "H t V"
    },
    {
        "id": 6,
        "name": "Fish Slap",
        "possibleManufacturers": "P"
    },
    {
        "id": 7,
        "name": "Ghast Call",
        "possibleManufacturers": "T"
    },
    {
        "id": 8,
        "name": "Hex",
        "possibleManufacturers": "A"
    },
    {
        "id": 9,
        "name": "Hunter-Seeker",
        "possibleManufacturers": "t"
    },
    {
        "id": 10,
        "name": "It's Piss",
        "possibleManufacturers": "V"
    },
    {
        "id": 11,
        "name": "Lightspeed",
        "possibleManufacturers": "H"
    },
    {
        "id": 12,
        "name": "Moxxi's Bouncing Pair",
        "possibleManufacturers": "P"
    },
    {
        "id": 13,
        "name": "Nagata",
        "possibleManufacturers": "H"
    },
    {
        "id": 14,
        "name": "Quasar",
        "possibleManufacturers": "A H t"
    },
    {
        "id": 15,
        "name": "Red Queen",
        "possibleManufacturers": "V"
    },
    {
        "id": 16,
        "name": "Storm Front",
        "possibleManufacturers": "H t V"
    },
    {
        "id": 17,
        "name": "Surge",
        "possibleManufacturers": "T"
    },
    {
        "id": 18,
        "name": "Tina's Hippity Hopper",
        "possibleManufacturers": "T"
    },
    {
        "id": 19,
        "name": "Tran-fusion",
        "possibleManufacturers": "A H t"
    },
    {
        "id": 20,
        "name": "Widowmaker",
        "possibleManufacturers": "H T t V"
    },
    {
        "id": 21,
        "name": "Cheddar Shredder",
        "possibleManufacturers": "t"
    },
    {
        "id": 22,
        "name": "Diamond Butt Bomb",
        "possibleManufacturers": "V"
    },
    {
        "id": 23,
        "name": "Ultraball",
        "possibleManufacturers": "T"
    }
]
const more = grenades.map((grenade) => {
    let grenades = {
        id: grenade.id,
        name: grenade.name,
        possibleManufacturers: []
    }
    if (grenade.possibleManufacturers.includes("A")) grenades.possibleManufacturers.push("Atlas")
    if (grenade.possibleManufacturers.includes("H")) grenades.possibleManufacturers.push("Hyperion")
    if (grenade.possibleManufacturers.includes("V")) grenades.possibleManufacturers.push("Vladof")
    if (grenade.possibleManufacturers.includes("t")) grenades.possibleManufacturers.push("Tediore")
    if (grenade.possibleManufacturers.includes("P")) grenades.possibleManufacturers.push("Pangolin")
    if (grenade.possibleManufacturers.includes("T")) grenades.possibleManufacturers.push("Torgue")
    return (grenades)
})

export const possibleGrenadeManufacturers = [
    {
        id: 1,
        name: "Chupa's Organ",
        possibleManufacturers: ['Atlas', 'Hyperion']
    },
    { id: 2, name: 'EMP', possibleManufacturers: ['Hyperion'] },
    { id: 3, name: 'Epicenter', possibleManufacturers: ['Vladof'] },
    { id: 4, name: 'Fastball', possibleManufacturers: ['Tediore'] },
    {
        id: 5,
        name: 'Firestorm',
        possibleManufacturers: ['Hyperion', 'Vladof', 'Tediore']
    },
    { id: 6, name: 'Fish Slap', possibleManufacturers: ['Pangolin'] },
    { id: 7, name: 'Ghast Call', possibleManufacturers: ['Torgue'] },
    { id: 8, name: 'Hex', possibleManufacturers: ['Atlas'] },
    {
        id: 9,
        name: 'Hunter-Seeker',
        possibleManufacturers: ['Tediore']
    },
    { id: 10, name: "It's Piss", possibleManufacturers: ['Vladof'] },
    { id: 11, name: 'Lightspeed', possibleManufacturers: ['Hyperion'] },
    {
        id: 12,
        name: "Moxxi's Bouncing Pair",
        possibleManufacturers: ['Pangolin']
    },
    { id: 13, name: 'Nagata', possibleManufacturers: ['Hyperion'] },
    {
        id: 14,
        name: 'Quasar',
        possibleManufacturers: ['Atlas', 'Hyperion', 'Tediore']
    },
    { id: 15, name: 'Red Queen', possibleManufacturers: ['Vladof'] },
    {
        id: 16,
        name: 'Storm Front',
        possibleManufacturers: ['Hyperion', 'Vladof', 'Tediore']
    },
    { id: 17, name: 'Surge', possibleManufacturers: ['Torgue'] },
    {
        id: 18,
        name: "Tina's Hippity Hopper",
        possibleManufacturers: ['Torgue']
    },
    {
        id: 19,
        name: 'Tran-fusion',
        possibleManufacturers: ['Atlas', 'Hyperion', 'Tediore']
    },
    {
        id: 20,
        name: 'Widowmaker',
        possibleManufacturers: ['Hyperion', 'Vladof', 'Tediore', 'Torgue']
    },
    {
        id: 21,
        name: 'Cheddar Shredder',
        possibleManufacturers: ['Tediore']
    },
    {
        id: 22,
        name: 'Diamond Butt Bomb',
        possibleManufacturers: ['Vladof']
    },
    { id: 23, name: 'Ultraball', possibleManufacturers: ['Torgue'] }
]
