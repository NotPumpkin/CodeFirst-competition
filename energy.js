/*jslint devel: true*/

// variables
var user;
var dist;
var calvalue;
var people;
var fuel;
var litre;
var co2;



function processFormE() {
    "use strict";

    //Initializing variables
    dist = 0;
    calvalue = 0;
    people = 1;
    fuel = 0;
    litre = 0;
    co2 = 0;

    // Getting values from HTML form inputs
    user = document.formE.name.value;
    if (user === "") {
        user = "User";
        console.log("No user name");
    } 

    dist = Number(document.formE.dist.value);
    if (document.formE.dist.value === "" || isNaN(dist)) {
        alert("Please insert a valid distance.");
    }
}

//    napt = Number(document.formRP.napt.value);
//    if (document.formRP.napt.value === "" || isNaN(napt)) {
//        bootbox.alert("Por favor preencha o campo 'Número de Apartamentos' com números.");
//        return false;
//    }
//
//    npes = Number(document.formRP.npes.value);
//    if (document.formRP.npes.value === "" || isNaN(npes)) {
//        bootbox.alert("Por favor preencha o campo 'Número de Pessoas' com números.");
//        return false;
//    }
//
//    percap = Number(document.formRP.percap.value);
//    if (document.formRP.percap.value === "" || isNaN(percap)) {
//        bootbox.alert("Por favor preencha o campo 'Número de Pessoas' com números.");
//        return false;
//    }
//
//    interm = Number(document.formRP.interm.value);
//    if (document.formRP.interm.value === "" || isNaN(interm)) {
//        bootbox.alert("Por favor preencha o campo 'Intermitência' com números.");
//        return false;
//    }
//
//    if (document.getElementById("rest").checked === true) {
//        srest = "Sim";
//        qtdrest = Number(document.formRP.qtdrest.value);
//        if (document.formRP.qtdrest.value === "" || isNaN(qtdrest)) {
//            bootbox.alert("Por favor preencha o campo 'Quantidade de refeições' com números.");
//            return false;
//        }
//        percaprest = Number(document.formRP.percaprest.value);
//        if (document.formRP.percaprest.value === "" || isNaN(percaprest)) {
//            bootbox.alert("Por favor preencha o campo 'Consumo por refeição' com números.");
//            return false;
//        }
//    } else {
//        srest = "Não";
//    }
//
//    if (document.getElementById("cine").checked === true) {
//        scine = "Sim";
//        qtdcine = Number(document.formRP.qtdcine.value);
//        if (document.formRP.qtdcine.value === "" || isNaN(qtdcine)) {
//            bootbox.alert("Por favor preencha o campo 'Quantidade de lugares' com números.");
//            return false;
//        }
//        percapcine = Number(document.formRP.percapcine.value);
//        if (document.formRP.percapcine.value === "" || isNaN(percapcine)) {
//            bootbox.alert("Por favor preencha o campo 'Consumo por lugar' com números.");
//            return false;
//        }
//    } else {
//        scine = "Não";
//    }
//
//    if (document.getElementById("templo").checked === true) {
//        stemplo = "Sim";
//        qtdtemplo = Number(document.formRP.qtdtemplo.value);
//        if (document.formRP.qtdtemplo.value === "" || isNaN(qtdtemplo)) {
//            bootbox.alert("Por favor preencha o campo 'Quantidade de lugares' com números.");
//            return false;
//        }
//        percaptemplo = Number(document.formRP.percaptemplo.value);
//        if (document.formRP.percaprest.value === "" || isNaN(percaptemplo)) {
//            bootbox.alert("Por favor preencha o campo 'Consumo por lugar' com números.");
//            return false;
//        }
//    } else {
//        stemplo = "Não";
//    }
//
//    if (document.getElementById("func").checked === true) {
//        sfunc = "Sim";
//        qtdfunc = Number(document.formRP.qtdfunc.value);
//        if (document.formRP.qtdfunc.value === "" || isNaN(qtdtemplo)) {
//            bootbox.alert("Por favor preencha o campo 'Quantidade de funcionários' com números.");
//            return false;
//        }
//        percapfunc = Number(document.formRP.percapfunc.value);
//        if (document.formRP.percapfunc.value === "" || isNaN(percaptemplo)) {
//            bootbox.alert("Por favor preencha o campo 'Consumo por funcionário' com números.");
//            return false;
//        }
//    } else {
//        sfunc = "Não";
//    }
//
//    // Calculating CD
//    CD = (npav * napt * npes * percap) + percapcine * qtdcine + percapfunc * qtdfunc + percaptemplo * qtdtemplo + qtdrest * percaprest;
//    CDm3 = CD / 1000;
//
//    // Calculating reservoir
//
//    // Fire reserve
//    if (scine === "Sim" || srest === "Sim" || stemplo === "Sim") {
//        q = 100;
//    } else {
//        q = 80;
//    }
//
//    vinc = 2 * q * 60;
//
//    //Superior and Inferior
//    if (interm > 3){
//        interm = 3;
//    }
//    n = (interm + 0.6);
//    vri = n * CD;
//    vrs = vinc + 0.4 * CD;
//    vtot = vrs + vri;
//
//    // Results
//    
//    var menu_prompt = {
//        title: "Resultado",
//        message: "O prédio necessita de volume total de reservação igual a " + vtot + " litros. Confira o relatório para detalhes do sistema",
//        buttons: {
//            cancel: {
//                label: '<i class="fa fa-times"></i> Voltar'
//            },
//            confirm: {
//                label: '<i class="fa fa-check"></i> Mostrar relatório'
//            }
//        },
//        callback: function (result) {
//            if (result) {
//                location.href = "reportwatersupply.html?test=" + JSON.stringify(resultado);
//            }
//        }
//    };
//    
//    bootbox.confirm (menu_prompt);
//    
//    var resultado = {
//        "project": project,
//        "npav": npav,
//        "napt": napt,
//        "npes": npes,
//        "percap": percap,
//        "percaprest": percaprest,
//        "percapcine": percapcine,
//        "percaptemplo": percaptemplo,
//        "percapfunc": percapfunc,
//        "qtdrest": qtdrest,
//        "qtdcine": qtdcine,
//        "qtdtemplo": qtdtemplo,
//        "qtdfunc": qtdfunc,
//        "srest": srest,
//        "scine": scine,
//        "stemplo": stemplo,
//        "sfunc": sfunc,
//        "vrs": vrs,
//        "vri": vri,
//        "vtot": vtot,
//        "q": q,
//        "interm": interm,
//        "cd": CD,
//        "vinc": vinc     
//    }
//    
//}
