 function main() {
  const counter = document.querySelector('.counter');
  let time = localStorage.getItem('counter') || 0;

  function updateCounter() {
    counter.textContent = time;
    localStorage.setItem('counter', time);
  }

  setInterval( () => {
    time++;
    updateCounter();
  }, 1000); 

  updateCounter()
}

window.addEventListener('load', main);  
