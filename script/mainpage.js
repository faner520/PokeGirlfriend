var seconds=0;


window.onload = function(){
	window.setInterval(function(){
  /// call your function here
  seconds = seconds+0.5;
  if(seconds==0.5 || seconds==2.0 || seconds==4){
  	document.getElementById("logo").setAttribute("id", "logo-big");
  }
  if(seconds==1.5 || seconds==3.50|| seconds==5){
  	document.getElementById("logo-big").setAttribute("id", "logo");
  }
  if(seconds==5.5){
  	document.getElementById("logo").setAttribute("id", "logo-top");  	
  }
  if(seconds==8){
  	document.getElementById("game-chooser").style.visibility="visible";
  	document.getElementById("girlfriend-1").setAttribute("id","girlfriend-2");
  	document.getElementById("girlfriend-version-1").setAttribute("id","girlfriend-version-2");
  	document.body.style.background="url('image/background-menu.gif') no-repeat fixed";
 	document.body.style.backgroundSize="cover";
 	document.body.style.transition="all 20s ease-in";
  }
  if(seconds>=8 && seconds%2.0==0){
  	document.getElementById("girlfriend-version-1").setAttribute("id","girlfriend-version-2");
  }
  else if(seconds%2.0!=0){
  	document.getElementById("girlfriend-version-2").setAttribute("id","girlfriend-version-1");
  }



}, 500);
	document.getElementById("loader").style.opacity="0";
	document.getElementById("loader").style.display="none";
	document.getElementById("loader").style.transition= "opacity display 1s";
	document.getElementById("loader-text").style.opacity="0";
	document.getElementById("loader-text").style.display="none";
	document.getElementById("loader-text").style.transition="opacity display 1s";
	 window.onerror = function(message, url, lineNumber) {  
        // code to execute on an error  
        return true; // prevents browser error messages  
    };
   
};

