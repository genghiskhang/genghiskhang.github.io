window.onscroll = scrollFunction;

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById('team-logo').style.maxHeight = '4vw';
    document.getElementById('team-logo').style.margin = '10px 0px 10px 0px';
    document.getElementById('team-name').style.fontSize = '2vw';
    document.getElementById('team-name').style.marginTop = '0px';
    document.getElementById('team-number').style.fontSize = '0vw';
  }
  else {
    document.getElementById('team-logo').style.maxHeight = '8vw';
    document.getElementById('team-logo').style.margin = '20px 0px 20px 0px';
    document.getElementById('team-name').style.fontSize = '3vw';
    document.getElementById('team-name').style.marginTop = '20px';
    document.getElementById('team-number').style.fontSize = '2vw';
  }
}