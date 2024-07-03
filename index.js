function spy(hi){
    return "hello there"
}

function receivesAFunction(argument){
  return argument()
}
function random(){
    return function greeting(){
        return "Hello there"
    }
}

function returnsANamedFunction(){
     return random()
}

function returnsAnAnonymousFunction(){
    return function(){

    }
}