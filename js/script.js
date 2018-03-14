 /* $(document).ready(function(){
   
   setInterval("rotateImages()",2000);
  });
     function rotateImages(){
     	var ocurphoto = $("#photoShow div.current");
     	var oNextPhoto =ocurphoto.next();
     	if (oNextPhoto.length==0)
     		oNextPhoto=("#photoShow div:first");
     		ocurphoto.removeClass('current').addClass('previous');
     		oNextPhoto.css({opacity:0.0}).addClass('current').animate({opacity:1.0},1000,
     		function(){
     			ocurphoto.removeClass('previous');
     		});			
     }*/

     /* $(document).ready(function(){
      $('.carousel').carousel();
    });*/
        

    $(document).ready(function(){
      $('.slider').slider({
      	indicators: false,
      	height: 700
      });

      /*function validate(){
      	var email = document.getElementById("email").value;
		var name = document.getElementById("name").value;
		var subject = document.getElementById("subject").value;

		if ( name == "" || subject == "" || email==""){
			alert ("fields must be filled");
	}}
	
	document.getElementById("inbox-form").onsubmit = function(e){
		e.preventDefault();
		validate();

	};*/
	    });
