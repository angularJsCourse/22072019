class PersonClass {
    constructor(personDetails) {
        this._name = personDetails['name']
        this._age = personDetails['age']
        this._bike =personDetails['bike'] 
        this._password = personDetails['password']
        this._car = personDetails['car']
        if(personDetails['male'])
            this._gender = 'male'
        if(personDetails['female'])
            this._gender = 'female'
       }
    // set name  (name)  { this._name = name}
    // get name  ()       { return this._name}
    // set age  (age)  { this._age = age}
    // get age  ()       { return this._age}
    // set bike  (name)  { this._bike = bike}
    // get bike  ()       { return this._bike}
    // set password  (pass)  { this._password =pass}
    // get password  ()       { return this._password}
    // set car  (car)  { this._car = car}
    // get car  ()       { return this._car}
    // get gender  ()       { return this._gender}
    // set gender (gen) {}
  }
