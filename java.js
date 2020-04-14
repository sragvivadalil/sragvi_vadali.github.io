(function(){

    var preload = document.getElementById("preload")
    var loading = 0;
    var id = setInterval(frame, 64);
    let timer = 60;

    function frame() {
        if(loading === 10) {
            clearInterval(id)
            window.open("home.html", "_self");
        } else {
            loading += 1;
            if(loading === 90){
                preload.style.animation = "fadeout ls ease";
            }
        }
    }

})();
