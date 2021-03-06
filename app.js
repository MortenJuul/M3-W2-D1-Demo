let MongoClient = require('mongodb').MongoClient;

// nodemongo is the database name
let url = "mongodb://localhost:27017/mongodb";

// Connect to the db
MongoClient.connect(url, {
    useNewUrlParser: true, useUnifiedTopology: true
    }, function (err, db) {
        // if (err) throw err;
        // console.log("Database created!");
        // db.close();

    let dbo = db.db("nodemongo");
    // dbo.createCollection("customers", function(err, res){
    //     if (err) throw err;
    //     console.log("Collection created!");
    //     db.close();
    // });

    // let custData = {name: "Westcliff Inc", address: "Irvine CA"};
    // dbo.collection("customers").insertOne(custData, function(err, res) {
    //     if(err) throw err;
    //     console.log("1 document inserted");
    //     db.close();
    // })

    // let custData = [
    //     { name: 'John', address: 'Highway 71'},
    //     { name: 'Peter', address: 'Lowstreet 4'},
    //     { name: 'Amy', address: 'Apple st 652'},
    //     { name: 'Hannah', address: 'Mountain 21'},
    //     { name: 'Michael', address: 'Valley 345'},
    //     { name: 'Sandy', address: 'Ocean blvd 2'},
    //     { name: 'Betty', address: 'Green Grass 1'},
    //     { name: 'Richard', address: 'Sky st 331'},
    //     { name: 'Susan', address: 'One way 98'},
    //     { name: 'Vicky', address: 'Yellow Garden 2'},
    //     { name: 'Ben', address: 'Park Lane 38'},
    //     { name: 'William', address: 'Central st 954'},
    //     { name: 'Chuck', address: 'Main Road 989'},
    //     { name: 'Viola', address: 'Sideway 1633'}
    // ];
    // dbo.collection("customers").insertMany(custData, function(err, res) {
    //     if(err) throw err;
    //     console.log(`Number of documents inserted: ${res.insertedCount}`);
    //     db.close();
    // });

    // dbo.collection("customers").findOne({}, function(err, res) {
    //     if(err) throw err;
    //     console.log(res.name);
    //     db.close();
    // });

    // let query = {address: "Park Lane 38"};
    // dbo.collection("customers").find(query).toArray(function(err, res) {
    //     if(err) throw err;
    //     console.log(res);
    //     db.close();
    // });

    // let mySort = {name: 1};
    // dbo.collection("customers").find().sort(mySort).toArray(function(err, res) {
    //     if(err) throw err;
    //     console.log(res);
    //     db.close();
    // });

    // let myquery = {address: "Mountain 21"};
    // dbo.collection("customers").deleteOne(myquery, function(err, obj) {
    //     if(err) throw err;
    //     console.log("1 document deleted");
    //     db.close();
    // });

    let myquery = {address: "Valley 345"};
    let newvalues = { $set: {name: "Mickey", address: "Canyon 123"} };
    dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
        if(err) throw err;
        console.log("1 document updated");
        db.close();
    });
});