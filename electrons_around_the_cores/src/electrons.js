function ElectronsGame() {}
ElectronsGame.prototype.count = function(dice) {
  let totalElectrons = 0;
  for ( let i = 0; i < dice.length; i++) {
    if (dice[i] === 3) {
      totalElectrons += 2;
    }
    if (dice[i] === 5) {
      totalElectrons += 4;
    }
  }
  return totalElectrons;
};