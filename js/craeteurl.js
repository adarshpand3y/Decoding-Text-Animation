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

function createURL() {
    let message = "";
    let username = document.getElementById("username").value;
    let usermessage = document.getElementById("usermessage").value;
    let url = usermessage.replaceAll(" ", "-");
    // Reversing url slug
    url = url.split("").reverse().join("");
    message = `${username} has sent a special message for you. Click the link below to view it.\nhttps://adarshpand3y.github.io/Decoding-Text-Animation/?message=${url}`;
    let t = document.getElementById("messagebox");
    t.value = message;
    let b = document.getElementById("gen");
    navigator.clipboard.writeText(message);
    b.innerHTML = "Message Copied!";
    setTimeout(function() {
        b.innerHTML = "Generate message!";
    }, 3000);
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