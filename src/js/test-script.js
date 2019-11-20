$(document).ready(function () {
    loginTest();
    usersTest();
    carTest();
    stationTest();
});

function loginTest() {
    $("#login-test").click(function () {
        console.log(isEmpty($("#correo").val()));
        console.log(isEmpty($("#palabraSecreta").val()));

        console.log(assertEquals($("#correo").val(), "angel"));
        console.log(assertEquals($("#palabraSecreta").val(), "angel"));
    });
}

function usersTest() {
    $("#users-test").click(function () {
        console.log(isEmpty($("#nombreUsuario").val()));
        console.log(isEmpty($("#password").val()));

        console.log(assertEquals($("#nombreUsuario").val(), "angel"));
        console.log(assertEquals($("#password").val(), "angel"));
    });
}

function carTest() {
    $("#cars-test").click(function () {
        console.log(isEmpty($("#carBrand").val()));
        console.log(isEmpty($("#carPlate").val()));
        console.log(isEmpty($("#carYear").val()));

        console.log(assertEquals($("#carBrand").val(), "Audi"));
        console.log(assertEquals($("#carPlate").val(), "XT200"));
        console.log(assertEquals($("#carDate").val(), "2000"));
    });
}

function stationTest() {
    $("#stations-test").click(function () {
        console.log(isEmpty($("#stationName").val()));
        console.log(isEmpty($("#address").val()));

        console.log(assertEquals($("#stationName").val(), "Zapata"));
        console.log(assertEquals($("#address").val(), "3 sur"));
    });
}

