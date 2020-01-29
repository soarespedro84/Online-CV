
//Go to TOP
topbutton = document.getElementById("upBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    topbutton.style.display = "block"; 
  } else {
    topbutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Chrome, Firefox, IE, Opera
}

//Next Section
function downFunction(elem){
var dest=document.getElementById(elem);
dest.scrollIntoView();
}
                
// Hover
function hoverEffect(x){
    x.style.transform = "scale(1.05)";
    x.style.transition = "0.5s";
    x.style.overflow = "hidden";
    x.style.cursor = "pointer";
}
function hoverOut(x){
  x.style.transform = "scale(1)";
  x.style.transition = "0.5s";
  x.style.overflow = "hidden";
  x.style.cursor = "pointer";
}

// Janela Modal
function getModal(info) { 
  var modal = document.getElementById(info);
  modal.style.display = "block";
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

// PieChart
$('#hardskills').mouseover(function moveBar(){
  $('.chart').easyPieChart({
    size:150,
    barColor:"#17d3e6",
    scaleColor: false,
    lineWidth: 35,
    trackColor: "#ffffff59",
    lineCap:"circle",
    animate: 5000
  });
});


//Progress Bar

function moveProgress(max, el) {
  var i = 0;
  if (i == 0) {
    i = 1;
    var elem = document.getElementById(el);
    var width = 1;
    var id = setInterval(frame, 30);
    function frame() {
      if (width >= max) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";

      }
    }
  }
};

$('#softskills').one('mouseover', function moveSoftSkills(){
  moveProgress(90, 'myBarTeamwork');
  moveProgress(100, 'myBarMotivation');
  moveProgress(90, 'myBarCooperation');
  moveProgress(85, 'myBarAdapt');
  moveProgress(85, 'myBarEmpathy');
  moveProgress(80, 'myBarConfidence');
  moveProgress(85, 'myBarLearning');
  });

$('#languageskills').one('mouseover', function moveLangSkills(){
  moveProgress(100, 'myBarPT');
  moveProgress(85, 'myBarEN');
  moveProgress(60, 'myBarFR');
  moveProgress(65, 'myBarES');
  moveProgress(10, 'myBarDE');
  moveProgress(20, 'myBarIT');
  });


//Change button color
function changeColor(el, cor){
  document.getElementById(el).style.backgroundColor = cor;
}

//Nav Menu
$(document).ready(function(){
  $("#menu").click(function(){
    $("nav.nav_closed").toggleClass("nav_open");
  });
  $("nav ul li a").click(function(){
    $("nav.nav_open").removeClass("nav_open");      
  })
});