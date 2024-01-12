//const queryString = window.location.search;
//const urlParams = new URLSearchParams(queryString);
//const file = urlParams.get('file');
//const file = '0-main.pdf'
//console.log(file);

if (typeof currentPage  === 'undefined') {
  currentPage = 1
}

var myState = {
  pdf: null,
  currentPage: 1,
  //zoom: 2.81046
  //zoom:1
}
    
pdfjsLib.getDocument(file).promise.then((pdf) => {    
  myState.pdf = pdf;
  myState.currentPage = currentPage
  console.log('pdfDocument', myState.pdf);

  render();
});

function render() {
  console.log('pdfDocument', myState.pdf);
  myState.pdf.getPage(myState.currentPage).then((page) => {

    console.log('page', page);

    var canvas = document.getElementById("pdf_renderer");
    var ctx = canvas.getContext('2d');

    // var elem = document.querySelector('body');
    var elem = document.getElementById('canvas_container')
    // console.log(elem.getBoundingClientRect().width/453.543);
    //console.log(canvas.width)
    //console.log(canvas.height)

    var ratio = Math.min(elem.getBoundingClientRect().width/453.543, elem.getBoundingClientRect().height/255) ;
    
    //var viewport = page.getViewport(ratio);
    //var viewport = page.getViewport(myState.zoom);

    const viewport = page.getViewport({
      scale: ratio,
    });

    canvas.width = viewport.width;
    canvas.height = viewport.height;

    page.render({
        canvasContext: ctx,
        viewport: viewport
    });

    // ADDED
    var vide = ((document.getElementById('body').getBoundingClientRect().height - canvas.height) * 0.5);
    //console.log(vide);
    document.getElementById('pdf_renderer').style.marginTop = vide.toString().concat("px");
    document.getElementById('pdf_renderer').style.marginBottom = vide.toString().concat("px");
  });
}

/*      document.getElementById('go_previous').addEventListener('click', (e) => {
          if(myState.pdf == null || myState.currentPage == 1) 
            return;
          myState.currentPage -= 1;
          document.getElementById("current_page").value = myState.currentPage;
          render();
      });

      document.getElementById('go_next').addEventListener('click', (e) => {
          if(myState.pdf == null || myState.currentPage > myState.pdf._pdfInfo.numPages) 
             return;
          myState.currentPage += 1;
          document.getElementById("current_page").value = myState.currentPage;
          render();
      });*/
/*
      document.getElementById('current_page').addEventListener('keypress', (e) => {
          if(myState.pdf == null) return;
        
          // Get key code
          var code = e.code
        
          // If key code matches that of the Enter key
          if(code == 13) {
              var desiredPage = 
              document.getElementById('current_page').valueAsNumber;
                                
              if(desiredPage >= 1 && desiredPage <= myState.pdf._pdfInfo.numPages) {
                  myState.currentPage = desiredPage;
                  document.getElementById("current_page").value = desiredPage;
                  render();
              }
          }
      });
*/
// Add event listener on keypress
document.addEventListener('keypress', (event) => {
  var code = event.code;

  if(myState.pdf == null || myState.currentPage > myState.pdf._pdfInfo.numPages) 
        return;

  else if(code == 'KeyN' && myState.currentPage < myState.pdf._pdfInfo.numPages){
    myState.currentPage += 1;
    render();
  }
  else if(code == 'KeyP' && myState.currentPage != 1){
    myState.currentPage -= 1;
    render();
  }
  else if (code == 'KeyF') {
      toggleFullScreen();
  }
  else{
    alert("N or --> for next; P or <-- for previous; F for fullscreen mode");
  }

}, false);



// Add event listener on keydown
document.addEventListener('keydown', (event) => {
  var code = event.code;

  if(myState.pdf == null || myState.currentPage > myState.pdf._pdfInfo.numPages) 
  return;

  else if(code == 'ArrowRight' && myState.currentPage < myState.pdf._pdfInfo.numPages){
  myState.currentPage += 1;
  render();
  }
  else if(code == 'ArrowLeft' && myState.currentPage != 1){
  myState.currentPage -= 1;
  render();
  }
  else if (code == 'KeyF') {
  toggleFullScreen();
  }

}, false);


function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
  }
}

addEventListener('resize', (event) => {
  render();
});