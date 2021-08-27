window.onload = (event) => {
    var text = "";
    function makeid(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    const queryString = window.location.search;
    if (queryString == "") {
        text = "Decoding Text Animation";
    }
    else {
        const urlParams = new URLSearchParams(queryString);
        const message = urlParams.get('message');
        text = message;
    }

    r = document.getElementById("reveal");
    l = text.length;
    randomText = makeid(l);
    r.innerHTML = "";
    let char = 0;
    let interval = setInterval(function () {
        actual = text.substring(0, char + 1);
        ran = makeid(randomText.length - char - 1);
        r.innerHTML = actual + ran;
        char++;
        if (char === text.length) {
            clearInterval(interval);
        }
    }, 50);
}