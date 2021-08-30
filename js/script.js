window.onload = (event) => {
    var text = "";
    function makeid(length, t) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            if (t.charAt(i) == ' ') {
                result += " ";
            }
            else {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
        }
        return result;
    }

    const queryString = window.location.search;
    if (queryString == "") {
        text = "Decoding Text Animation";
        console.log("No Querystring");
    }
    else {
        const urlParams = new URLSearchParams(queryString);
        const message = urlParams.get('message');
        if (message == null) {
            text = "No message parameter found. Please recheck your URL.";
        }
        else {
            text = message;
            // Reversing the string
            text = text.split("").reverse().join("");
        }
        console.log("Querystring found");
    }

    console.log("Text: ", text);
    text = text.replaceAll("+", " ");
    r = document.getElementById("reveal");
    l = text.length;
    randomText = makeid(l, text);
    r.innerHTML = "";
    let char = 0;
    let interval = setInterval(function () {
        actual = text.substring(0, char + 1);
        ran = makeid(randomText.length - char - 1, text.substring(char + 1));
        r.innerHTML = actual + ran;
        char++;
        if (char === text.length) {
            clearInterval(interval);
        }
    }, 50);
}