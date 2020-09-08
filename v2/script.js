var infospot, infospot2, panorama1,  viewer;
var bar = document.querySelector( '#bar' );


container = document.querySelector( '#container' );



infospot2 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
infospot2.position.set( -5000.00, -1825.25, 197.56 );
infospot2.addHoverElement( document.getElementById( 'desc-container' ), 200 );

// Get Google Map API Key - https://developers.google.com/maps/documentation/javascript/get-api-key
panorama1 = new PANOLENS.GoogleStreetviewPanorama( 'rY5ZW6S3sFUAAAAGOzOdpg' );



panorama1.add( infospot2 );

viewer = new PANOLENS.Viewer();
viewer.add( panorama1);



