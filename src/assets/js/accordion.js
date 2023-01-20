// console.log('accordion');
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    let icon = this.getElementsByClassName('icon');
    console.log(icon[0]);
    console.log('scrollHeight: ', panel.scrollHeight);
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      icon[1].style.display = 'none';
      icon[0].style.display = 'block';
      console.log('close: ', panel.scrollHeight);
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      icon[0].style.display = 'none';
      icon[1].style.display = 'block';
      console.log('open: ', panel.scrollHeight);
    }
  });
}
