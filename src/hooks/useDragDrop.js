// src/hooks/useDragDrop.js
import { useDrag, useDrop } from 'react-dnd';

const useDragDrop = (type, item, index, moveItem) => {
  const [, ref] = useDrag({
    type,
    item: { ...item, index },
  });

  const [, drop] = useDrop({
    accept: type,
    hover(draggedItem) {
      if (draggedItem.index !== index) {
        moveItem(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return [ref, drop];
};

export default useDragDrop;
