// seed.js

/*
============================================
============================================
            **** WARNING ****
  RUNNING THIS SCRIPT WILL DELETE AND\OR
  OVERWRITE YOUR ISRAQUARIUM DATABASE !!!!!!!
============================================
============================================
*/

// 3rd party
const chalk = require('chalk');

// 1st Party
const connectDB = require('./config/db');
const { users } = require('./data/user_data');
const { fish } = require('./data/fish_data');
const { plants } = require('./data/plant_data');
const { fishIndex } = require('./data/fish_index_data');

const User = require('./models/User');
const Plant = require('./models/Plant');
const Fish = require('./models/Fish');
const FishIndex = require('./models/FishIndex');

const Benchmark = require('./utils/benchmarking');


const seedFish = async () => {
  const insertedFish = await Fish.insertMany(fish);
  console.log(chalk.blue(`\t- Inserted ${insertedFish.length} fish.`));
};

const seedFishIndex = async () => {
  const insertedFishIndex = await FishIndex.insertMany(fishIndex);
  console.log(chalk.blue(`\t- Inserted ${insertedFishIndex.length} indexes.`));
};

const seedPlants = async () => {
  const insertedPlants = await Plant.insertMany(plants);
  console.log(chalk.blue(`\t- Inserted ${insertedPlants.length} plants.`));
};

const seedUsers = async () => {
  const insertedUsers = await User.insertMany(users);
  console.log(chalk.blue(`\t- Inserted ${insertedUsers.length} users.`));
};

const clearDatabase = async () => {
  await FishIndex.deleteMany();
  await Fish.deleteMany();
  await Plant.deleteMany();
  await User.deleteMany();
};


const seedAll = async () => {
  try {
    await Benchmark(clearDatabase, chalk.bold.yellow('\nClearing the database:'), "Reset");
    await Benchmark(seedFishIndex, chalk.bold.yellow('\nSeeding Fish Index:'));
    await Benchmark(seedFish, chalk.bold.yellow('\nSeeding Fish:'));
    await Benchmark(seedPlants, chalk.bold.yellow('\nSeeding Plants:'));
    await Benchmark(seedUsers, chalk.bold.yellow('\nSeeding Users:'));

    console.log(chalk.bold.underline.green('\nSeeding completed successfully\n'));
  } catch (e) {
    console.log(chalk.red('[Error] Seeding error'));
    console.log(chalk.red(e.message));
    process.exit(1);
  }
};


connectDB().then(async () => {
  await Benchmark(seedAll, chalk.bold.bgGreenBright("\n ----------==========  SEEDING DATABASE  ==========----------"));
  process.exit(0);
});
