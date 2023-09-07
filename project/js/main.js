const menuLinks = document.querySelectorAll('.menu__link#arrow-link');
const headerButton = document.querySelector('.button_blue#arrow-link_button');

menuLinks.forEach((link) => {
  link.addEventListener('click', function() {
    this.classList.toggle('active');
  });
});

if (headerButton) {
    headerButton.addEventListener('click', function(event) {
      event.preventDefault();
      this.classList.toggle('active');
    });
  }

  document.addEventListener("DOMContentLoaded", function() {
    const arrowLinkButton = document.getElementById("arrow-link_button");
    const filterMenu = document.getElementById("filter_menu");
  
    let isFilterVisible = false; // Переменная для отслеживания видимости блока
  
    arrowLinkButton.addEventListener("click", function(e) {
      e.preventDefault();
      
      // Если блок видимый, то скрываем его
      if (isFilterVisible) {
        filterMenu.style.display = "none";
        isFilterVisible = false;
      } else { // В противном случае, показываем его
        filterMenu.style.display = "block";
        isFilterVisible = true;
      }
    });
  });
  
  

  document.addEventListener("DOMContentLoaded", function() {
    const alloItems = document.querySelectorAll(".allo");
  
    alloItems.forEach(function(item) {
      item.addEventListener("click", function(e) {
        e.preventDefault();
        if (item.textContent.includes("✓")) {
          item.textContent = item.textContent.replace("✓", "");
        } else {
          item.textContent += " ✓";
        }
      });
    });
  });
  