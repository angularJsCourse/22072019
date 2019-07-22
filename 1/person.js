function person(details){
     this.name = details['name']
     this.age = details['age']
     this.bike =details['bike'] 
     this.password = details['password']
     this.car =details['car']
    if(details['male'])
        this.gender = 'male'
    if(details['female'])
         this.gender = 'female'
}

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
    set name  (name)  { this._name = name}
    get name  ()       { return this._name}
    set age  (name)  { this._name = name}
    get age  ()       { return this._age}
    set bike  (name)  { this._bike = bike}
    get bike  ()       { return this._bike}
    set password  (name)  { this._password = password}
    get password  ()       { return this._password}
    set car  (name)  { this._car = car}
    get car  ()       { return this._car}
    get gender  ()       { return this._gender}
  }

function clickPerson(){
    var pers = new person({
            name: document.getElementById("nameTxt").value ,
            age: document.getElementById("ageTxt").value   ,
            password: document.getElementById("passwordTxt").value,
            male: document.getElementById("maleRadio").checked,
            female: document.getElementById("femaleRadio").checked,
            car: document.getElementById("car").options[document.getElementById("car").selectedIndex].value,
            bike:document.getElementById("bike").checked ,
        }
    )
    console.log(pers)


    var classPers = new PersonClass({
        name: document.getElementById("nameTxt").value ,
        age: document.getElementById("ageTxt").value   ,
        password: document.getElementById("passwordTxt").value,
        male: document.getElementById("maleRadio").checked,
        female: document.getElementById("femaleRadio").checked,
        car: document.getElementById("car").options[document.getElementById("car").selectedIndex].value,
        bike:document.getElementById("bike").checked ,
    })
    console.log(classPers)
    console.log(classPers.name)






}