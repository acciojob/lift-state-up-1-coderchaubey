import React, { useState } from 'react';

// Child component
const Child = ({setShowModal }) => {
  const handleClick = () => {
    setShowModal(true);
    
  };

  return (
    <div><p>Child Component</p>
      <button onClick={handleClick}>Show Modal</button>
    </div>
  );
};

// Parent component
const Parent = () => {
  const [showModal, setShowModal] = useState(false);

  console.log(showModal);
  return (
    <div>
      <p>Parent Component</p>
      <Child setShowModal={setShowModal} />
    </div>
  );
};

export default Parent;