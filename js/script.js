/* Author: cronopio 

*/

(function($){
$(document).ready(function(){
  var barajas = ['c', 'd', 'h', 's']
  , deck = [];
  for (var b in barajas) {
    for (var i=2;i<11;i++) {
      deck.push(i+barajas[b]);
    }
    var letters = ['A', 'J', 'K', 'Q'];
    for (var l in letters){
      deck.push(letters[l]+barajas[b]);
    }
  }
  var revuelto = revolver(deck);
  console.log(revuelto);
  
  $('#apostar').click(function(){
    console.log('Apostando...');
    repartidaInicial(revuelto);
  });
});
})(jQuery);

function sit(pos){
console.log('Sitting at '+pos);
$('#position'+pos).empty();
$('#apostar').removeAttr('disabled');
$('#chips').fadeIn('slow');
}

function revolver(d){
  var shoe = d;
  for (var v=0;v<shoe.length;v++){
    var rand = Math.floor(Math.random()*50)+1;
    var current = shoe[v];
    shoe[v] = shoe[rand];
    shoe[rand] = current;
  }
  return shoe; 
}

function repartidaInicial(mazo){
  var el = $('#dealer-cards');
  for (var m in mazo){
    el.append($('<div>').addClass('carta')
    .css('background', 'url(\'img/cards/small-\'+mazo[m]+\'.png\')')
    .css('margin-left', m+'px'));
  }
}



















