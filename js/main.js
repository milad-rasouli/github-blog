function set_active() {
  var headline = document.title;
  var ele = document.getElementById(headline);
  ele.className = "active";
}

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("include");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("include");
          includeHTML();
        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
  set_active(); // set headline base on its doucument title
};
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
};

// to have code block

function sideline(enable) { 
  var pres = document.getElementsByTagName('pre'), codeText, codeLines;
  for (var pl = pres.length, p = 0; p < pl; p++) {
    if ( pres[p].children[0].tagName == 'CODE' ) {
      
      if (enable==1) { 
        codeText = pres[p].children[0].innerHTML;
        pres[p].children[0].innerHTML = codeText.split("\n").map(function(line) {
          return '<p class="code-line">' + line + '</p>';
        }).join("\n");
        console.log("enable is 1");
        
      }
        // console.log("enable is 0");
        
        // codeLines = pres[p].querySelectorAll('p.code-line');
        // for (var cl = codeLines.length, c = 0; c < cl; c++) {
        //   codeLines[c].style.width = pres[p].scrollWidth + 'px';
        // }
    }
  };
  
}
// var timer;
//listen for window resize event
// window.addEventListener('resize', function(event){
  // this.clearTimeout(timer);
  // timer = setTimeout(function() { sideline(0); }, 500);
  
  // var pr = document.getElementsByTagName('pre');
  // var elem =document.getElementsByClassName("code-line");
  // elem.style.width = pr[0].scrollWidth+"px";
// });
function content() {
  sideline(1);  
}