const tekstContainer = document.getElementById('myid');
 
for (let i = 0; i < 100; i++) {
  const tekst = document.createElement('p');
  tekst.textContent = " Het number is " + (i + 1);
  tekstContainer.appendChild(tekst);
}