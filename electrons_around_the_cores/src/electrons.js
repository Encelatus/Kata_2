function ElectronsGame() {}
ElectronsGame.prototype.count = function(dice) {
  for ( let i = 0; i < dice.length; i++) {
    if (dice[i] === 3) {
      return 2;
    }
    if (dice[i] === 5) {
      return 4;
    }
  }
  return 0;
};