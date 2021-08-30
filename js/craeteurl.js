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

// Main logic starts here
window.onload = (event) => {
    var text = "";
    text = "Create your custom message";
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