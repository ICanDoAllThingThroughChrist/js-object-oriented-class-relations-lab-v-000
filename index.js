//counter variables to count drivers
let driverID = 0
//counter variable to count passengers
let passengerID = 0
//counter variable to count trips
let tripID = 0
// initialize store with key of items and users that each point to an empty array
let store = {drivers: [], passengers: [], trips: []}

class Driver {
  constructor(name) {
      // increment driverId, then assign the driverId as the instance's id
    this.id = ++driverID
    this.name = name
     // insert in the driver to the store
    store.drivers.push(this)
  }
  //how would we implement a method on our driver object that finds the associated trips?
  trips() {
    return store.trips.filter(//go through store and search through all trips
      function(trip) {//go through store and search through all trips
        return trip.driverId === this.id //to find a trip's driverID that "strictly equates"
        //with this instance's driverID
      }.bind(this)  //use bind method on trip's instance to this driver instance
    )
  }
  passengers() {
    //return this Driver instance trips by map method
    //with passed in argument of
    //callback anonymous function object with trip argument
    return this.trips().map(function(trip) {
      //what is this?
      debugger;
      //{The map() method creates a new array with
      //the results of calling a function for every array element.
      //The map() method calls the provided function once for each element in an array, in order.
      return trip.passenger()    //that returns trip's passenger value
    })
  }
}
class Passenger {
  //can create a Passenger with a name
  constructor(name) {
    this.id = ++passengerID//adds a numerical id to each passenger
    //adds a unique id to each passenger
    this.name = name //assigns this Passenger name attribute value to name argument
    store.passengers.push(this)//adds this passenger instance object to the store's collection of passengers
  }
  trips() {
    return store.trips.filter(
      function(trip) {
        return trip.passengerId === this.id
      }.bind(this)  //use bind method on trip's instance to this driver instance
    )
  }
  drivers() {
    return this.trips().map(function(trip)
    //{The map() method creates a new array with
    //the results of calling a function for every array element.
    //The map() method calls the provided function once for each element in an array, in order.
      return trip.driver() //return driver of the trip instance
    })
  }


class Trip {
  constructor(driver, passenger) {
    this.id = ++tripID
    if (driver) {
      this.driverId = driver.id
    }
    if (passenger) {
      this.passengerId = passenger.id
    }
    store.trips.push(this)
  }

  driver() {
    //now let's write a method trip.driver() such that the driver associated with the trip is returned.
    return store.drivers.find(
      function(driver) {
        return driver.id === this.driverId//to find a stores driverID that "strictly equates"
        //with this Trip's instance's driverID
      }.bind(this)
    )
  }

  passenger() {
    return store.passengers.find(
      function(passenger) {
        return passenger.id === this.passengerId
      }.bind(this)
    )
  }
}
