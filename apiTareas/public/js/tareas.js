var myClosure = (function(){
  var
    tareaHtml = ('<div class="row" >' 
                +''
                + '%task%' 
                + '<div class = "remove"><input type="button" class="tarea'
                + '" value="X"></div></div>'),
    formulario = $('form'),
    divTarea = $('#tarea');

  function init (){
    formulario.on('submit', agregarTarea);
     function agregarTarea(){
       var 
          tarea = divTarea.val()
          newTarea = agretarTareaHtml(tarea),
          newMain = $('#main').append(newTarea);
          limpiarInput ();
       //console.log (newTarea);

       return false;
    }
  }
  function agretarTareaHtml (tarea) {
    return tareaHtml
    .replace(/%task%/g, tarea);
  }

  function    limpiarInput () {
    divTarea.val('')
  }

  $('body').on('click','.tarea',  function(e) {
    e.preventDefault();
    var tarea = $(this).parent().parent();
    tarea.remove();
  })

  return {
   init:init
  }
})();


$(function(){
  myClosure.init();
})