let ladder = {
    step: 0,
    UP () {
        this.step++;
        return this;
    },
    DOWN () {
        this.step--;
        return this;

    },
    showStep: function() {
        console.log(this.step);
        // return this.step;
    }
}

// ladder.UP();
// ladder.UP();
// ladder.showStep();
// ladder.DOWN();
// ladder.showStep();

ladder.UP().UP().UP().DOWN().showStep();
// ladder.showStep()