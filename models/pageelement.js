'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const PageElement = sequelize.define('PageElement', {
    page_id: { type: DataTypes.INTEGER, allowNull: false },
    component_variant_id: { type: DataTypes.INTEGER, allowNull: false },
    uid: { type: DataTypes.STRING, allowNull: false },
    position: { type: DataTypes.INTEGER, defaultValue: 0 },
    props: { type: DataTypes.JSONB, defaultValue: {} },
    visible: { type: DataTypes.BOOLEAN, defaultValue: true }
  }, {})
  PageElement.associate = function(models) {
    PageElement.belongsTo(models.Page, { foreignKey: 'page_id', as: 'page' })
    PageElement.belongsTo(models.ComponentVariant, { foreignKey: 'component_variant_id', as: 'variant' })
  }
  return PageElement
}