const { connect, model, Schema, connection } = require('mongoose');

const env = {
    USER: process.env.USER_DB,
    PWD: process.env.PWD_DB,
    CLUSTER: process.env.CLUSTER_DB,
    DB: process.env.NAME_DB,
};

async function main() {
    try {
        // conectando ao banco de dados MongoDb Atlas
        await connect(`mongodb+srv://${env.USER}:${env.PWD}@${env.CLUSTER}/${env.DB}`);
        console.log('db is connected');

        // testando evento de conexão
        connection.on('error', err => {
            console.error(err);
        });

    } catch (err) {
        console.error(err);
    }
}

main();

module.exports = { model, Schema };