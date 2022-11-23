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
    //Examples
    /* db.run("INSERT INTO Admin (Username, Password) VALUES ('User', 'Contraseña')");
    db.run("INSERT INTO Company (ID, company_name, company_api_key) VALUES (7, 'METFLIX', 'llave')");
    db.run("INSERT INTO Location (company_id, location_name, location_country, location_city, location_meta) VALUES (7,'local', 'Chile', 'Santiago', 'meta')");
    db.run("INSERT INTO Sensor (location_id, sensor_id, sensor_name, sensor_category, sensor_meta, sensor_api_key) VALUES (10, 2, 1, 'Sensor1', 'Temperatura', 'meta', 'keys1')");
    */

    // Query data from the table
    db.each("SELECT id, name FROM Foo", function(err, row) {
        console.log(row.id + ": " + row.name);
    });
    //Example (print Tables) (GET)
    /*  db.each("SELECT * FROM Location", function(err, row) {
        rows.forEach(function(row) {
            console.log(row.company_id + "," + row.location_name + "," + row.location_country + "," + row.location_city + "," +
                row.location_meta);
        });
    });

    db.each("SELECT * FROM Sensor", function(err, row) {
        rows.forEach(function(row) {
            console.log(row.location_id + "," + row.sensor_id + "," + row.sensor_name + "," + row.sensor_category + "," +
                row.sensor_meta + "," + row.sensor_api_key);
        });
    });
*/


});



db.close();
