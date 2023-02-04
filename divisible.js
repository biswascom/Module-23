function divisible (numbers) {
    for (i = 1; i <= numbers; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log ("fooBar");
        }
        else if (i % 3 === 0) {
            console.log ("foo");
        }
        else if (i % 5 === 0) {
            console.log ("bar");
        }
        else {
            console.log (i);
        }
    }
}

divisible(50);