import swaggerAutogen from 'swagger-autogen';
const outputFile = './swagger.json';
const endpointsFiles = ['./src/app.ts'];

const doc = {
  info: {
    title: 'API Documentation',
    description: 'This is the API documentation for our application.',
  },
  host: 'localhost:3000',
  schemes: ['http'],
};

swaggerAutogen()(outputFile, endpointsFiles, doc);