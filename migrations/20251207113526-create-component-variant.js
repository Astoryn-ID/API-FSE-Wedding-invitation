'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ComponentVariants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      component_id: {
        type: Sequelize.INTEGER
      },
      variant_key: {
        type: Sequelize.STRING
      },
      component_type: {
        type: Sequelize.STRING
      },
      display_name: {
        type: Sequelize.STRING
      },
      preview_url: {
        type: Sequelize.STRING
      },
      version: {
        type: Sequelize.INTEGER
      },
      meta: {
        type: Sequelize.JSONB
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ComponentVariants');
  }
};