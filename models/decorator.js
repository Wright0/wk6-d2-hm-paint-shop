const Decorator = function(){
  this.paintStock = [];
};

Decorator.prototype.addPaintCan = function(paintCan){
  this.paintStock.push(paintCan);
};

Decorator.prototype.checkStockLitres = function(){
  let litres = 0

  for (let i = 0; i < this.paintStock.length; i++) {
    litres += this.paintStock[i].litres
  }
  return litres;
};


module.exports = Decorator;
