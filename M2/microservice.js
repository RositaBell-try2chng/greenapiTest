const MicroMQ = require('micromq');
const reg = new RegExp("/*/");

// создаем экземпляр класса MicroService
const app = new MicroMQ({
  // название микросервиса
  name: 'M2',
  // настройки rabbitmq
  rabbit: {
    // ссылка для подключения к rabbitmq
    url: process.env.RABBIT_URL,
  },
});

// обрабатываем запросы
//GET
app.get(reg, (req, res) => {
  console.log('GET REQUEST HANDLED')
  // отправляем json ответ
  res.json({
    what: 'GET REQUEST HANDLED',
    path: req.path
  });
});

//HEAD
app.head(reg, (req, res) => {
  console.log('HEAD REQUEST HANDLED')
  // отправляем json ответ
  res.json({});
});

//POST
app.post(reg, (req, res) => {
  console.log('POST REQUEST HANDLED')
  // отправляем json ответ
  res.json({
    what: 'POST REQUEST HANDLED',
    path: req.path,
    body: req.body
  });
});

//DELETE
app.delete(reg, (req, res) => {
  console.log('DELETE REQUEST HANDLED')
  // отправляем json ответ
  res.json({
    what: 'DELETE REQUEST HANDLED',
    path: req.path
  });
});

//слушаем очередь запросов
console.log('M2 Start');
app.start();