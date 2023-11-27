const greenBlock = document.getElementById('greenBlock');
const screenWidth = window.innerWidth;
const blockWidth = 50;
let direction = 1; // 1 for moving right, -1 for moving left

function moveGreenBlock() {
  let currentLeft = parseInt(getComputedStyle(greenBlock).left);

  // Check if the block is at the end of the screen
  if (currentLeft + blockWidth >= screenWidth && direction === 1) {
    direction = -1;
  } else if (currentLeft <= 0 && direction === -1) {
    direction = 1;
  }

  // Move the block (slower movement)
  greenBlock.style.left = currentLeft + 1 * direction + 'px';

  // Repeat the move
  requestAnimationFrame(moveGreenBlock);
}

// Add click event listener to change color
greenBlock.addEventListener('click', changeColor);

function changeColor() {
  const randomColor = getRandomColor();
  greenBlock.style.backgroundColor = randomColor;
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Start the animation
moveGreenBlock();
