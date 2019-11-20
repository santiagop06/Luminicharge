var users = [];
$(document).ready(function () {
    getUsers();

    initRegisterButtons();
});

function getUsers() {
    database.ref('/users/').on("value", function (snapshot) {
        $("#data-list").empty();
        snapshot.forEach(function (data) {
            $("#data-list").append(getCard(data.val()));
            console.log(data.val())
            users.push(data.val());
        });
    })
}

function getCard(data) {
    return `<div class="col-12" id="card">
    <p>`+ data.user + `</p>
    </div>`
}

function altaUsuario() {
    var dbRef = database.ref('/users/');
    user = $("#nombreUsuario").val();
    password = $("#password").val();
    dbRef.push({
        user: user,
        password: password

    }), function (error) {
        if (error) {
            console.log(error)
        } else {
            console.log("done")
        }
    }
}

function initRegisterButtons() {
    $("#register").click(function () {
        console.log("dsfs")
        altaUsuario();
    })
}
