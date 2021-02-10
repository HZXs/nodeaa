let express = require('express');

let app = express();

app.get('/example/b',(req,res)=>{
    let list = {
        name:'小明',
        age:18
    }
    res.send(list)
})

let server = app.listen(9000,()=>{
    let host = server.address().address;
    let port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port)  
})