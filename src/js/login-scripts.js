var users = [];
$(document).ready(function () {
    getUsers();

    initLoginButtons();
});

function initLoginButtons() {
    $("#login-button").click(function () {
        console.log("ffdfd")
        doLogin();
    });
}

function getUsers() {
    database.ref('/users/').on("value", function (snapshot) {
        snapshot.forEach(function (data) {
            console.log(data.val())
            users.push(data.val());
        });
    })
}

function doLogin() {
    var username = $("#correo").val();
    var password = $("#palabraSecreta").val();
    var result = users.find(user => (user.user == username && user.password == password))
    if (result != undefined) {
        location.assign("usuario.html");
    }
    else {
        showToast("Datos incorrectos");
    }
}
