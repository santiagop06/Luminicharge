var users = [];
$(document).ready(function () {
    getCars();

    initRegisterButtons();
});

function getCars() {
    database.ref('/cars/').on("value", function (snapshot) {
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
    <p>`+ data.brand + `</p>
    </div>`
}

function addCar() {
    var dbRef = database.ref('/cars/');
    brand = $("#carBrand").val();
    plate = $("#carPlate").val();
    date = $("#carDate").val();
    dbRef.push({
        brand: brand,
        plate: plate,
        date: date
    }), function (error) {
        if (error) {
            console.log(error)
        } else {
            console.log("done")
        }
    }
}

function addPayment(){
    brand = $("#totalPayment").val();
    console.log(brand)
    App.buyEnergy(); return false

    
}

function initRegisterButtons() {
    $("#register").click(function () {
        console.log("dsfs")
        addCar();
    });

    $("#registerPayment").click(function () {
        addPayment();
    });
}
