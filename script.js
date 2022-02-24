document.getElementById("myBtn").addEventListener("click", search);


function search(){

  let audio = new Audio('audio.mp3');
  audio.play();



  let x = document.getElementById("searchIn").value
  x = x.toLowerCase()

   if(x == "covid"){
    window.location.replace("Osi jer");

    document.getElementById("searchIn").value = ''
  }

  else if(x == "vacinated"){
    window.location.replace(" Osi jer ");

    document.getElementById("searchIn").value = ''
  }

  else if(x == "home"){
      window.location.replace(" Osi jer ");

      document.getElementById("searchIn").value = ''
    }

  else if(x == "get ill"){
        window.location.replace(" Osi jer ");

        document.getElementById("searchIn").value = ''
      }

  else{
    alert("Nothing found by this query! :c")
    document.getElementById("searchIn").value = ''
  }

}





let pic = document.getElementById("pic");

pic.addEventListener("mouseenter", function( event ) {
  event.target.src = "https://live-production.wcms.abc-cdn.net.au/649edd7691e0067d07dc74c1c3ae534e?impolicy=wcms_crop_resize&cropH=1680&cropW=2983&xPos=17&yPos=0&width=862&height=485";

  setTimeout(function() {
    event.target.src = "https://frontiersinblog.files.wordpress.com/2020/03/frontiers-behavioral-neuroscience-contribution-sociocultural-factors-shaping-sickness.jpg?w=1000";
  }, 500);

}, false);

pic.addEventListener("mouseover", function( event ) {
  event.target.style.color = "https://live-production.wcms.abc-cdn.net.au/649edd7691e0067d07dc74c1c3ae534e?impolicy=wcms_crop_resize&cropH=1680&cropW=2983&xPos=17&yPos=0&width=862&height=485";

  setTimeout(function() {
    event.target.src = "https://frontiersinblog.files.wordpress.com/2020/03/frontiers-behavioral-neuroscience-contribution-sociocultural-factors-shaping-sickness.jpg?w=1000";
  }, 500);

}, false);





document.addEventListener('keypress', logKey);

function logKey(e) {
  if(e.code == "KeyZ"){
    alert("You have founded a secret key!")
  }

  if(e.code == "Enter"){
    search()
  }
}



function startLoader() {
  const loader = document.querySelector(".loader");

  setTimeout(function() {
    loader.style.right = "0";
  }, 1000);

  window.addEventListener("DOMContentLoaded", function(event) {
    setTimeout(function() {
      loader.style.left = "100%";
      document.body.classList.remove("loading");
    }, 1500);
  });
}

startLoader();
