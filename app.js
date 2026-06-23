const greeting = document.getElementById("greeting");
const cta = document.getElementById("cta");

function helloWorld {
  return `Hello, world!`
}

cta.addEventListener("click", () => {
  greeting.textContent = sayHello("world");
});
