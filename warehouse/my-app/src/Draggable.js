import React, { useRef } from 'react';

const Draggable = ({ children, onDrop }) => {
  const draggableElement = useRef(null);

  const handleDragStart = (e) => {
    // Set the data that will be transferred during the drag operation
    e.dataTransfer.setData('text/plain', 'Dragged Element');

    // Add a custom class to the dragged element to change its appearance
    draggableElement.current.classList.add('dragging');
  };

  const handleDragEnd = (e) => {
    // Remove the custom class from the dragged element
    draggableElement.current.classList.remove('dragging');
  };

  const handleDragOver = (e) => {
    // Prevent the default behavior (which would be to navigate to the dropped file)
    e.preventDefault();

    // Add a custom class to the drop target to change its appearance
    e.currentTarget.classList.add('over');
  };

  const handleDrop = (e) => {
    // Prevent the default behavior (which would be to navigate to the dropped file)
    e.preventDefault();

    // Remove the custom class from the drop target
    e.currentTarget.classList.remove('over');

    // Get the data that was transferred during the drag operation
    const data = e.dataTransfer.getData('text/plain');

    // Use the data in some way (for example, append it to the drop target)
    onDrop(data);
  };

  return (
    <div
      ref={draggableElement}
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {children}
    </div>
  );
};

export default Draggable
