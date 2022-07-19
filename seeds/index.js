const seedProviders = require('./provider-seeds');
const seedServices = require('./services-seeds');
// const seedCategory = require('./category-seeds');


const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedProviders();
  console.log('--------------');

  await seedServices();
  console.log('--------------');

//   await seedCategories();
//   console.log('--------------');

  process.exit(0);
};

seedAll();
