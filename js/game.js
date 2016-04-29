var Game = function () {
  this.tiles = [];
  this.players = [];
  this.phase1Counter = 0;
  this.currentPhase = undefined;
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
      gameScope.players.push ({
        id: i,
        position: {x: undefined, y: undefined},    //based on whether its Team 1(W) / 0(B) and other factors
        status: {
          alive: true,
          occupies: false,
          tile: null
        },
        team: currentTeam
      });
      currentTeam = Number (!currentTeam);
    }
  }) ();
};

Game.prototype = {
  getTiles: function () { return (this.tiles); },
  getPlayers: function () { return (this.players); },

  selectPlayer: function (player) {
    console.log ('selecting player', this.players [player.id]);
    //first determine whether this selection is for moving or for deleting (in case a 3-liner has been formed)
    /*
      if not phase 1 AND player clicked is team 1 (white):
        select this player, return true
      else don't select player & return false

      if there was another player previously selected, return its id so we can de-select it visually (change color)
    */
    return new Promise (function (resolve, reject) {
      if (true) {
        resolve ({previouslySelectPlayer: undefined});
      }
      else {
        reject ();
      }
    });
  },
  moveSelectedPlayer: function (tile) {
    console.log ('moving to--->', tile, this.tiles [tile.id]);
    var mspFunctionScope = this;

    return new Promise (function (resolve, reject) {
      /*
        if phase 1: currently selected player is automatic, else manual
        if phase 2: check if the tile selected is valid for the selected player to move, i.e., a neighbouring tile
      */
      if (true) {
        //change player properties before sending
        with (currentlySelectedPlayer.playerObject.status) {    //change tile information
          occupies = true;
          tile = thisTile.id;
        };
        with (mspFunctionScope.tiles [tile.id].status) {      //change player information
          occupied = true,
          player = currentlySelectedPlayer.playerObject.id
        };

        resolve ({succeeded: true, currentlySelectedPlayer: undefined});   //return currently selected player
      }
      else {
        reject ();
      }
    });
  },

  phase1: function () {
    this.phase1Counter > 17 ? this.phase2 () : null;
  },
  phase2: function () {},
  phase3: function () {}
};
