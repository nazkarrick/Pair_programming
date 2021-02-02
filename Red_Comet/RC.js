/////OPEN space_battle.HTML DOCUMENT TO BROWSER AND OPEN DEVELOPER TOOLS ->Console tab TO SEE THE INDIVIDUAL ACTIONS
///TURN BY TURN MECHANCIS ARE PARTIALLY COMPLETE.

///// Pilot Specifications and fight Menue/////////
class Ship {
    constructor (mecha) {
        this.mecha = mecha;
        this.hull = 20;
        this.accuracy = 0.7;
        this.firepower = {
            thirtyPercent: 3,
            fortyPercent: 3.5,
            hunnidPercent: 5
        }
    }
    static interCom () {
        alert('Captain! A Mobile Suit and 4 mechs in pursuit!');
    }
    skirmish (enemy) {
        if (Math.random() <= this.accuracy) {
            console.log(this.mecha + ' ' + 'Firing 360mm Bazooka');
            let hullDamage = this.firepower[Object.keys(this.firepower)[Math.floor(Math.random() * Object.keys(this.firepower).length)]];
            console.log(enemy.mecha + ' ' + 'received damage from 360mm shell!');
            enemy.hull -= hullDamage;
            } else {
                console.log('Brace for impact!');
                skirmish (enemy);
            } if (enemy.hull < 0) {
                alert('Mobile Suit destroyed!...');
                retreat();
                skirmish2();
            } 
    }
    skirmish2 (alien) {
        if (Math.random() <= this.accuracy) {
            console.log(this.mecha + ' ' + 'Firing 360mm Bazooka');
            let hullDamage = this.firepower[Object.keys(this.firepower)[Math.floor(Math.random() * Object.keys(this.firepower).length)]];
            console.log(alien.mecha + ' ' + 'Confirmed hit!');
            alien.hull -= hullDamage;
            } else {
                console.log('Brace for impact!');
                skirmish (enemy);
            } if (alien.hull < 0) {
                alert('Mobile Suit destroyed!...');
                skirmish3();
            } 
    }
    skirmish3 (alienTwo) {
        if (Math.random() <= this.accuracy) {
            console.log(this.mecha + ' ' + 'Firing 360mm Bazooka');
            let hullDamage = this.firepower[Object.keys(this.firepower)[Math.floor(Math.random() * Object.keys(this.firepower).length)]];
            console.log(alienTwo.mecha + ' ' + 'received damage from 360mm shell!');
            alienTwo.hull -= hullDamage;
            } else {
                console.log('Brace for impact!');
                skirmish (enemy);
            } if (alienTwo.hull < 0) {
                alert('Mobile Suit destroyed!...');
                alert(pilot);
            } 
    }
    skirmish4 (alienThree) {
        if (Math.random() <= this.accuracy) {
            console.log(this.mecha + ' ' + 'Firing 360mm Bazooka');
            let hullDamage = this.firepower[Object.keys(this.firepower)[Math.floor(Math.random() * Object.keys(this.firepower).length)]];
            console.log(alienThree.mecha + ' ' + 'received damage from 360mm shell!');
            alienThree.hull -= hullDamage;
            } else {
                console.log('Brace for impact!');
                kirmish (enemy);
            } if (alienThree.hull < 0) {
                alert('Mobile Suit destroyed!...');
                alert(pilot);
            } 
    }
    skirmish5 (alienFour) {
        if (Math.random() <= this.accuracy) {
            console.log(this.mecha + ' ' + 'Firing 360mm Bazooka');
            let hullDamage = this.firepower[Object.keys(this.firepower)[Math.floor(Math.random() * Object.keys(this.firepower).length)]];
            console.log(alienFour.mecha + ' ' + 'received damage from 360mm shell!');
            alienFour.hull -= hullDamage;
            } else {
                console.log('Brace for impact!');
                skirmish (enemy);
            } if (alienFour.hull < 0) {
                alert('Mobile Suit destroyed!...');
                alert(pilot);
            } 
    }
}
/////Neurons Misfiring, Can't seem to put the retreat function in the proper place to initiate option between rounds///////
function retreat () {
    const choice = prompt('Retreating?', 'yes / no');
    if (choice == 'yes') {
        throw 'Red Comet Lives On'
    } else {
        throw 'WARNING! rubber duck lost, Programmer can\'t complete Code!'
    }
}
////////////////Mobile Suits Specifications Below//////////////
class MSsuit {
    constructor(mecha) {
        this.mecha = mecha;
        this.hull = 3.5;
        this.firepower = [2, 2.5, 3, 3.5, 4];
        this.accuracy = 0.6;
    }
    skirmish (enemy) {
        if (Math.random() <= this.accuracy) {
            console.log(this.mecha + ' ' + 'Firing Smoothbore Cannon');
            let hullDamage = this.firepower[Object.keys(this.firepower)[Math.floor(Math.random() * Object.keys(this.firepower).length)]];
            console.log(enemy.mecha + ' ' + 'received damage from 300mm shell!');
            enemy.hull -= hullDamage;
            } else {
                console.log('Tsk! He is too agile! Dang');

            }
    }
    } 

let pilot = new Ship('MS-09RS');
let mobileSuit = new MSsuit('Barbatos');
let mobileSuit2 = new MSsuit('Leopard');
let mobileSuit3 = new MSsuit('Einz');
let mobileSuit4 = new MSsuit('Zwei');
let mobileSuit5 = new MSsuit('Drei');
Ship.interCom();
pilot.skirmish(mobileSuit);
mobileSuit.skirmish(pilot);
console.log(pilot);
pilot.skirmish2(mobileSuit2);
mobileSuit2.skirmish(pilot);
console.log(pilot);
pilot.skirmish3(mobileSuit3);
mobileSuit3.skirmish(pilot);
console.log(pilot);
pilot.skirmish4(mobileSuit4);
mobileSuit4.skirmish(pilot);
console.log(pilot);
pilot.skirmish5(mobileSuit5);
mobileSuit5.skirmish(pilot);