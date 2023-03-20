<div align="center">
<br>

<p>
<img src="https://cdn.discordapp.com/attachments/1068185670574690419/1087415052526682132/logo_preta1.png">
</p>
</div>

---

## **About**
**A simple but fast json database you can add values ​​in mongodb with simple methods**

---

## **Installation**

```sh-session
npm i sexodb
```

---

## **Example Usage**

---

### **JSON Example**

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

### **MONGODB Example**

```js

const {sexoMongo} = require("sexodb")
const db = new sexoMongo("Name schema")

async function example () {

    //Connecting to MongoDB
    await db.connect("mongodb://localhost/myDatabase")

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
example();
```

---

## **Useful Links**

- [**GitHub**](https://github.com/Gandalf51/SexoDb)
- [**npm**](https://www.npmjs.com/package/sexodb)