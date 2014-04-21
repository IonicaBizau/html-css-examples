$(document).ready(function () {
    $.getScript('https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&callback=__initializeMap');
    window.__initializeMap = function () {
        var mapOptions = {
            center: new google.maps.LatLng(46.85, 8.385665),
            zoom: 8,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map($("#map")[0], mapOptions);
    }
});
