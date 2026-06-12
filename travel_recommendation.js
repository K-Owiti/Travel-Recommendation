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
  