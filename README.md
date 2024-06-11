# VERBS What actions can a character in a game take?
# AJECTIVE what attributes could a character have?

let HEALTH = 100

What actions could we take that affect our health?


Falling and hitting the ground hard can cause damage.


if( hit:GROUND && velocity > MAX_SAFE){
    takeDamage(5 * velocity)
}

REST API

PUT /api/player/123
{
    actions: [
        {
            ts: 123123123,
            action: "move",
            direction: [-1, 0]
        },
        {
            ts: 123123124,
            action: "shoot",
            direction: [1, 0]
        }
    ]
}
RETURNS
{
    world: {
        other_people: [{...}, {...}]
    },
    player: {location:[0,0], direction[0,0], health:100, ammo: 99}
}

class Person{

    move(directionAmountVector){
        const newLocation = this.location.add(directionAmountVector)
        if(this.checkCollision(newLocation)){
            this.location = newLocation;
        }
    }

    shoot(directionAmountVector){
        const line = this.location.add(directionAmountVector);
        collidedWith = this.checkCollision(line)
        if(collidedWith){
            collidedWith.takeDamage(this.weaponInHand.damageAmount)
        }
    }

    takeDamage(amount){
        this.heath -= amount
        this.checkDeath()
    }
    checkDeath(){
        if (this.health <= 0){
            this.dead = true;
        }
    }
    heal(medKitSize = 25){
        const newHealth = this.health + medKitSize;
        this.health = newHealth > 100 ? 100 : newHealth;
    }
}

monster.bite(person){
    person.takeDamage(10)
}
