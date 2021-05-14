(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "backgammon-pass") {
     checkVersion(design, name, value);
  }
}

var clearDices = function(design, board, move) {
  for (var pos = Dagaz.Model.stringToPos("D1"); pos < design.positions.length; pos++) {
       if (board.getPiece(pos) !== null) {
           move.capturePiece(pos);
       }
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  if (_.indexOf([3, 4, 5, 6, 9, 10, 11, 12], +board.turn) >= 0) {
      _.each(board.moves, function(move) {
           if (!_.isUndefined(move.failed)) return;
           var b = board.apply(move);
           b.generate();
           if (b.moves.length == 0) {
               clearDices(design, board, move);
               if (_.indexOf([3, 4, 5, 6], +board.turn) >= 0) {
                   move.goTo(8);
               } else {
                   move.goTo(2);
               }
           }
      });
  }
  CheckInvariants(board);
}

})();
