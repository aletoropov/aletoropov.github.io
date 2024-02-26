$(document).ready(function() {
    if ($("#uslarenda").is(':checked')){
        $("#arendazak").fadeIn(400);
    } else {
        $("#arendazak").fadeOut(200);
    }
    if ($("#uslvstrecha").is(':checked')){
        $("#vstrechazak").fadeIn(400);
    } else {
        $("#vstrechazak").fadeOut(200);
    }
});

function uhodShow() {
    $(".uhod").fadeIn(600);
    $("#uhod-btn-show").hide();
    $("#uhod-btn-hide").show();
}

function uhodHide() {
    $(".uhod").fadeOut(400);
    $("#uhod-btn-hide").hide();
    $("#uhod-btn-show").show();
}

function vstrechaShow() {
    $(".vstrecha").fadeIn(600);
    $("#vstrecha-btn-show").hide();
    $("#vstrecha-btn-hide").show();
}

function vstrechaHide() {
    $(".vstrecha").fadeOut(400);
    $("#vstrecha-btn-hide").hide();
    $("#vstrecha-btn-show").show();
}

function arendaShow() {
    $(".arenda").fadeIn(600);
    $("#arenda-btn-show").hide();
    $("#arenda-btn-hide").show();
}

function arendaHide() {
    $(".arenda").fadeOut(400);
    $("#arenda-btn-hide").hide();
    $("#arenda-btn-show").show();
}

function uslArenda() {
    if ($("#uslvstrecha").is(':checked')) {
        if (confirm("Вы уверены, что хотите выбрать услугу Встреча вместе с услугой Аренда?")) {            
            $("#uslarenda").attr("checked", "checked");
            $("#vstrechazak").hide();
        } else {
            $("#uslarenda").prop('checked', false);
        }
    }
    if ($("#uslarenda").is(':checked')){
        $("#arendazak").fadeIn(400);
    } else {
        $("#arendazak").fadeOut(200);
    }
}

function uslVsrecha() {
    if ($("#uslarenda").is(':checked')) {
        if (confirm("Вы уверены, что хотите выбрать услугу Встреча вместе с услугой Аренда?")) {            
            $("#uslvstrecha").attr("checked", "checked");
        } else {
            $("#uslvstrecha").prop('checked', false);
        }
    }
    if ($("#uslvstrecha").is(':checked')){
        $("#vstrechazak").fadeIn(400);
    } else {
        $("#vstrechazak").fadeOut(200);
    }
}

function uslUhod() {
    if ($("#uslvstrecha").is(':checked')){
        $("#vstrechazak").fadeIn(400);
    } else {
        $("#vstrechazak").fadeOut(200);
    }
}