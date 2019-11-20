
$(document).ready(function () {
    initFirebase();
    
    initNavbar();
});

function initNavbar(){
    $(".navEnabled").prepend(`<nav class="navbar navbar-expand-lg navbar-light bg-light custom-navbar">
    <a class="navbar-brand" href="#">LuminiCharge</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="automoviles.html">Vehiculos</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="estaciones.html">Estaciones</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="usuario.html">Usuarios</a>
            </li>
        </ul>
    </div>
</nav>
`);
}

function showToast(message) {
    Toastify({
        text: message,
        duration: 3000
    }).showToast();
}

function initFirebase() {
    var firebaseConfig = {
        apiKey: "AIzaSyBKpmslQKmfnkeAV-jDtfNiWbKF3ro5Xa8",
        authDomain: "luminicharge.firebaseapp.com",
        databaseURL: "https://luminicharge.firebaseio.com",
        projectId: "luminicharge",
        storageBucket: "",
        messagingSenderId: "310473862667",
        appId: "1:310473862667:web:d9c4a2b1423253669a610e"
    };

    firebase.initializeApp(firebaseConfig);

    database = firebase.database();

    auth = firebase.auth();
}