// 1. Create a class function SpaceShip
// - should set two properties: name and topSpeed
// - should have a method accelerate that logs to the console 
//   `${name} moving to ${topSpeed}`

class SpaceShip {
  constructor(name, topSpeed){
  this.name = name;
  this.topSpeed = topSpeed; 
}

// 2. Call the constructor with a couple ships, 
// and call accelerate on both of them.


  accelerate() {
      const {name, topSpeed}= this 
      
      console.log(`${name} moving to ${topSpeed}`) 
    }
  }

  const enterprise = new SpaceShip("Enterprise", 1000)
  const milleniumFalcon = new SpaceShip ("Millenium Falcon", 5000)

  enterprise.accelerate("name", "topSpeed") 
  milleniumFalcon.accelerate("name", "topSpeed") 

