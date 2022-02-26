const { MongoClient, ServerApiVersion } = require('mongodb')
const uri = process.env.DB_URI
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })

client.connect(err => {
    if (err) throw err
    const collection = client.db("peg-ecommerce").collection("produtos")
    
    client.close()
})

module.exports = { client, MongoClient }