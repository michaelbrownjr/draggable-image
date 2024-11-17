document.addEventListener('DOMContentLoaded', (event) => {
  const images = document.querySelectorAll('.draggable-image');

  images.forEach(image => {
    let isDragging = false;
    let offsetX, offsetY;
    let initialX; // Store initial X position

    image.addEventListener('mousedown', (e) => {
      isDragging = true;
      offsetX = image.offsetLeft - e.clientX;
      offsetY = image.offsetTop - e.clientY;
      initialX = e.clientX; // Capture initial drag position
    });

    document.addEventListener('mouseup', (e) => {
      if (isDragging) {
        isDragging = false;

        // Calculate drag distance
        const finalX = e.clientX;
        const dragDistance = finalX - initialX;

        // Check direction of drag (left or right)
        if (dragDistance > 0) {
          // Dragged right
          console.log('Image dragged right');
          // Add your logic here for dragging right
        } else if (dragDistance < 0) {
          // Dragged left
          console.log('Image dragged left');
          // Add your logic here for dragging left
        } else {
          // No horizontal drag, do nothing or handle click
          console.log('Image clicked or dragged vertically');
        }
      }
    });

    document.addEventListener('mousemove', (e) => {
      if (!isDragging) return;

      e.preventDefault();

      const newX = e.clientX + offsetX;
      image.style.left = `${newX}px`;
    });
  });
});