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
// cap.petersTeam();

let ironMan = {
    name: 'Tony',
    team: 'Iron Man'
}

// call:
// cap.petersTeam.call(ironMan, 'Binod' , 'Sowmya');

// apply:
// let teamMem = [];
// cap.petersTeam.apply(ironMan, ['Binod', 'Kumar']);

// bind:

let boundFn = cap.petersTeam.bind(ironMan);

boundFn('Binod', 'Sowmya');






