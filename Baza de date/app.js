const {getEnvVariables} = require('./utils/env')

// getEnvVariables((settings)=>{

    const express = require('express');
    const app = express();
    const {MongoClient} = require('mongodb');
    const {envGet} = require('./utils/env')
    const {serverSettings} = require('./server/settings');

    console.log(envGet('DB_CONNECTION_URI'))

    app.get('/',(req, res,next)=>{
            // Connect to the db
           MongoClient.connect(envGet('DB_CONNECTION_URI'))
           .then((client,er)=>{
               if(er){
                   console.log('Err');
                   res.send('Error')
               }
    
                   console.log('Connected');
                   return client.db();
               
           }).then((database)=>{
               return database.collection('colectie');
           }).then((collection)=>{
    
               //calcule
               collection.insertOne({altceva: 'altceva dsad'});
               res.send('Inserted')
           })
    
        })
    
    app.listen(envGet('PORT'))

// })

// comment
