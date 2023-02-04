alert("Teo is the next milionare!")

fetch('http://gd.geobytes.com/GetCityDetails?callback=?', function(data) {
  console.log(JSON.stringify(data, null, 2));
});