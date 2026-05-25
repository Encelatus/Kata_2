describe("Electrons around the cores", function () {
  beforeEach(function () {
    game = new ElectronsGame();
  });

  it("should return 0 for an empty array", function () {
    expect(game.count([])).toEqual(0);
  });

  it("should return 0 if no 3s or 5s in array", function () {
    expect(game.count([1, 2, 4, 6])).toEqual(0);
  });

  it("should return 2 for a single 3", function () {
    expect(game.count([3])).toEqual(2);
  });
});
