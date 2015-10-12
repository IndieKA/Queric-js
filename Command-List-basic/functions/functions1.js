// Gift from Aidabaida
var compare = function(value1, value2){
     return (value1!== value2? value1 > value2 ? 'greater' : 'less' : 'equal');
};
var mouseOn = function(x, y, w, h){
    return(mouseX>=x&&mouseX<=x+w&&mouseY>=y&&mouseY<=y+h ? true : false);
};
