const seedProviders = require('./provider-seeds');
const seedCategory = require('./category-seeds');
const seedServices = require('./services-seeds');
const seedComment = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  
  await seedProviders();
  console.log('--------------');

  await seedCategory();
  console.log('--------------');

  await seedServices();
  console.log('--------------');

  await seedComment();
  console.log('--------------');

  process.exit(0);
};

seedAll();
