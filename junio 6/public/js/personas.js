$('form')
    .on('submit', onClickAgregar);

    function onClickAgregar(e){ 
        e.preventDefault ();
        
        var registro = {
            firstName : $('#firstName').val(),
            lastName : $('#lastName').val(),
            gender : $('#gender').val(),
            birthday : $('#birthday').val(),
            address : $('#address').val(),
            photo : $('#photo').val(),
            email : $('#email').val(),
            password : $('#password').val(),
        };
        var password2 = $('#password-check').val();
        limpiarError();
        if  (validateEmail(registro.email) && validatePassword (registro.password, password2)) {
            registrarse(registro);
        }   else {
            console.log ("validaste incorrecto")
        }
    }

/*
** Valida el email
** @requiere Email
*/  
function validateEmail (email){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var error;
    error = re.test(email)
    if(!error){
        $("#email").after('<span class="error ">El e-mail no es correcto</span>');      
        }
    return (error);
};

/*
** Valida contraseñas
** @requiere password1
** @requiere password2
*/ 
function validatePassword (pass1, pass2) {
    var hasError;

    if (pass1 == '') {
        $("#password").after('<span class="error">Por favor, ingresa la contraseña.</span>');
        hasError = true;
    } else if (pass2 == '') {
        $("#password-check").after('<span class="error">Por favor, ingresa la contraseña por segunda vez</span>');
        hasError = true;
    } else if (pass1 != pass2 ) {
        $("#password-check").after('<span class="error">Las contraseñas no son iguales.</span>');
        hasError = true;
    }
    if(hasError == true) {return false;}else {return true}
};
/*
** Guarda en la ap los datos del registro
** @requiere los campos completados
*/  
function registrarse (registro) {
    $.ajax({
        url:'http://connectedin.herokuapp.com/person/',
        method:'POST',
        contentType: "application/json",
        data : JSON.stringify(
            registro
            ),
        success: function(data){ 
            alert('Te registraste correctamente, vamos k-po'); 
        },
        error: function(){
            alert ('Faltan ingresar campos');
        }
    });        
};
function limpiarError () {
$('.error').remove();
};

/*var     
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


}*/





/*
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
        
        var newFirstName = $('#fistName').val(),
            newLastName = $('#lastName').val(),
            newGender = $('#gender').val(),
            newBirthday = $('#birthday').val(),
            newAddress = $('#addres').val(),
            newPhoto = $('#photo').val();
       
        
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
*/