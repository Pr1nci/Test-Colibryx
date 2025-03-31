// JavaScript per gestire la risposta dell'API e mostrare le coordinate sulla mappa
$(document).ready(function() {
    $('#loginForm').submit(function(event) {
        event.preventDefault();

        var username = $('#username').val();
        var password = $('#password').val();

        $.ajax({
            type: 'POST',
            url: 'https://cadena.services.colibryx.com/fastify/api/testApi',
            data: {
                username: username,
                password: password
            },
            success: function(response) {
                var coordinates = response.data.coordinates;
                var latitude = coordinates[0];
                var longitude = coordinates[1];

                var map = new google.maps.Map(document.getElementById('map'), {
                    center: {lat: latitude, lng: longitude},
                    zoom: 15
                });

                var marker = new google.maps.Marker({
                    position: {lat: latitude, lng: longitude},
                    map: map
                });
            },
            error: function(error) {
                console.log(error);
            }
        });
    });
});