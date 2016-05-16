function dropdown_toggle(event, _this) {
    //alert(event.target);
    var menu = _this.getElementsByClassName("dropdown-menu")[0];
    menu.classList.toggle("open");
}


