const User = require('./User');
const Location = require('./location');
const Game = require('./game');

Location.hasMany(Game, {
  foreignKey: 'locations_id',
  onDelete: 'Restrict'
});

Game.belongsTo(Location, {
  foreignKey: 'locations_id'
});

module.exports = { User, Location, Game };
