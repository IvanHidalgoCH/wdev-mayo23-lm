menuprincipal.innerHTML += `
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
<div class="container-fluid">
<button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarCenteredExample" aria-controls="navbarCenteredExample"
    aria-expanded="false" aria-label="Toggle navigation"></i></button>
<div class="collapse navbar-collapse justify-content-center" id="navbarCenteredExample">
    <ul class="navbar-nav mb-2 mb-lg-0">
        <li class="nav-item">
            <a class="nav-link active" href="index.html" aria-current="page">INICIO<span class="visually-hidden">(current)</span></a>
        </li>
        <li class="nav-item">
            <a class="nav-link active" href="https://paginas-web-cr.com/ApiPHP" target="_blank" aria-current="page">API<span class="visually-hidden">(current)</span></a>
        </li>                
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Curso</a>
            <div class="dropdown-menu" aria-labelledby="dropdownId">
                <a class="dropdown-item" href="listarcurso.html">Lista de cursos</a>
                <a class="dropdown-item" href="crearcurso.html">Crear curso nuevo</a>
            </div>
        </li>
    <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Profesores</a>
            <div class="dropdown-menu" aria-labelledby="dropdownId">
                <a class="dropdown-item" href="listarprofesores.html">Lista de profesores</a>
                <a class="dropdown-item" href="crearprofesores.html">Crear profesor nuevo</a>
            </div>
        </li>
    <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Estudiantes</a>
            <div class="dropdown-menu" aria-labelledby="dropdownId">
                <a class="dropdown-item" href="listarestudiantes.html">Lista de estudiantes</a>
                <a class="dropdown-item" href="crearestudiantes.html">Crear estudiante nuevo</a>
            </div>
        </li>
    <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Grupos</a>
            <div class="dropdown-menu" aria-labelledby="dropdownId">
                <a class="dropdown-item" href="listargrupo.html">Lista de grupos</a>
                <a class="dropdown-item" href="creargrupo.html">Crear grupo nuevo</a>
            </div>
        </li>
    </ul>
</div>

</nav>`;