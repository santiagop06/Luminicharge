var users = [];
$(document).ready(function () {
    getStations();

    initRegisterButtons();
});

function getStations() {
    database.ref('/stations/').on("value", function (snapshot) {
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
    <p>`+ data.name + `</p>
    </div>`
}

function addStation() {
    var dbRef = database.ref('/stations/');
    name = $("#stationName").val();
    address = $("#address").val();
    dbRef.push({ 
        name: name,
        address: address

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
        addStation();
    })
}
