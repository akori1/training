function mostrarPersonas () {

    $.get("/persona", function(data){
       

       	for(var i =0 ; i< data.length;i++){

        $('#mostrarPersona').append('<div class="row elementos"> <span class="col-xs-1"> ID: ' 
        							+ data[i].id 
        							+ '</span > <span class="col-xs-3"> Nombre: ' 
        							+ data[i].nombre 
        							+ '</span > <span class="col-xs-3"> Edad: ' 
        							+ data[i].edad 
        							+ '</span > <span class="col-xs-3"> Email: ' 
        							+ data[i].email
        							+ '</span>'
                                    + ' <span class="col-xs-1"> <form><input type="button" class="elemento btn btn-danger '
                                    + '" value="Eliminar" data-id="' + data[i].id  + '"></form> </span>'
                                    +'</div>')
       
       }

    });

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
            }
        });
       
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



