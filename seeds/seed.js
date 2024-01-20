const sequelize = require('../config/connection');
const { User, Location, Game } = require('../models');

const userData = require('./userData.json');
const locationData = require('./locationData.json');
const gameData = require('./gameData.json');

const seedDatabase = async () => {
   sequelize.sync({ force: false });

  await User.bulkCreate(userData);
  await Location.bulkCreate(locationData);
  await Game.bulkCreate(gameData);

  process.exit(0);
};

seedDatabase();
