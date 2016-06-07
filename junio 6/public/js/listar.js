var templateContainer = $('#templates');
var usuarioTemplate;

templateContainer.find('#usuarioTemplate').load('usuario-template.html', function(){
    usuarioTemplate = templateContainer.find('#usuarioTemplate').val();

});
function mostrarUsuarios () {

    $.get("http://connectedin.herokuapp.com/person/", function(data){

        var
        usuariosHtml = '';
        for(var i =0 ; i< data.length;i++){

            usuariosHtml += generarHtml(data[i]);

        }
        usuariosHtml = generarTabla (usuariosHtml);
        $('#mostrarUsuarios').append(usuariosHtml)

    });

}
function generarTabla (usuariosHtml){
    usuariosHtml= ('<table class="table table-bordered"><thead><tr><th>First Name</th><th>Last Name</th><th>Gender</th><th>Birthday</th><th>Address</th><th>Photo</th><th>Email</th></thead><tbody>' + usuariosHtml + '</tbody></table>');
    return usuariosHtml;
}
function generarHtml (usuario){    
    return usuarioTemplate
    .replace (/%id%/g,usuario._id)
    .replace (/%firstName%/g,usuario.firstName)
    .replace (/%lastName%/g,usuario.lastName)
    .replace (/%gender%/g,usuario.gender)
    .replace (/%birthday%/g,usuario.birthday)
    .replace (/%address%/g,usuario.address)
    .replace (/%photo%/g,usuario.photo)
    .replace (/%email%/g,usuario.email);


}

mostrarUsuarios();