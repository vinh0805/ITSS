import React from 'react';

import useStorage from '../hooks/storage';

function Todo() {
  const [items, getCurrentItem, setNextItem, setPreviousItem] = useStorage();

  return (
    <div className="block">
      <label>
      list student: [{items.toString()}]
    </label>
    <br/>
      <label>
        order: {getCurrentItem().index}
    </label>
    <br/>
    <label>
        name: {getCurrentItem().name}
    </label>
    <br/>
    <button onClick={() => {
      setNextItem()
    }}>next</button>
    <button onClick={() => {
      setPreviousItem()
    }}>previous
    </button>
    </div>
  );
}

export default Todo;