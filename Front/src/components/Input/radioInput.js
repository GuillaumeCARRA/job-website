import React from 'react';

function RadioInput({ name, options, selectedValue, onChange }) {
  const handleRadioChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div>
      {options.map((option) => (
        <label key={option.value}>
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={handleRadioChange}
            onClick={(e) => e.stopPropagation()}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
}

export default RadioInput;
