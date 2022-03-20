const button1 = document.getElementById('button1');

// Click Event Listenter
button1.addEventListener('click', function(event) {
  // WHAT HAPPENS WHEN YOU CLICK GOES HERE
  console.log(event);
  const h3 = document.createElement('h3');
  h3.textContent = "Foo";
  document.body.appendChild(h3);
  
})

const button2 = document.getElementById('button2');

// Click Event Listenter
button2.addEventListener('click', function(event) {
  // WHAT HAPPENS WHEN YOU CLICK GOES HERE
  console.log(event);
  const h3 = document.createElement('h3');
  h3.textContent = "Bar";
  document.body.appendChild(h3);
  
})

const button3 = document.getElementById('button3');

// Click Event Listenter
button3.addEventListener('click', function(event) {
  // WHAT HAPPENS WHEN YOU CLICK GOES HERE
  console.log(event);
  const h2 = document.createElement('h2');
  h2.textContent = "Foobar";
  document.body.appendChild(h2);
  
})
