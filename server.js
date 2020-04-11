const express = require( 'express' );
const orm = require( './db/orm.js' );
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;
const app = express();
app.use(bodyParser.json());
app.use( express.urlencoded({ extended: false }) );
app.use( express.static('client/build/') );

app.post('/api/saveBooks',  async function ( req, res ){
        console.log(`[Object received to be saved in mongo DB]`,req.body);
        const mongoResponse = await orm.saveBook(req.body);
        console.log( mongoResponse );
        res.send ( mongoResponse)
    });
app.get('/api/getBooks',async function( req,res ){
    const mongoResponse = await orm.getBook(req.body);
     res.send(mongoResponse);
 });
 app.delete( `/api/Books/:title`, async function( req, res ){
     console.log(req.params.title);
    const book = await orm.removeBook(req.params.title);
    console.log( `[Job done]` );
} );
app.listen( PORT, function(){
    console.log( `[Google Books server] RUNNING, http://localhost:${PORT}` );
 });