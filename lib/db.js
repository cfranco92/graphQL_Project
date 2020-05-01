const db = require('mongoose');

db.Promise = global.Promise;

async function connect(url) {
    db.set('useCreateIndex', true);

    try {
        await db.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('[db] succesfully connected');   
    } catch (error) {
        console.error('[db] could not connect to db ', url, error);
        process.exit(1);
    }
}

module.exports = connect;
