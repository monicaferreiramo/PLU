function myMap() {
     // Definir uma localização
     const myLocation = new google.maps.LatLng(41.161866, -8.582840)

     // Definir as propriedades do mapa

     const mapProp = {
        center: myLocation,
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID

     }

     //Definir mapa

    const map = new google.maps.Map(
        document.getElementById("googleMap"),
        mapProp)

    // Criar um marcador
    const marker = new google.maps.Marker({
        position:myLocation,
        animation:google.maps.Animation.BOUNCE
        });

    // Associar o marcador ao mapa
        marker.setMap(map);
      
}