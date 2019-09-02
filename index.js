let navStyle=document.getElementById('sideNav');
let bodyStyle=document.getElementById('contentBody');

openBtn = () => {
  navStyle.style.width = '150px';
  bodyStyle.style.marginTop = '75px';
}

closeBtn = () => {
  navStyle.style.width = '0';
  bodyStyle.style.marginTop = '0';
}