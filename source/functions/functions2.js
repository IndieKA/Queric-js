// Thanks AlexT
var setting = function(r, g, b) {
    background(r, g, b);
};
var word = function(string, x, y, xConstrain, yConstrain) {
    text(string, x, y, xConstrain, yConstrain);
};
var wordSize=function(size) {
    textSize(size); 
};
var wordAlign = function(align, yAlign) {
    if(YAlign >= 0) {
        textAlign(align, yAlign);
    } else {
        textAlign(align, align); 
    }
};
var circle = function(x, y, width, height) {
    ellipse(x, y, width, height);
};
