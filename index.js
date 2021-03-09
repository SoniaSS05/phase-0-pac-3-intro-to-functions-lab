function shout(greet) {
    return greet.toUpperCase();
}

function whisper(greet) {
    return greet.toLowerCase();
}

function logShout(greet) {
    console.log(greet.toUpperCase());
}

function logWhisper(greet) {
    console.log(greet.toLowerCase());
}

function sayHiToGrandma(greet){
    switch(greet){
        case greet.toLowerCase():{
            return('I can\'t hear you!'); 
        }
        case greet.toUpperCase():{
            return('YES INDEED!');
        }
        case ("I love you, Grandma."):{
            return('I love you, too.');
        }
    }
}

console.log(shout("Hola"));
console.log(whisper("Hola"));
logShout("Hola");
logWhisper("Hola");
console.log(sayHiToGrandma("I love you, Grandma."));


