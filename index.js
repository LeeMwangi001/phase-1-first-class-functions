function receivesAFunction(callback){
    return callback();
}
receivesAFunction(function (){return `Callback functions have been really hard to comprehend.`})

function returnsANamedFunction(){
    return (function cb(){return "This is a named Function"});
}

function returnsAnAnonymousFunction(){
    return (function (){return "This is an anonymus function"})
}
