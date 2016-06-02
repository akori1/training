var     
   templateContainer = $('#templates'),
   personaTemplate;

   templateContainer.find('#personasTemplate').load('html/personas-template.html', function(){
    personaTemplate = templateContainer.find('#personasTemplate').val();
        
    });

function mostrarPersonas () {

    $.get("/persona", function(data){
       
        var
            personasHtml = '';
       	for(var i =0 ; i< data.length;i++){

        personasHtml += generarHtml(data[i]);
       
       }

        $('#mostrarPersona').append(personasHtml)

    });

}

function generarHtml (persona){    
        return personaTemplate
        .replace (/%id%/g,persona.id)
        .replace (/%nombre%/g,persona.nombre)
        .replace (/%edad%/g,persona.edad)
        .replace (/%email%/g,persona.email);


}

$(function listar(){
    $('.listado')
        .on('click', onClickListar);

    function onClickListar(){ 
        $("#mostrarPersona").empty();
        mostrarPersonas();
        return false;
    }

    mostrarPersonas();    

    $('.agregar')
        .on('click', onClickAgregar);

    function onClickAgregar(){ 
        
        var newNombre = $('#nombre').val(),
            newEdad = $('#edad').val(),
            newEmail = $('#email').val();
       
        
        if((newNombre.length > 1) && (newEdad.length > 0) && (newEmail.length > 1))  {
            $.ajax({
            url:'/persona',
            method:'POST',
            data : {
            nombre: newNombre,
            edad: newEdad,
            email: newEmail
            },
            success: function(data){ 
                alert('Usuario Agregado'); 
                $("#mostrarPersona").empty();
                mostrarPersonas();
                limpiarInputs('nombre');
                limpiarInputs('edad');
                limpiarInputs('email');
                }
            });
        }else {
            alert('Debes complertar todos los campos'); 
        }
        return false;
    }  


    $('body').on('click','.elemento',  function(e) {
        e.preventDefault();
        var newId = $(this).attr('data-id');
        console.log(newId);

        $.ajax({
        url:'/persona'  + '/' + newId,
        method:'DELETE',
            success: function(data){ 
                
                alert('Usuario eliminado'); 
                $("#mostrarPersona").empty();
                mostrarPersonas();
            }
        });


  
    });

});


function limpiarInputs (input) {
    $('#'+input).val('');
}
