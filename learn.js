class MiniDress {
    constructor (dressName, location, whoWornTheDress) {
        this.dressName = dressName;
        this.location = location;
        this.isFlare = 100;
        this.flareLevel = flareLevel;
        this.whoWoreTheDress = ["Amy"];
        this.dresLength =dressLength;
        this.flares = {
            moveWhileWalking: 20,
            moveWhileDansing: 30,
            moveWhileRunning: 20,
            moveWhileStanding: 10
        }
    };
}

dressMovement (move, isFlare = false); {
    if (this.isFlare == false) {
        return console.log("This dress is straight and too close to the body");
    }
}
const dressMovement = this.flareLevel - this.flare[move];
if (this.flareLevel - this.flare[move] < 0 && isFlare == false) {
    console.log(`This dress is too close to the body to ${move}`);
} else {
    this.flareLevel = dressMovement;
    console.log(`Less dress movement, but ${move} is still possible`);
}

addWhoWoreTheDress(WhoSname); {
    this.whoSname.push(whoSname)
    console.log(`My friend name is ${whoSname}, she is wearing the same dress as me`);
}

class LongDress extends MiniDress {
    constructor();
        super(dressName, location, whoWornTheDress) {
        this.flareLevel = 200
        this.flares = {
            moveWhileWalking: 40,
            moveWhileDansing: 60,
            moveWhileRunning: 40,
            moveWhileStanding: 20
        }
    };
}

dressMovement (move, isFlare = false); {
    if (this.isFlare == false) {
        return console.log("This dress is straight and too close to the body");
    }
}
const dressMovement = this.flareLevel - this.flare[move];
if (this.flareLevel - this.flare[move] < -100 && isFlare == false) {
    console.log(`This dress is too close to the body to ${move}`);
} else {
    this.flareLevel = dressMovement;
    console.log(`Less dress movement, but ${move} is still possible`);
}

addWhoWoreTheDress(WhoSname); {
    this.whoSname.push(whoSname)
    console.log(`My friend name is ${whoSname}, she is wearing the same dress as me`);
}

const miniDress = new miniDress ("Charmin", "DinnerGalla", "Amy");
const longDress = new longDress ("Cheetah", "DinnerGalla", "Tara");

console.log(miniDress);
console.log(longDress);



