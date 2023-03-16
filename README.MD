<h1 align="center">
SexoDB
</h1>

# 🔥 a simple and hot interpreted database

## 🤤 JSON Database Usage

```js

const { sexoJson } = require("sexodb")
const db = new sexoJson("database.json")
async function example() {

// Add 1 to the "counter" key
await db.cumAdd("counter");

// Add 5 to the "points" key
await db.cumAdd("points", 5);

// Subtract 1 from the "counter" key
await db.blowjobSubtract("counter");

// List all keys and values in the database
const allData = db.lustAll();
console.log(allData);

// Set the value of the "name" key to "John"
await db.boobsSet("name", "John");

// Get the value of the "points" key
const points = await db.pussyGet<number>("points");
console.log(points);

// Delete the "name" key
await db.assDelete("name");

}

example();
```

## 🤤 MongoDB Usage

```js

const {sexoMongo} = require("sexodb")
const db = new sexoMongo("Name schema")

async function a () {
    await db.connect("mongodb://localhost/myDatabase")//Connecting to MongoDB

    // Add 5 to the "points" key
    await db.cumAdd("points", 5);

    // Subtract 1 from the "points" key
    await db.blowjobSubtract("points", 1);

    // List all keys and values in the database
    const allData = await db.lustAll();
    console.log(allData);

    // Get the value of the "points" key
    const points = await db.pussyGet("points");
    console.log(points);

    //Change an existing key
    await db.boobsSet("points", 22);

    // Delete the "points" key
   await db.assDelete("points");
}