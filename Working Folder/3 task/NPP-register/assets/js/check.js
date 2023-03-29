function check() {
    if (!document.getElementById("checkbox").style.backgroundImage) {
        document.getElementById("checkbox").style.backgroundImage = 'url(assets/img/checkboxT.png)';
        document.getElementById("checkbox").style.width = '20px';
        document.getElementById("checkbox").style.height = '20px';
        document.getElementById("checkbox").style.backgroundRepeat = 'no-repeat';
        document.getElementById("checkbox").style.backgroundPosition = 'center';
    } else {
        document.getElementById("checkbox").style.backgroundImage = '';
    }
}