var sqlite3 = require('sqlite3');

var db = new sqlite3.Database('BD.db');

db.serialize(function() {
    // Create a table
    db.run(" CREATE TABLE IF NOT EXISTS Admin (Username TEXT NOT NULL,Password TEXT NOT NULL) ");
    db.run("CREATE TABLE IF NOT EXISTS Company (ID INTEGER PRIMARY KEY,company_name TEXT NOT NULL,company_api_key TEXT NOT NULL)");
    db.run(" CREATE TABLE IF NOT EXISTS Location (company_id INTEGER PRIMARY KEY,location_name TEXT NOT NULL,location_country TEXT NOT NULL,location_city TEXT NOT NULL,location_meta TEXT NOT NULL) ");
    db.run(" CREATE TABLE IF NOT EXISTS Sensor (location_id INTEGER PRIMARY KEY,sensor_id Integer NOT NULL,sensor_name TEXT NOT NULL,sensor_category TEXT NOT NULL,sensor_meta TEXT NOT NULL,sensor_api_key TEXT NOT NULL) ");

    // Insert data into the table
    db.run("INSERT INTO Foo (name) VALUES ('bar')");

    // Query data from the table
    db.each("SELECT id, name FROM Foo", function(err, row) {
        console.log(row.id + ": " + row.name);
    });
});
db.close();