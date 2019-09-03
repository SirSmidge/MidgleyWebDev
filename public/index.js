let navStyle = document.getElementById('sideNav');
let bodyStyle = document.getElementById('contentBody');
let burgerStyle = document.getElementById('burger'); 

openBtn = () =>  {
  navStyle.style.width = '98vw';
  bodyStyle.style.marginTop = '15em';
  burgerStyle.style.display = 'none';
}

closeBtn = () =>  {
  navStyle.style.width = '0';
  bodyStyle.style.marginTop = '0';
  burgerStyle.style.display = 'list-item';
}