const PaintCan = function(litres){
  this.litres = litres
};

PaintCan.prototype.checkIfEmpty = function () {
  return (this.litres === 0)
};

PaintCan.prototype.emptyPaintCan = function () {
  this.litres = 0
};

module.exports = PaintCan;
