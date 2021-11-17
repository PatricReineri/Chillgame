

  
  /* LONGER VERSION WITH IE8 (and lower) compatibility
  
  if (el.addEventListener) {
    el.addEventListener('focus', tipUsername, false);
    el.addEventListener('blur', checkUsername, false);
  } else {
    el.attachEvent('onfocus', tipUsername);
    el.attachEvent('onblur', checkUsername);
  }
  
  */

  var globalcheck=1;
  window.addEventListener('load', function(){
  var textInput= this.document.getElementById('input');
  textInput.focus();
  
  },false);
  function show(name){
    var $content=$('#box');
      var $inser2 = $('#nas');
      var $der = $('#bodue');
      var $inser = $('#bla');
      $content.hide();
      $der.hide();
      $inser.text(name);
   $inser2.attr('class','container_12  clearfix');
   
   $content.fadeIn(700);
  



  
   $content.animate({
  
   
      top:'22%'
   
  
  
  
    },500);

    $der.fadeIn(3900);


  }

  

  $(document).ready(function(){
  
  
  
  
  
  
      var $bottone=$('#bottone');
      var $contenuto=$('#ne');
     
      var input=document.getElementById('input');
    
     $par=$('#mancanti');
    $bottone.on('click', function() {
     
  if(globalcheck==1){
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
    
    
//-------------------------------------------------------------------------
  function giasai(i){
        switch(i){

     case 0:
           
     return "grid_4 one" ;
     
      case 1: 
      return "grid_4 two" ;
   
       case 2:

       return "grid_4 three";




        }


  }
var  $elements= $('img');


$elements.on('click', function(e){

 var  testi=e.target.className;
     $elements.each(function(index){
       
          if(this.className==testi){
            $(this).attr('class', 'grid_4 choose');
         
         }else{
        
       
         $(this).attr('class', giasai(index));
         }


});
});




//------------------------------------------------------------------------


function tellnumber(testo){
    var checkdisplay1=document.getElementById('mancanti');
    if(testo.length<=10){
   var number=10-testo.length;
   checkdisplay1.className='normal grid_8';
   checkdisplay1.innerHTML='<i class="fas fa-arrow-alt-circle-right" style="font-size:26px"></i>'+' Puoi ancora inserire '+' ' +number+ ' '+'caratteri';
}else{
  checkdisplay1.className='false grid_8';
  checkdisplay1.innerHTML='<i color="red" class="fas fa-exclamation-triangle"></i>'+' Stop, limite superato!';
    
}

}
  
    function check2(testo){
        return ( (testo.length!=0==true) & testo.length<=10);
    }
    
    function check(testo){
        var controllo=true;
       for (var i=0; i<testo.length;i++){
        if(testo.charAt(i)=='/' | testo.charAt(i)=='%' | testo.charAt(i)=='<' | testo.charAt(i)=='>' | testo.charAt(i)=='@' |testo.charAt(i)=='&' |testo.charAt(i)=='|'|testo.charAt(i)=='#' |testo.charAt(i)=='-'|testo.charAt(i)=='+'|testo.charAt(i)=='?'||testo.charAt(i)==':'|testo.charAt(i)=='='|testo.charAt(i)=='.' | testo.charAt(0)==' '){
       return false;
        }
        
       
    }
    return controllo & check2(testo);
    }



    var input=document.getElementById('input');
    input.addEventListener('focus', function(){
      var checkdisplay1=document.getElementById('mancanti');
      var text1=input.value;
      checkdisplay1.className='advise grid_8';
      checkdisplay1.textContent='Ricorda, massimo 10 caratteri, no caratteri speciali';
  
   },false);


    input.addEventListener('input', function(){

    var text1=input.value;
  tellnumber(text1);

 },false);
    input.addEventListener('blur', function(){
    
    var  text=input.value;
    var checkdisplay=document.getElementById('mancanti');
    if(check(text)){

      checkdisplay.className='true grid_8';
      globalcheck=1;
    checkdisplay.innerHTML='<i color="green" class="fa fa-check" style="font-size:26px"></i>'+ ' Tutto ok, iniziamo!';
    }else 
     if(text.length>10 ){
      globalcheck=0;
        var n=((text.length)-10);
        checkdisplay.className='false grid_8';
        checkdisplay.innerHTML='<i color="red" class="fas fa-exclamation-triangle"></i> Devi togliere '+' ' +n+ ' '+'caratteri per arrivare a 10';
      
     }else 
     if(text.length==0){
      globalcheck=0;
      checkdisplay.className='false grid_8';
      checkdisplay.innerHTML='<i color="red" class="fas fa-exclamation-triangle"></i> Devi inserire almeno qualche carattere';
     }else
     
     {
      globalcheck=0;
        checkdisplay.className='false grid_8';
        checkdisplay.innerHTML='<i color="red" class="fas fa-exclamation-triangle"></i> Attenzione! Caratteri non ammessi';
    
     }
     
     
    
    
    
    
    },false);
    
 
    var button1=document.getElementById('bottone');
    button1.addEventListener('resize',function(){

      var elemento=document.getElementById('ne');
      elemento.className='container_4 clearfix';
    
     },false);








     
  
    
   
      
    
 






/*$input.on('blur', function(e){
var text=$input.val();
if(check1(text) && check2(text)){
  $('#mancanti').text("Tutto ok, iniziamo!");

}else
 if(text.length()-10<=0){
    $('#mancanti').text("Attenziòn! Caratteri non ammessi");

 }else{
   var n=((text.length)-10);
    $('#mancanti').text("Devi togliere"+n+ "caratteri");

 }

})


**/

