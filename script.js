fetch('./data.json')
  .then(response => response.json())
  .then(data => {

    var jsonData = data;
    
    for(let i = 0; i < jsonData.length; i++) {
        document.getElementById(`icon_${i+1}`).setAttribute('src', jsonData[i].icon);
        document.getElementById(`score_${i+1}`).innerText = jsonData[i].score;
        document.getElementById(`category_${i+1}`).innerText = jsonData[i].category;
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
