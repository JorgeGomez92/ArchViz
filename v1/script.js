var panorama1, panorama2, panorama3, viewer, container, infospot1;

var bar = document.querySelector( '#bar' );




function onProgressUpdate ( event ) {
  var percentage = event.progress.loaded/ event.progress.total * 100;
  bar.style.width = percentage + "%";
  if (percentage >= 100){
    bar.classList.add( 'hide' );
    setTimeout(function(){
      bar.style.width = 0;
    }, 1000);
  }
}

container = document.querySelector( '#container' );

panorama1 = new PANOLENS.ImagePanorama( './op1.png' );
panorama1.addEventListener( 'progress', onProgressUpdate );

panorama2 = new PANOLENS.ImagePanorama( './op2.png' );
panorama2.addEventListener( 'progress', onProgressUpdate );

panorama3 = new PANOLENS.ImagePanorama( './op3.png' );
panorama3.addEventListener( 'progress', onProgressUpdate );

viewer = new PANOLENS.Viewer( { container: container } );
viewer.add( panorama1, panorama2, panorama3 );

// Maunal Set Panorama
var button1 = document.querySelector( '#btn1' );
var button2 = document.querySelector( '#btn2' );
var button3 = document.querySelector( '#btn3' );

// Enter panorama when load completes
function onButtonClick( targetPanorama ) {
  bar.classList.remove( 'hide' );
  viewer.setPanorama( targetPanorama );
}

button1.addEventListener( 'click', onButtonClick.bind( this, panorama1 ) );

button2.addEventListener( 'click', onButtonClick.bind( this, panorama2 ) );

button3.addEventListener( 'click', onButtonClick.bind( this, panorama3 ) );