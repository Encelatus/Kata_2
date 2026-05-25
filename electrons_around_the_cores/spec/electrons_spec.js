describe('Electrons around the cores', function() {
  beforeEach(function() {
    game = new ElectronsGame();
  });

  it('should return 0 for an empty array', function() {
    expect(game.count([])).toEqual(0);
  });
});