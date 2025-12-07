'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PageElements', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      page_id: {
        type: Sequelize.INTEGER
      },
      component_variant_id: {
        type: Sequelize.INTEGER
      },
      uid: {
        type: Sequelize.STRING
      },
      position: {
        type: Sequelize.INTEGER
      },
      props: {
        type: Sequelize.JSONB
      },
      visible: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('PageElements');
  }
};