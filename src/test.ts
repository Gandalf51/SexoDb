import sexoDB from ".";
const db = new sexoDB('db.json')

await db.initialize()
await db.boobsSet('Pog', 1);

console.log(db.pussyGet('Pog'));
