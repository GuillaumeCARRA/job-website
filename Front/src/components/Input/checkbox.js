import React from 'react';

function CheckboxGroup({ name, options, selectedOptions, onChange }) {
  const handleCheckboxChange = (value) => {
    const updatedSelectedOptions = selectedOptions.includes(value)
      ? selectedOptions.filter((item) => item !== value)
      : [...selectedOptions, value];

    onChange(updatedSelectedOptions);
  };

  return (
    <div>
      {options.map((option) => (
        <label key={option.value}>
          <input
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
