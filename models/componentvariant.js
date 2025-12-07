'use strict';
const {
  Model
} = require('sequelize');
'use strict'
module.exports = (sequelize, DataTypes) => {
  const ComponentVariant = sequelize.define('ComponentVariant', {
    component_id: { type: DataTypes.INTEGER, allowNull: false },
    variant_key: { type: DataTypes.STRING, allowNull: false, unique: true },
    component_type: DataTypes.STRING,
    display_name: DataTypes.STRING,
    preview_url: DataTypes.STRING,
    version: { type: DataTypes.INTEGER, defaultValue: 1 },
    meta: DataTypes.JSONB
  }, {})
  ComponentVariant.associate = function(models) {
    ComponentVariant.belongsTo(models.Component, { foreignKey: 'component_id', as: 'component' })
  }
  return ComponentVariant
}
