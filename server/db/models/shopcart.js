'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ShopCart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Drug,User}) {
      this.belongsTo(Drug,{foreignKey: 'drugId'})
      this.belongsTo(User,{foreignKey: 'userId'})
    }
  }
  ShopCart.init({
    userId: DataTypes.INTEGER,
    drugsId: DataTypes.INTEGER,
    itemsCount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ShopCart',
  });
  return ShopCart;
};