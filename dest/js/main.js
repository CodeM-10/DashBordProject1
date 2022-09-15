

$(document).ready(function(){
    
    $("#click_icon1").click(function(){
        $("#choose_lest1").toggle();
    });

    $("#click_icon2").click(function(){
        $("#choose_lest2").toggle();
    });

    $("#click_icon3").click(function(){
        $("#choose_lest3").toggle();
    });

    $("#round_icon").click(function(){
        $("#choose_lest_rate1").toggle();
    });
  


    $("#toggle").click(function(){
        $("#sidebar").show(400);
    });
    $("#close").click(function(){
        $("#sidebar").hide(400);
    });

});


// function lest_active1(){
//     const choose_lest = document.querySelector("#choose_lest1");

//     if(choose_lest.style.display === 'none'){
//         choose_lest.style.display= 'block';
//     } else{
//         choose_lest.style.display ='none';
//     }
// }
//- toggle.addEventListener('click', MyToggle());

