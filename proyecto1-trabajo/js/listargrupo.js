var apibase = "https://paginas-web-cr.com/ApiPHP/apis/";
var apiconsultar = "Listagrupo.php";
var apieliminar = "Borrargrupo.php";
var apieditar = "Actualizargrupo.php";

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
        "nombregrupo":document.getElementById('nombregrupo').value ,     
    }

    apiurl = apibase + apieditar;
        fetch(apiurl,
            {
                method:'POST',
                body: JSON.stringify(datosEnviar)
            })
        .then(estructura => estructura.json())
        .then((datosrespuesta) => {
            alert("Salvado")
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
                                <td>${objetoindividual.nombregrupo}</td>
                               
                                <td>
                                    <a name="Editar" id="Editar" class="btn btn-warning" role="button" onclick="mostrarEditarModal('${objetoindividual.id}','${objetoindividual.nombregrupo}')">Editar</a>
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

        apiurl = apibase + apieliminar ;
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

    function mostrarEditarModal(id, nombregrupo){
        document.getElementById('id').value = id;
        document.getElementById('nombre').value = nombregrupo;
    }

consultardatos();

//crear una funcion parecida a la del submit
//cambiar el metodo de insertar por el de editar
//crear una funcion similar a completeDelete
