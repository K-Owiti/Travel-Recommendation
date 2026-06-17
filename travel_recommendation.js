document.addEventListener("DOMContentLoaded", function() {
    // Load navbar
    fetch("./navigation_bar.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("navbar").innerHTML = data;
  
        // Attach handlers AFTER navbar is injected
        const searchBtn = document.getElementById('search_button');
        const clearBtn = document.getElementById('clear');
  
        if (searchBtn) {
          searchBtn.onclick = search;
        }
        if (clearBtn) {
          clearBtn.onclick = clear;
        }
      })
      .catch(error => console.error("Error loading navbar:", error));
  });
  
  function search() {
    let query = document.querySelector('.Search_bar input').value;
    console.log("Searching for:", query);
  }
  
  function clear() {
    document.querySelector('.Search_bar input').value = "";
    console.log("Ok cleared!");
  }
  fetch('travel_recommendation.json')
  .then(response=>response.json())
  .then(data=>{
    const container=document.getElementById('Display_suggestions');
    const formattedData=data.map(place=>{
        return `
         <div class="place_card">
         <img src="${place.imageUrl}" alt="${place.name}">
          <h3>${place.name}</h3>
          <p>${place.description}</p>
         </div>  `
    }).join('');
    container.innerHTML=formattedData;

  })
  .catch(error=>console.error("Error loading json:",error));