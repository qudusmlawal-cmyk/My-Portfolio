const myname = "Qudus"

const color = ["green", "orange", "blue"]

console.log("This is from javascript file")
console.log("welcome " + myname)
console.log(color)

const greetUser = (myname) => {
  console.log(myname)
}
greetUser("Nigeria")

const addNumbers = (number1, number3, number2) => {
  console.log(number1 + number2)
  console.log(number3)
}

addNumbers(1, 2, 3)

const colors = ["green", "orange", "blue"]

colors.forEach(colors) => {
  console.log('Welcome, $(colors)')
}