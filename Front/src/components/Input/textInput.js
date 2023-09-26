// TextInput.js
import React from 'react';

function TextInput({ name, placeholder, value, onChange }) {
  return (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      value={value || ''}
      onChange={onChange}
      onClick={(e) => e.stopPropagation()}
    />
  );
}

export default TextInput;
