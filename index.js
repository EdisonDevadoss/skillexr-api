const fastify = require('fastify')({
  logger: true
});

const cors = require('fastify-cors');
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 3000;

fastify.register(cors, {
  origin: '*',
  methods: 'OPTION, GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  allowedHeaders: ['Authorization', 'Content-Type'],
  exposedHeaders: ['Authorization', 'Content-Type'],
  optionsSuccessStatus: 204
});

fastify.get('/', async (req, res) => {
  res.send({ hello: 'world' });
});

const start = async () => {
  try {
    await fastify.listen(PORT, '0.0.0.0');
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  }
  catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
