const { v4: uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Settings', [
      // Colors
      { id: uuidv4(), category: 'theme', key: '--accent', value: '#7c3aed', createdAt: new Date(), updatedAt: new Date() },
      { id: uuidv4(), category: 'theme', key: '--accent-secondary', value: '#db2777', createdAt: new Date(), updatedAt: new Date() },
      { id: uuidv4(), category: 'theme', key: '--bg-dark', value: '#030712', createdAt: new Date(), updatedAt: new Date() },
      { id: uuidv4(), category: 'theme', key: '--text-dark', value: '#94a3b8', createdAt: new Date(), updatedAt: new Date() },
      
      // Fonts
      { id: uuidv4(), category: 'font', key: '--heading', value: "'Outfit', sans-serif", createdAt: new Date(), updatedAt: new Date() },
      { id: uuidv4(), category: 'font', key: '--sans', value: "'Inter', system-ui, sans-serif", createdAt: new Date(), updatedAt: new Date() },
      
      // Feature Toggles / Extras
      { id: uuidv4(), category: 'general', key: 'site_name', value: 'Striqora Solutions', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Settings', null, {});
  }
};
