const MongoClient = require('mongodb').MongoClient;
let connection;

async function connect(url) {
    if (connection) return connection.db("db01");
    
    let client;

    try {
        client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true});
        connection = await client.connect();
        console.log('[db] succesfully connected');   
    } catch (error) {
        console.error('[db] could not connect to db ', url, error);
        process.exit(1);
    }

    return connection.db("db01");
}

module.exports = connect;