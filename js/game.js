var Board = function () {};
var Tile = function (attr) {
  this.attributes = attr;   //attr = {id: .., position: [], status: {occupied: .., player: ..}, }
};
var Player = function (attr) {
  this.attributes = attr;   //attr = {id: .., position: [], status: {alive: .., occupies: .., tile: ..}, }
};
var Game = function () {};

var tiles = [], players = [];

function init () {
  for (var id = 0; id < 24; id++) {
    var tileAttr = {
      id: id,
      position: {x: undefined, y: undefined},
      status: {
        occupied: false,
        player: undefined
      },
      neighbours: {left: undefined, right: undefined, upper: undefined, lower: undefined}
    };

    tiles.push (tileAttr);
  }

  var currentTeam = 1;
  for (var i = 1; i <= 18; i++) {
    if (i === 10) { currentTeam = Number (!currentTeam); }

    players.push ({
      id: i-1,
      position: {},    //based on whether its Team 1 / 0 and other factors
      status: {
        alive: true,
        occupies: false,
        tile: null
      },
      team: currentTeam
    });
  }
};
