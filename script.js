(function () {
    var body = document.querySelector('body');
    body.style.minHeight = document.documentElement.clientHeight + "px";

    var circle = document.getElementById('circle');
    var arrow = document.getElementById('arrow');
    var time = document.querySelectorAll('div#hours, div#minutes, div#seconds');
    var buttons = document.querySelectorAll('input#start, input#stop, input#reset');
    var angle = 0;
    console.log(buttons[1]);
    var timer;
    function go() {
       timer =  setInterval(function() {
          if (angle == 360) {
            angle = 0;
          }
          angle +=6;
          time[2].textContent = +time[2].textContent + 1;
          if (time[2].textContent < 10 ) {
            time[2].textContent = 0 + time[2].textContent;
          }
          if (time[2].textContent == 60 ) {
            time[2].textContent = '00';
            time[1].textContent = +time[1].textContent + 1 ;
            if (time[1].textContent < 10) {
              time[1].textContent = 0 + time[1].textContent;
            }
          }
          if (time[1].textContent == 60) {
            time[1].textContent = '00';
            time[0].textContent = +time[0].textContent + 1 ;
            if (time[0].textContent < 10) {
              time[0].textContent = 0 + time[0].textContent;
            }
          }
          arrow.style.transform = "rotate("+angle+"deg)";
        }, 1000);
        buttons[0].disabled = true;
        buttons[1].disabled = false;
        buttons[2].disabled = true;
    }
    buttons[0].addEventListener('click', go);
    buttons[1].addEventListener('click', function(){
      clearInterval(timer);
      buttons[0].disabled = false;
      buttons[1].disabled =  true;
      buttons[2].disabled = false;
    });
    buttons[2].addEventListener('click', function () {
      time[0].textContent = '00';
      time[1].textContent = '00';
      time[2].textContent = '00';
      buttons[0].disabled = false;
      buttons[1].disabled = false;
      buttons[2].disabled = true;
      arrow.style.transform = "rotate(0deg)";
    });
})();
