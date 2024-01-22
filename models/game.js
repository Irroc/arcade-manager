const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Game extends Model {}

Game.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cost: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    manufacturer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type_of_cabinet: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    has_tickets: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    has_prizes: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    locations_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'location',
        key: 'id',
      },
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'games',
  }
);

module.exports = Game;
