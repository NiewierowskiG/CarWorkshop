const DropZone = ({ onDrop }) => (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        // Prevent the default behavior (which would be to navigate to the dropped file)
        e.preventDefault();
  
        // Get the data that was transferred during the drag operation
        const data = e.dataTransfer.getData('text/plain');
  
        // Invoke the onDrop callback with the data
        onDrop(data);
      }}
    >
      Drop here
    </div>
  );

export default DropZone;