import mysql from "mysql2";
import express from 'express'
const app = express();
const PORT = 5000
import cors from 'cors'


app.use(cors());

    const connection = mysql.createConnection({
        host: "sql5.freesqldatabase.com",
        user: 'sql5720004',
        password: 'BcDcFHddD6',
        database: 'sql5720004',
        port: 3306,
    });

    
    connection.connect(function(err){

        if (err) throw err;
        console.log('Database Connected');
        });
        
        app.get('/products', (req, res) => {
            const data = 'SELECT * FROM products';
            connection.query(data, function (err, result){
                if (err) {
                    console.log( err)
                    return;
                }
                console.log(result)
            res.json(result);    
        });
    });

   app.listen(PORT, function(){
    console.log(`listening on http://localhost:${PORT}`)
   })

   export {connection}
