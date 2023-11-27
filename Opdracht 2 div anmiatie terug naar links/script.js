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

  // Move the block
  greenBlock.style.left = currentLeft + 5 * direction + 'px';

  // Repeat the move
  requestAnimationFrame(moveGreenBlock);
}

// Start the animation
moveGreenBlock();
