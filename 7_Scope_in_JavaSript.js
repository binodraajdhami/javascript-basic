// Scope
// Global Scope
// Local Scope or Functional Scope

var message = "Welcome to KTM";

function welcome() {
    console.log("Inner :", message);
    message = "Welcome to Baneswor";
    console.log(message);

    var address = "Tikune";

    if (true) {
        var phone = 98888
        console.log(address);
    }
}

function greeting() {
    var address = "Hattiban";
    console.log(address);
}


welcome();
greeting();