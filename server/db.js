import mysql from 'mysql2/promise';

const dbOptions = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: '50gr_turizmas',

};


export let connection = null;


try {
    connection = await mysql.createConnection(dbOptions);

} catch (error) {
    console.log('Nepavyko prisijungti prie DB programos');
    

}


setInterval(async () => {

    if (connection?.connection?._fatalError !== null){
        

        try {
            connection = await mysql.createConnection(dbOptions);
        
        } catch (error) {
            console.log('Nepavyko prisijungti prie DB programos');
            
        
        }
        

    } else {
        console.log('conn: ok');
        
    }

}, 100000);



