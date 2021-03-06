function topNavBtnOnClick() {
    var topnav = document.getElementById("topnav");
    if (topnav.className === "topnav") {
        topnav.className += " responsive";
    } else {
        topnav.className = "topnav";
    };
};

function showModal(modalName) {
        var modal = document.getElementById(modalName);
        modal.style.display = "block";
};

function closeModal(modalName) {
        var modal = document.getElementById(modalName);
        modal.style.display = "none";
};

//validation form
const charMatch           = new RegExp('^[0-9a-zA-Z]+$');
var   username_reg_input  = document.getElementById('username_reg_input');
var   unamereg            = document.getElementById('unamereg');
var   emailreg            = document.getElementById('emailreg');
var   emailreg_input      = document.getElementById('emailreg_input');
var   pswreg              = document.getElementById('pswreg');
var   pswreg_input        = document.getElementById('pswreg_input');
var   pswreg_repeat       = document.getElementById('pswregr');
var   pswreg_repeat_input = document.getElementById('pswreg_repeat_input');

username_reg_input.addEventListener('keyup', function(event) {
    if (!charMatch.test(username_reg_input.value)) {
        unamereg.style.color = "red";
    } else {
        unamereg.style.color = "green";
    };
});

emailreg_input.addEventListener('keyup', function(event) {
    var count = 0;
    var pos = emailreg_input.value.indexOf('@');
    while (pos !== -1) {
        count++;
        pos = emailreg_input.value.indexOf('@', pos + 1);
    };
    if (count !== 1) {
        emailreg.style.color = "red";
    } else {
        emailreg.style.color = "green";
    };
});

pswreg_input.addEventListener('keyup', function(event) {
    if (!charMatch.test(pswreg_input.value)) {
        pswreg.style.color = "red";
    } else {
        pswreg.style.color = "green";
    };
});

pswreg_repeat_input.addEventListener('keyup', function(event) {
    if (!charMatch.test(pswreg_repeat_input.value)) {
        pswreg_repeat.style.color = "red";
    } else {
        pswreg_repeat.style.color = "green";
    };
});


