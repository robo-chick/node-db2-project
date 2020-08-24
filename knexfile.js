module.exports = {
    // our DBMS driver
    client: 'sqlite3',
   // a flag that's required for SQLite
    useNullAsDefault: true, 
   // the location of our db
    connection: {
      filename: "./data/car-dealer.db3"
    }
  }
