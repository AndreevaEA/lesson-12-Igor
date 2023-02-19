const http = require('http');

// Формируем запрос
const options = {
  hostname: 'jsonplaceholder.typicode.com',
  path:'/post',
  methot:'GET'
};


//Отправляем запрос

const req = http.request(options,(res)=>{
  let data=''

  res.on('data',(chunk)=> {
    data+=chunk;
  });

  //Завершаем запрос

  res.on('end',()=> {
    console.log('Body:', JCON.parse(data))
  })

  .on('error',(err)=> {
    console.log('Error:',err)
  }).end();
  
});


//const host = 'localhost';

// or port 3000
//const port = '8000';

//http://locaihost:8000

//const requestListener =  function (req, res){
  //res.writeHead(200);
  //res.end("Hello server working well!");
//};

//const server = http.createServer(requestListener);
//server.listen(port, host, ()=> {
//concole.log(`Сервер запущен на http://s{host}:s{port}`)
//});

/*const obj = {
  b: '1',
  c: '2',
  id: 1,
  firstName:'Иван',
  lastName:'Иванов'
}

concole.log(obj.firstName, obj.lastName);*/

