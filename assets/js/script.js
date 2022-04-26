$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
});

$(document).ready(function(){
    $("#menu").hide();
    $(".open").click(function(){
      $(".myMenu").toggle();
    });
  });


  function myFunction(){
     let service =  document.getElementById('myDropdown');
     service.classList.toggle("show")
  }

  window.onclick = function(event){
      if(!event.target.matches('.dropbtn')){
          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for( i = 0; i <dropdowns.length; i++){
              var openDropdown = dropdowns[i];
              if(openDropdown.classList.contains('show')){
                  openDropdown.classList.remove('show');
              }
          }
      }
    
  }
  console.log(window.onclick)