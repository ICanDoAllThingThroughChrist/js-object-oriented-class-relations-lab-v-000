//drivers
//creating a new driver
//can create a Driver with a name
//ReferenceError: Driver is not defined@test/indexTest.js:12:11
let store = {passengers: [], drivers: [], trips: []}
// initialize store with key of items and users that each point to an empty array

let driverId = 0
let passengerId = 0
let tripId = 0

class Driver {
  constructor(name){
    this.id = ++driverId
    this.name = name
    store.drivers.push(this)
  }
  trips(){
    return store.trips.filter(
      function(trip) {
        return trip.driverId === this.id;
      }.bind(this)
    );
  }
  passengers() {
    // debugger;
   return this.trips().map(function(trip) {
    // debugger;
     return trip.passenger()
   })
 }
}

class Passenger {
  constructor(name){
    this.id = ++passengerId
    this.name = name
  store.passengers.push(this)
  }
  trips(){
    return store.trips.filter(
      function(trip) {
        return trip.passengerId === this.id;
        debugger;
      }.bind(this)
    );
  }
}

class Trip {
   constructor(driver, passenger){
      //  debugger;
       this.id = ++tripId
       store.trips.push(this)
        // debugger;
      if(driver){
        this.driverId = driverId
          // debugger;
      }
      if(passenger){
        this.passengerId = passengerId
        // debugger;
      }
   }
  passenger(){
   return store.passengers.find(
           function(passenger) {
               return passenger.id === this.passengerId;
           }.bind(this)
       );
  }
  driver() {
     //now let's write a method trip.driver() such that the driver associated with the trip is returned.
     return store.drivers.find(//find the first driver of store's collection of drivers by cb fn(driver) object
       function(driver) {
         return driver.id === this.driverId//to find a stores driverID that "strictly equates"
         //with this Trip's instance's driverID
       }.bind(this)
     )
   }
}
