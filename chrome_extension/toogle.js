function PumgranaToogle(){
    var el = document.querySelector('.Pumgrana');
    var value = (el.getAttribute('data-state') == "masked") ? "visible" : "masked";
    el.setAttribute("data-state", value);
}
