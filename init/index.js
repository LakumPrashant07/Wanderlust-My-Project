const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://localhost:27017/wanderlust";
main().then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((listing) => ({ 
        ...listing, 
        owner:"67de3c6ea73fd427bea7721d",
    }));
    await Listing.insertMany(initData.data);
    console.log("Data has been added");
}

initDB();