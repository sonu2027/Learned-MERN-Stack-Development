// 3. Age in Days.
// Write a JavaScript function called ageInDays that accepts an object containing a person's first name, last
// name, and age in years as input. The function should concatenate the first and last name into a single string
// and store it in a variable called fullName. It should then calculate the person's age in days and store it in a
// variable called ageInDays.
// The ageInDays function should then return a callback function that logs a message to the console. The
// message should include the person's full name and age in days, and should be in the format: "The person's full
// name is [full name] and their age in days is [age in days]."
// Note that the ageInDays function should not log the message to the console directly, but should instead return
// a callback function that can be used to log the message at a later time.

function logresult(fullName, age) {
  console.log(
    `The person's full name is ${fullName} and their age in days is ${
      age * 365
    }`
  );
}

function ageIndays(person, logresult) {
  const FullName = person.FirstName.concat(` ${person.LastName}`);
  const age = person.age;
  logresult(FullName, age);
}

const person = {
  FirstName: "Sonu",
  LastName: "Mondal",
  age: 21,
};
ageIndays(person, logresult);
