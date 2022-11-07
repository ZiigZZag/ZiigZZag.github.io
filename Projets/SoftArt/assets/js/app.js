const snippets = (function (){
  document.addEventListener('DOMContentLoaded', init());
  function init() {
    console.log('init');
    getMousePos();
  }

  function getMousePos() {
    document.addEventListener('mousemove', function (e) {
      console.log(e.clientX, e.clientY);
    });
  }
})