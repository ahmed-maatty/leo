const menuBtn = document.getElementById("menu");

menuBtn.addEventListener("click" , () =>{
  document.getElementById("nav_links_responsive").classList.toggle("active");
  menuBtn.classList.toggle("active");
})