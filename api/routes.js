const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const router = express.Router();

// DB
// Connection URL
const url = 'mongodb://0.0.0.0:27017';
const dbName = 'asetDB';

router.post('/aset', (req, res, next) => {   
    const client = new MongoClient(url);
    const database = client.db(dbName);
    const asetCollection = database.collection("asets");

    const { nama } = req.body;
    const { stock } = req.body;
    async function run() {
        try{
            if(!nama || !stock){
                throw new Error('isi dengan lengkap');
            }
            const hasil = await asetCollection.insertOne(req.body).then((result => {
                console.log(result)
            }));
        } catch(error){
            next(error);
        }finally {
            await client.close();
        }
    }
    run();
    res.status(200).json('Data successfully saved');
});

router.get('/asets', (req, res) => {
    const client = new MongoClient(url);
    const database = client.db(dbName);
    const asetCollection = database.collection("asets");
    async function run() {
        try{
            const hasil = await asetCollection.find().toArray().then((result) => {
                res.status(200).json(result)
            })
        } finally {
            await client.close();
        }
    }
    run().catch(console.dir);
})

router.get('/aset/:id', (req, res) => {
    const client = new MongoClient(url);
    const database = client.db(dbName);
    const asetCollection = database.collection("asets");
    async function run() {
        try{
            const hasil = await asetCollection
                                    .findOne({ '_id': new ObjectId(req.params.id) })
                                    .then((result) => {
                                        res.status(200).json(result)
                                    })
        } finally {
            await client.close();
        }
    }
    run().catch(console.dir);
})

router.put('/aset/:id', (req, res, next) => {
    const client = new MongoClient(url);
    const database = client.db(dbName);
    const asetCollection = database.collection("asets");

    const { nama, stock } = req.body;

    async function run() {
        try{
            if(!nama || !stock){
                throw new Error('isi dengan lengkap');
            }
            const hasil = await asetCollection
                                    .updateOne(
                                        { '_id': new ObjectId(req.params.id) },
                                        { $set: { nama: req.body.nama, stock: req.body.stock }}
                                        )
                                    .then((result) => {
                                        console.log(result)
                                    })
        } catch(error){
            next(error);
        }finally {
            await client.close();
        }
    }
    run();
    res.status(200).json('Data successfully delete');
})

router.delete('/aset/:id', (req, res) => {
    const client = new MongoClient(url);
    const database = client.db(dbName);
    const asetCollection = database.collection("asets");
    async function run() {
        try{
            const hasil = await asetCollection
                                    .deleteOne({ '_id': new ObjectId(req.params.id) })
                                    .then((result) => {
                                        console.log(result)
                                    })
        } finally {
            await client.close();
        }
    }
    run().catch(console.dir);
    res.status(200).json('Data successfully delete');
})

module.exports = router;