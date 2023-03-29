var acc = document.getElementsByClassName("card-content-detail-tab-tabpane-content-accordion-title");
var img_src = document.getElementsByClassName("accordion-open-icon");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.style.margin = "unset";
      img_src[i].src = "assets/img/plus.svg";
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.style.margin = "30px 0";
      img_src[i].src = "assets/img/minus.svg";
    } 
  });
}