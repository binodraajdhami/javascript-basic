// // Task
// function doPhotoCopy(note, callbackFN) {
//     console.log("Press got note from me", note);
//     console.log("Press take time to do all coppied");

//     setTimeout(function () {
//         console.log("after 5 second");
//         console.log("Press men call me to take coppied note");
//         callbackFN("Coppied:", note);
//     }, 5000)

// }

function askNoteToFriend(subject, callbackFN) {
    console.log('I need time to search');
    console.log('Search......');

    setTimeout(function () {
        console.log("I found note");
        console.log("Friend callback me");
        callbackFN(subject);
    }, 5000)
}

// console.log("Ask to friend for Note");

askNoteToFriend('Node.js', function (note) {

    console.log("I got note from frind: ", note);

    doPhotoCopy(note, function (err, result) {
        console.log("I got : ", result);

        if (err) {
            console.log("I dont get note");
        } else {
            doPhotoCopy(note, function (err, result) {
                console.log("I got : ", result);

                doPhotoCopy(note, function (err, result) {
                    console.log("I got : ", result);

                    doPhotoCopy(note, function (err, result) {
                        console.log("I got : ", result);

                        doPhotoCopy(note, function (err, result) {
                            console.log("I got : ", result);

                            doPhotoCopy(note, function (err, result) {
                                console.log("I got : ", result);

                                doPhotoCopy(note, function (err, result) {
                                    console.log("I got : ", result);
                                });
                            });
                        });
                    });
                });
            });
        }

    });

});

// console.log("I clean my room");
// console.log("I ate lunch..");



async function sayHello() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

}

sayHello();