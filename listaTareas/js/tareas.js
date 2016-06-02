$('form').on('submit', agregarTarea);
   
   function agregarTarea(){
       var newTarea = agretarTareaHtml(),
           newMain = $('#main').append(newTarea);
           limpiarInput ();
       //console.log (newTarea);

       return false;
}

function agretarTareaHtml () {
    var
        tarea = $('#tarea').val(),
        tareaHtml = ('<div class="row">' 
                    + tarea 
                    + '<input type="button" class="tarea .glyphicon .glyphicon-remove'
                    + '" value="X"></div>');
    return tareaHtml;
}

function    limpiarInput () {
    $('#tarea').val('');
}

$('body').on('click','.tarea',  function(e) {
        e.preventDefault();
        var tarea = $(this).parent();
        tarea.remove();
});