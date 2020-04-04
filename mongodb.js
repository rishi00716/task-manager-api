//CRUD
//----------------------------------------------------------------------------------

//CONNECT AND CREATE

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID  = mongodb.ObjectID

//Above code Destructured to:
const { MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id)
//console.log(id.getTimestamp())

MongoClient.connect(connectionURL, {useNewUrlParser:true}, (error,client) => {
    if(error){
        return console.log('Unable to connect..')
    }
    
    const db = client.db(databaseName)
 //-------------------------CREATE/INSERT---------------------------------------------   
    // db.collection('users').insertOne({
    //     name:'Case',
    //     age: 20
    // }, (error,result) => {
    //     if(error){
    //         return console.log('Uable to insert')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name:'Hunter',
    //         age: 21
    //     },
    //     {
    //         name:'Gypsy',
    //         age:20
    //     }
    // ], (error,result)=>{
    //     if(error){
    //         return console.log('Unable to insert..')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description:'Wash hands',
    //         completed:true
    //     },
    //     {
    //         description:'Have food',
    //         completed:true
    //     },
    //     {
    //         description:'clean hands',
    //         completed:false
    //     }
    // ], (error,result) => {
    //     if(error){
    //         return console.log('Not inserted...')
    //     }

    //     console.log(result.ops)
    // })

    //----------------------------READ-------------------------------

    // db.collection('users').findOne({name:'Hunter'}, (error,user) => {
    //     if(error){
    //         return console.log('Unable to fetch..')
    //     }

    //     console.log(user)
    // })

    //---------------------------UPDATE------------------------------------

    //--Promises--

    // db.collection('users').updateOne({
    //     _id:new ObjectID("5e7d10403c0fab1dc4d3945e")
    // },{
    //     $set:{name:'Mike'}
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    //----------------DELETE-----------------
    db.collection('users').deleteMany({
        age:20
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})