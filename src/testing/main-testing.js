function assertEquals(a, b) {
    if (a === b) {
        return "Test passed"
    }
    else {
        return "Test failed"
    }
}

function assertTrue(data) {
    if (data) {
        return "Test passed"
    }
    else {
        return "Test failed"
    }
}

function isEmpty(data) {
    if (data == "") {
        return "Test passed"
    }
    else {
        return "Test failed"
    }
}

function isNull(data) {
    if (data == null) {
        return "Test passed"
    }
    else {
        return "Test failed"
    }
}

function isUndefined(data) {
    if (data == undefined) {
        return "Test passed"
    }
    else {
        return "Test failed"
    }
}

function exists(data) {
    if (data != undefined) {
        return "Test passed"
    }
    else {
        return "Test failed"
    }
}