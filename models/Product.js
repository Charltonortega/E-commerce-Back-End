const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class Product extends Model {}

Product.init(
  {
    // Define columns
    id: {
      type: DataTypes.INTEGER, // data type is a number
      allowNull: false, // cannot be null values
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING, // data type is a string (text)
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product",
  }
);

module.exports = Product;
