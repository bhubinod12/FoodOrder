// why use case of bind , apply , call -> borrow features 

let cap = {
    name: 'Binod',
    team: 'Cap',
    petersTeam: function(mem1, mem2) {
        // console.log(mem1, mem2);
        console.log(`Hey ${this.name} I am your neighborhood's 
        spiderman and i belong to ${this.team}'s team with members ${mem1} ${mem2}`);
    }
}

let ironMan = {
    name: 'Tony',
    team: 'Iron Man'
}

// cap.petersTeam('ironMan', 'petersMan');

// borrow the method only once with defined number of param 
// use petersTeam method -> only once 

// cap.petersTeam.call(ironMan, 'ironMan', 'petersMan');

/****
 * 
 * Apply: borrow the method only once with n no number of param 
 * **/

// let membersArray=["thor", "loki"]

cap.petersTeam.apply(ironMan, ["thor", "loki"]);

// cap.petersTeam.apply(ironMan, membersArray);

/*****
 * bind : making permanent copy of that method to use multiple times
 * ******/

// let membersArray=["thor", "loki"];
// const bindFn = cap.petersTeam.bind(ironMan);

// bindFn("cap", "war machine");

// let arr=[] -> Array
// let obj ={} -> Object
// function fn(){} -> Functions
