'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Component = sequelize.define('Component', {
    key: { type: DataTypes.STRING, allowNull: false, unique: true },
    display_name: DataTypes.STRING,
    category: DataTypes.STRING,
    schema_json: DataTypes.JSONB,
    meta: DataTypes.JSONB
  }, {})
  Component.associate = function(models) {
    Component.hasMany(models.ComponentVariant, { foreignKey: 'component_id', as: 'variants' })
  }
  return Component
}