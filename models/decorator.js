const Decorator = function(){
  this.paintStock = [];
};

Decorator.prototype.addPaintCan = function(){
  this.paintStock += 1;
};

module.exports = Decorator;
