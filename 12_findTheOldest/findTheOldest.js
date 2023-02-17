const findTheOldest = function(people) {
    function getAge(birth, death){
        if(!death){
            return 2023 - birth
        }
        return death - birth
    }


   let oldest =  people.reduce((oldestPerson, currentPerson)=>{
        oldestAge = getAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath);
        currentPersonAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        return oldestAge < currentPersonAge ? currentPerson : oldestPerson;
   })

   return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
