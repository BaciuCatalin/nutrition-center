console.log('utils.js loaded...');

function checkNumber(nr) {
    if (nr.length == 0) {
        return false;
    }

    if (nr.includes(' ')) {
        return false;
    }

    if (isNaN(nr)) {
        return false;
    }

    if (nr <= 0){
        return false;
    }
    return true;

}

function checkIntiger(nr) {
    if (checkNumber(nr) == false) {
        return false;
    }
    if (parseInt(nr) == parseFloat(nr)) {
        return true;
    }
    return false;
}


