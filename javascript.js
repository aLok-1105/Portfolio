console.log("jello");

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navcontainer") {
      x.className += " responsive";
    //   x.style.display='none';
    } else {
      x.className = "navcontainer";
    }
  }