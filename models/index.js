const User = require('./User');
const Location = require('./location');
const Game = require('./game');

Location.hasMany(Game, {
  foreignKey: 'location_id',
  onDelete: 'Restrict'
});

Game.belongsTo(Location, {
  foreignKey: 'location_id'
});

module.exports = { User, Location, Game };
