var apibase = "https://paginas-web-cr.com/ApiPHP/apis/";
var apiconsultar = "ListaEstudiantes.php";
var apieliminar = "BorrarEstudiantes.php";
var apieditar = "ActualizarEstudiantes.php";

const myModalEliminar = new bootstrap.Modal(document.getElementById('myModalEliminar'));
const myModalEditar = new bootstrap.Modal(document.getElementById('myModalEditar'));
const modalSuccess = new bootstrap.Modal(document.getElementById('modalSuccess'));

let tablaresultado = document.querySelector('#tablaresultado');

formulario.addEventListener('submit', function(e)
{
    e.preventDefault();
    //alert('salvando')
    var datosEnviar = {
        "id":document.getElementById('id').value,
        "cedula":document.getElementById('cedula').value ,
        "nombre":document.getElementById('nombre').value ,
        "apellidopaterno":document.getElementById('apellidopaterno').value ,
        "apellidomaterno":document.getElementById('apellidomaterno').value ,
        "fechanacimiento":document.getElementById('fechanacimiento').value ,
        "sexo":document.getElementById('sexo').value ,
        "nacionalidad":document.getElementById('nacionalidad').value ,
        "direccion":document.getElementById('direccion').value ,
        "telefono":document.getElementById('telefono').value ,
        "telefonocelular":document.getElementById('telefonocelular').value ,
        "correoelectronico":document.getElementById('correoelectronico').value ,
        "idCarreras":document.getElementById('idCarreras').value ,
        "usuario":"Ivan Hidalgo",
    }

    apiurl = apibase + apieditar;
        fetch(apiurl,
            {
                method:'POST',
                body: JSON.stringify(datosEnviar)
            })
        .then(estructura => estructura.json())
        .then((datosrespuesta) => {
            alert("Salvado, por favor recargue la página para ver reflejado el cambio")
                //ModalSucces.show()
                completeInsert() 
            })
        .catch(console.log);

    //console.log(datosEnviar)
    //alert('creando');
    //ModalSucces.show(); //es la alerta del Modal diferente al "Alert" normal.
});

function consultardatos(){
    //fetch sirve para extraer, insertar modificar, eliminar consultardatos, 
    apiurl = apibase + apiconsultar ;
    fetch(apiurl)
    .then(estructura => estructura.json())
    .then((datosrespuesta) => {
            //ajustardatostabla
            console.log(datosrespuesta.code) 
            console.log(datosrespuesta.data) 
            ajustardatostabla(datosrespuesta.data) 
        })
    .catch(console.log);
}

function ajustardatostabla(datos){
    console.log("datos"+datos);
    for (const objetoindividual of datos) {
        tablaresultado.innerHTML += `
            <tr class="table-primary">
                                <td scope="row">${objetoindividual.id}</td>
                                <td>${objetoindividual.cedula}</td>
                                <td>${objetoindividual.nombre}</td>
                                <td>${objetoindividual.apellidopaterno}</td>
                                <td>${objetoindividual.apellidomaterno}</td>
                                <td>${objetoindividual.fechanacimiento}</td>
                                <td>${objetoindividual.sexo}</td>
                                <td>${objetoindividual.nacionalidad}</td>
                                <td>${objetoindividual.direccion}</td>
                                <td>${objetoindividual.telefono}</td>
                                <td>${objetoindividual.telefonocelular}</td>
                                <td>${objetoindividual.correoelectronico}</td>
                                <td>${objetoindividual.idCarreras}</td>
                                <td>${objetoindividual.usuario}</td>
                                <td>
                                    <a name="Editar" id="Editar" class="btn btn-warning" role="button" onclick="mostrarEditarModal('${objetoindividual.id}','${objetoindividual.cedula}','${objetoindividual.nombre}','${objetoindividual.apellidopaterno}','${objetoindividual.apellidomaterno}','${objetoindividual.fechanacimiento}','${objetoindividual.sexo}','${objetoindividual.nacionalidad}','${objetoindividual.direccion}','${objetoindividual.telefono}','${objetoindividual.telefonocelular}','${objetoindividual.correoelectronico}','${objetoindividual.idCarreras}','${objetoindividual.usuario}')">Editar</a>
                                    ||
                                    <a name="Eliminar" id="Eliminar" class="btn btn-danger" role="button" onclick="mostrarModal('${objetoindividual.id}')">Eliminar</a>
                                </td>                              
            </tr>
                                    `;
    }   
}


    function mostrarModal(id){

        eliminandodato(id);

        myModalEliminar.show();
        
    }

    function eliminandodato(id){

        var datosEnviar = { 
            "id":id 
        }

        apiurl = apibase + apieliminar;
        fetch(apiurl,
            {
                method:'POST',
                body: JSON.stringify(datosEnviar)
            })
        .then(estructura => estructura.json())
        .then((datosrespuesta) => {
                completeDelete()
            })
        .catch(console.log);
    }

    function completeDelete(){
        myModalEliminar.hide();
        tablaresultado.innerHTML = ``;
        consultardatos();
        
    }

    function mostrarEditarModal(id, cedula, nombre, apellidopaterno, apellidomaterno, fechanacimiento, sexo, nacionalidad, direccion, telefono, telefonocelular, correoelectronico, idCarreras, usuario){
        document.getElementById('id').value = id;
        document.getElementById('cedula').value = cedula;
        document.getElementById('nombre').value = nombre;
        document.getElementById('apellidopaterno').value = apellidopaterno;
        document.getElementById('apellidomaterno').value = apellidomaterno;
        document.getElementById('fechanacimiento').value = fechanacimiento;
        document.getElementById('sexo').value = sexo;
        document.getElementById('nacionalidad').value = nacionalidad;
        document.getElementById('direccion').value = direccion;
        document.getElementById('telefono').value = telefono;
        document.getElementById('telefonocelular').value = telefonocelular;
        document.getElementById('correoelectronico').value = correoelectronico;
        document.getElementById('idCarreras').value = idCarreras;
        document.getElementById('usuario').value = usuario;
        myModalEditar.show();
    }

consultardatos();

//crear una funcion parecida a la del submit
//cambiar el metodo de insertar por el de editar
//crear una funcion similar a completeDelete