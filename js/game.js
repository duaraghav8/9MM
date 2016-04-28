var Tile = function (attr) {
  this.attributes = attr;   //attr = {id: .., position: [], status: {occupied: .., player: ..}, }
};

var Player = function (attr) {
  this.attributes = attr;   //attr = {id: .., position: [], status: {alive: .., occupies: .., tile: ..}, }
};

var Game = function () {
  this.tiles = [];
  this.players = [];
  var gameScope = this;

  (function init () {
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

      gameScope.tiles.push (tileAttr);
    }

    var currentTeam = 1;
    for (var i = 0; i < 18; i++) {
      if (i === 9) { currentTeam = Number (!currentTeam); }

      gameScope.players.push ({
        id: i % 9,
        position: {x: undefined, y: undefined},    //based on whether its Team 1 / 0 and other factors
        status: {
          alive: true,
          occupies: false,
          tile: null
        },
        team: currentTeam
      });
    }
  }) ();
};

var game = new Game ();
