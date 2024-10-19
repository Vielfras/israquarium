// server.js 

// --------------=====================  DEPENDENCIES  =====================--------------
// 1st Party
const path = require('path');

// 3rd Party - Base
require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan');
const express = require('express');

// 3rd Party - Extra
const chalk = require('chalk');

// Mine
const connectDB = require('./config/db');
const { logToFile, setupDevelopmentLogging } = require('./controllers/loggingControllers');
const {isValidIP, isValidPort} = require('./utils/environmentValidation');


// --------------=====================  INIT  =====================--------------
const SERVER_MODE = process.env.NODE_ENV;
const { IP, PORT, LOG_FILE_PATH } = process.env;
if (isValidIP(IP) == false || isValidPort(PORT) == false) {
  process.exit(1);
}

const accessLogStream = logToFile(path.join(__dirname, LOG_FILE_PATH));

const app = express();

// const corsOptions = {
//   origin: 'https://new.israquarium.co.il',
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'x-auth-token'], 
//   credentials: true, 
// };

const allowedOrigins = ['https://new.israquarium.co.il', 'https://www.israquarium.co.il'];
const corsOptions = {
  origin: function (origin, callback) {
    console.log('Incoming Origin:', origin);
    if (!origin) {
      // Allow requests without origin (e.g., mobile apps, curl)
      callback(null, true);
    } else if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.error('Blocked by CORS:', origin);
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'x-auth-token', 'Authorization', 'Accept', 'Origin', 'X-Requested-With'],
  credentials: true,
};

// --------------=====================  MIDDLEWARE  =====================--------------

app.use(morgan('combined', { stream: accessLogStream }));
app.use(express.json());

if (SERVER_MODE === 'prod') {
  app.use(cors(corsOptions));
}
else if (SERVER_MODE === 'dev') {
  app.use(cors());
  setupDevelopmentLogging(app);
}

app.use(express.static('static'));
app.use(express.static('public'));


// --------------=====================  ROUTES  =====================--------------
app.use('/api/users', require('./routes/usersRoutes'));
app.use('/api/fish', require('./routes/fishRoutes'));
app.use('/api/fishIndex', require('./routes/fishIndexRoutes'));
app.use('/api/plant', require('./routes/plantRoutes'));
app.use('/api/businessCard', require('./routes/businessCardRoutes'));


// --------------=====================  RUN SERVER  =====================--------------
connectDB().then(() => {
  app.listen(PORT, IP, () => {
    console.log(chalk.bold.bgGreenBright(`Server is listening for requests on http://${IP}:${PORT}`));
  });
}).catch((error) => {
  console.error(chalk.bold.bgRedBright(`Failed to connect to the database: ${error.message}`));
});
