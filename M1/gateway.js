const Gateway = require('micromq/gateway');
const reg = new RegExp("/*/");

// // создаем экземпляр класса Gateway
const app = new Gateway({
    // названия микросервисов, к которым мы будем обращаться
    microservices: ['M2'],
    // настройки rabbitmq
    rabbit: {
      // ссылка для подключения к rabbitmq
      url: process.env.RABBIT_URL,
    },
  });

  // принимаем GET /
  app.get(reg, async (req, res) => {
    // делегируем запрос в микросервис users
    console.log('getted: ', req.method, req.url);
    await res.delegate('M2');
  });

  
  console.log('port M1 =', process.env.M1_PORT);
  // начинаем слушать порт
  app.listen(process.env.M1_PORT);
