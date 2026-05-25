function ElectronsGame() {}
ElectronsGame.prototype.count = function(dice) {
  for ( let i = 0; i < dice.length; i++) {
    if (dice[i] === 3) {
      return 2;
    }
  }
  return 0;
};