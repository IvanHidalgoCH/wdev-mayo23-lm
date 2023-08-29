var formulario = document.getElementById('formulario'); //en el ElementbyID se toma el ID del formulario del HTML "div id=formulario"
const ModalSucces = new bootstrap.Modal(document.getElementById('ModalSuccess')); 
//la línea de arriba es la que se copia del comando modal (bs5-modal-default) en el HTML "crearcurso.html" (está al final en un script) -->
//<--y se le pone el ID del primer div del modal, abajo de "if you want"

var apibase = "https://paginas-web-cr.com/ApiPHP/apis/";
var apicrear = "InsertarCursos.php";

formulario.addEventListener('submit', function(e) //addEventListener() es para jalar la información del type del botón Enviar ("submit")-->
//<--y se le agrega la "function(e)" para evitar que se recargue el alerta del modal
{
    e.preventDefault(); //para evitar que la página se recargue automáticamente al ejercer un función de algún botón con MODAL
    //también es para evitar que se cierre el Modal.show

    var datosEnviar = {
        "cedula":document.getElementById('cedula').value ,
        "correoelectronico":document.getElementById('correoelectronico').value ,
        "telefono":document.getElementById('telefono').value ,
        "telefonocelular":document.getElementById('telefonocelular').value ,
        "fechanacimiento":document.getElementById('fechanacimiento').value ,
        "sexo":document.getElementById('sexo').value ,
        "direccion":document.getElementById('direccion').value ,
        "nombre":document.getElementById('nombre').value ,
        "apellidopaterno":document.getElementById('apellidopaterno').value ,
        "apellidomaterno":document.getElementById('apellidomaterno').value ,
        "nacionaidad":document.getElementById('nacionalidad').value ,
        "idcarreras":document.getElementById('idcarreras').value ,
        "usuario":document.getElementById('usuario').value ,
        "usuario":"Ivan Hidalgo",
    }

    apiurl = apibase + apicrear;
        fetch(apiurl,
            {
                method:'POST',
                body: JSON.stringify(datosEnviar)
            })
        .then(estructura => estructura.json())
        .then((datosrespuesta) => {
                ModalSucces.show()
                completeInsert()
                //completeDelete() (este comando solo se usa para eliminar) 
            })
        .catch(console.log);

    //console.log(datosEnviar)
    //alert('creando');
    //ModalSucces.show(); //es la alerta del Modal diferente al "Alert" normal.
});

function completeInsert(){
    window.location = 'listarestudiantes.html'
}