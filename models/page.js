'use strict';
const {
  Model
} = require('sequelize');
'use strict'
module.exports = (sequelize, DataTypes) => {
  const Page = sequelize.define('Page', {
    slug: { type: DataTypes.STRING, allowNull: false, unique: true },
    title: DataTypes.STRING,
    composition_json: { type: DataTypes.JSONB, allowNull: false, defaultValue: [] },
    theme_json: { type: DataTypes.JSONB, defaultValue: {} },
    is_published: { type: DataTypes.BOOLEAN, defaultValue: false },
    published_at: DataTypes.DATE
  }, {})
  Page.associate = function(models) {
    Page.hasMany(models.PageElement, { foreignKey: 'page_id', as: 'elements' })
  }
  return Page
}
