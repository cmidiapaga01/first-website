//alert("Teo is the next milionare!")


//{mode: 'no-cors'}
fetch('https://www.geoplugin.net/json.gp').then((response) => {
return response.json()
    
  }).then(data => {
    console.log(data)
document.getElementById('ip').innerText = data.geoplugin_request
  })
