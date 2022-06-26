const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const myButton = document.getElementById('btn')
const color = document.querySelector(".color")

myButton.addEventListener("click", () => {
  //get random number between 0 -3 
  const randomNumber = Math.floor(Math.random()*colors.length)
  console.log(document.body)
  console.log(document.body.style)
  document.body.style.backgroundColor = colors[randomNumber]
  color.textContent = colors[randomNumber]
})

