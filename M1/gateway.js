const Gateway = require('micromq/gateway');
const reg = new RegExp("/*/");

const app = new Gateway({
    // названия микросервиса, куда будем обращаться
    microservices: ['M2'],
    // настройки rabbitmq
    rabbit: {
      // ссылка для подключения к rabbitmq
      url: process.env.RABBIT_URL,
    },
  });

  // принимаем запросы 
  //GET
  app.get(reg, async (req, res) => {
    // делегируем запрос в микросервис users
    console.log(req.method, 'request have been recieved on M1');
    await res.delegate('M2');
  });

  //HEAD
  app.head(reg, async (req, res) => {
    // делегируем запрос в микросервис users
    console.log(req.method, 'request have been recieved on M1');
    await res.delegate('M2');
  });

  //POST
  app.post(reg, async (req, res) => {
    console.log(req.method, 'request have been recieved on M1');
    await res.delegate('M2')
  })

  //DELETE
  app.delete(reg, async (req, res) => {
    console.log(req.method, 'request have been recieved on M1');
    await res.delegate('M2')
  })
  
  console.log('port M1 =', process.env.M1_PORT);
  // начинаем слушать порт
  app.listen(process.env.M1_PORT);
