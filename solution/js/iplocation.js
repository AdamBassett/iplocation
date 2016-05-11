// THIS IS PART OF THE BUG FIX
//var mapMarkers = [];

$(document).ready(function(){
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 1,
        center: new google.maps.LatLng(48, -99),
    });

    // Set event handler to watch for button press.
    $('#get_location').on('click', function(){
        //THIS IS PART OF THE BUG FIX.
        //Clear the last marker.
        // if(mapMarkers.length > 0)
        //    mapMarkers[0].setMap(null);

        //Get the input loaction.
        var ip = $('#ip').val();
        
        //Call ip-api for lat lon of IP
        $.getJSON("http://ip-api.com/json/"+ip, function(response){
            console.log(response);
            //Make marker
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(response.lat, response.lon),
                map: map
            });

            //THIS IS PART OF THE BUG FIX
            //Set marker so it can be removed.
            //mapMarkers.push(marker);
            
            //Move map to markers location and zoom in.
            map.setZoom(8);
            map.panTo(marker.position);
        });
    });    
});