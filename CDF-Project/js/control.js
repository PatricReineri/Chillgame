
var  carta=false;
var sasso=false;
var forbice=false;

var nomeGiocatore="Tu";
  var done=false;
   var vittoriebot=0;
		 var vittorieplayer=0;
     var pc;
   var human;
   var uw=false;
   var draw=false;
  
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
      var  $elements= $('img');
      var $mattina=$('#am');
      var $pomeriggio=$('#pm');
      $mattina.hide();
      $pomeriggio.hide();
      $content.hide();
     $elements.hide();
      $inser.text(name);
   $inser2.attr('class','container_12  clearfix');
   
   $content.fadeIn(700);
  



  
   $content.animate({
  
   
      top:'22%'
   
  
  
  
    },500,function(){
      $elements.each(function(index){
        $(this).delay(700*index).show(600);
 
     });
     $mattina.fadeIn(1400);
     $pomeriggio.fadeIn(1400);
    });

  


  }

  

  $(document).ready(function(){
  

    var $exit=$('#esci');
    $exit.on('click', function(){
    
      location.reload(true);
    
    
    
    });
























    var $conferma=$('#pm');
    $conferma.one('click', function(e){
     
  

      if(!done){
        var $contenf= $('#am');
         alert("Seleziona Carta, Sasso o Forbice per continuare");
        $contenf.find('h3').text('ATTENZIONE DEVI SCEGLIERE');
       clickm();
       
      }else{
        var $inser2 = $('#nas');
     
        $inser2.animate({

          opacity:0.0,
          paddingRight:'+=90'
          
        
        
          },500, function(){
              
      
            $inser2.hide();
          
            play();
           
          });
      
      }
 
 
 
 
    })


 function select(){
  $mossa1=$('#mossa1');
  $mossa2=$('#mossa2');
if(draw){
  $mossa1.attr('class','draw');
  $mossa2.attr('class','draw');

 }else 

 if(uw){
  
  $mossa1.attr('class','win');
  $mossa2.attr('class','lose');




 }else{
  
  $mossa1.attr('class','lose');
  $mossa2.attr('class','win');





 }
}


 function challenge(){
  var pccarta=false;
 var  pcsasso=false;
  var pcforbice=false;
var sceltapc=Math.round(Math.random()*3)+1;



  switch(sceltapc){
     
    case 3:
    pccarta=true;
    pc="Carta";
  
    break;
    
    case 1: 
    pcsasso=true;
    pc="Sasso";
   
    break;
    case 2:
    pcforbice=true;
   pc="Forbice";
    
    break;
    
  }
        
      if(pccarta&&carta || pcsasso&&sasso || pcforbice&&forbice){
       
        vittoriebot++;
        vittorieplayer++;
        draw=true;
      
       return "Un bel pareggio nel chill";
       
     }else{
       
       if(pccarta&&sasso || pcsasso&&forbice || pcforbice&&carta){
         
        vittoriebot++;
        
       uw=false;
      draw=false;
         return   "AH-AH ho vinto io!";
         
       }else
        if(carta&&pcsasso || sasso&&pcforbice || forbice&&pccarta){
          
          vittorieplayer++;
          
          uw=true;
        draw=false;
          return "Bravo, hai vinto!";
          }
         
       }
       
      }



   



   



function clickm(){
 //  -----------------------------------------------------------------------------

 $conferma.one('click', function(e){
     
  

  if(!done){
    var $contenf= $('#am');
     alert("Seleziona Carta, Sasso o Forbice per continuare");
    $contenf.find('h3').text('ATTENZIONE DEVI SCEGLIERE');
   clickm();
   
  }else{
    var $inser2 = $('#nas');
    var $last=$('#last');
    $inser2.animate({

      opacity:0.0,
      paddingRight:'+=90'
      
    
    
      },500, function(){
          
  
        $inser2.hide();
        $last.animate({

          opacity:1.0,
          paddingRight:'-=90'
    
    
        },500,function(){
    
          $last.attr('class','container_12  clearfix');
    
    
    
         });
        play();
       
      });
  
  }




})


 //-------------------------------------------------------------------------------
}


    function play(){
     
      var sfida=challenge();
      var $inser2 = $('#nas');
     var $last=$('#last');
    var $punteggio=$('#pointi1');
    var $pun=$('#pointi');
    var $nom=$('#user');
    var $main=$('#who');
    var $still=$('#cont');
    var $content=$('#box');
    var $inser = $('#bla');
    var $img=$('img');
    var $contenf= $('#am');
    var $mossa1=$('#mossa1');
    var $mossa2=$('#mossa2');
  
    $main.text(sfida);
  
    $nom.text(nomeGiocatore);
    $punteggio.text(vittorieplayer);
    $pun.text(vittoriebot);
    $last.attr('class','container_12  clearfix');

    select();
    $mossa1.text(human);
    $mossa2.text(pc);
    
  
    $still.one('click', function(){
      $contenf.find('h3').text('ATTENZIONE DEVI SCEGLIERE!');
     draw=false;
      done=false;
      carta=false;
      sasso=false;
      forbice=false;
      $last.animate({

        opacity:0.0,
        paddingRight:'+=90'


      },500,function(){

        $last.attr('class','container_12  clear');



       });
     







      $inser.text(nomeGiocatore+", stavolta mi batti?");
      $img.filter(':first').attr('class', 'grid_4 one');
      $img.filter(':nth-child(2n)').attr('class', 'grid_4 two');
      $img.filter(':last').attr('class', 'grid_4 three');
      $inser2.animate({
    
        opacity:1,
        paddingRight:'-=90'
        
      
      
        },500, function(){
            
      $inser2.show();
      
     
      $content.fadeIn(700);






  clickm();
        })
    
    
    
    })
    

 
  
    }
  
  
  
  
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
  nomeGiocatore=value;
      $contenuto.hide();
      show(value);
     
    });
  }else{
  
  alert("Hey rispetta le regole di inserimento dei caratteri");
  
  
  }
    });
    
  
    
    
//-------------------------------------------------------------------------
function change(i){
  var $contenf= $('#am');
  

  switch(i){
    
    case 0:
          carta=true;
          sasso=false;
          forbice=false;
          human="Carta";
          
          $contenf.find('h3').text('Hai scelto Carta!');
 
         







              



    break;
    
     case 1: 

     carta=false;
     sasso=true;
     forbice=false;
      human="Sasso";
   
     $contenf.find('h3').text('Hai scelto Sasso!');
     break;
  
      case 2:
        carta=false;
        sasso=false;
        forbice=true;

       human="Forbice";
        $contenf.find('h3').text('Hai scelto Forbice!');
      break;




       }
}










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
           done=true;
            $(this).attr('class', 'grid_4 choose');
            change(index);
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








     
  
    
   
      
    
 




    });


  

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

