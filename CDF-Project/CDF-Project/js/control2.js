var globalcheck;
window.addEventListener('load', function(){
var textInput= this.document.getElementById('input');
textInput.focus();

},false);
function show(name){
  
    var $inser2 = $('#nas');

    var $inser = $('#bla');
    $inser.text( name);
 $inser2.attr('class','container_12  clearfix');
}

$(document).ready(function(){






    var $bottone=$('#bottone');
    var $contenuto=$('#ne');
   
    var input=document.getElementById('input');
  
   $par=$('#mancanti');
  $bottone.on('click', function() {
    var vero=$par.attr("class");
if(vero[0]=="t"){
  $contenuto.animate({

  opacity:0.0,
  paddingRight:'+=90'



  },500, function(){
      
var value=input.value;
    $contenuto.hide();
    show(value);

  });
}else{

alert("Hey rispetta le regole di inserimento dei caratteri");


}
  });
  
  });
  
  
  