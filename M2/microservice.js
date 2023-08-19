// импортируем класс MicroService из раннее установленного пакета micromq
const MicroMQ = require('micromq');
const reg = new RegExp("/*/");

// создаем экземпляр класса MicroService
const app = new MicroMQ({
  // название микросервиса (оно должно быть таким же, как указано в Gateway)
  name: 'M2',
  // настройки rabbitmq
  rabbit: {
    // ссылка для подключения к rabbitmq
    url: process.env.RABBIT_URL,
  },
});

// обрабатываем запрос
app.get(reg, (req, res) => {
  // отправляем json ответ
  console.log('req in MCRSRV: ', req.method, req.path);
  res.json({
    text: 'Hello world',
  });
});

// начинаем слушать очередь запросов
console.log('M2 Start');
app.start();