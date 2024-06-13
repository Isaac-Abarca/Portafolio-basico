function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


function openModal(src) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("img01");

  modal.style.display = "block";
  modalImg.src = src;

  var span = document.getElementsByClassName("close")[0];

  span.onclick = function() {
      modal.style.display = "none";
  }

  modal.onclick = function() {
      modal.style.display = "none";
  }
}
