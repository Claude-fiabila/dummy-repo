const greeting = document.getElementById("greeting");
const cta = document.getElementById("cta");

function sayHello(name) {
  return `Hello, ${name}!`;
}

cta.addEventListener("click", () => {
  greeting.textContent = sayHello("world CLM");
});
