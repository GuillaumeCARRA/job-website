import React from 'react';

import './checkbox.css';

function CheckboxGroup({ name, options, selectedOptions, onChange }) {
  const handleCheckboxChange = (value) => {
    const updatedSelectedOptions = selectedOptions.includes(value)
      ? selectedOptions.filter((item) => item !== value)
      : [...selectedOptions, value];

    onChange(updatedSelectedOptions);
  };

  return (
    <div className='checkbox'>
      {options.map((option) => (
        <label className='checkbox__container' key={option.value}>
          <input
            className='checkbox__content'
            type="checkbox"
            name={name}
            value={option.value}
            checked={selectedOptions.includes(option.value)}
            onChange={() => handleCheckboxChange(option.value)}
            onClick={(e) => e.stopPropagation()}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
}

export default CheckboxGroup;
