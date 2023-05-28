
import { useState } from "react";
import "./textField.css";

const TextField = ({ placeHolder, width, id, action, type, pattern, defaultValue }) => {
  const [value, setValue] = useState(defaultValue || "");

  const handleInputs = (e) => {
    const inputValue = e.target.value;
    if (pattern && !new RegExp(pattern).test(inputValue)) {
      setValue(""); 
      return;
    }
    setValue(inputValue);
    action(inputValue);
  };

  return (
    <div className="text-field" style={{ width: width === undefined ? "auto" : width }}>
      <input
        autoComplete="off"
        id={id}
        type={type === undefined ? "text" : type}
        placeholder={placeHolder}
        value={value}
        onChange={handleInputs}
        pattern={pattern}
        title="Firstname can only contain letters."
      />
    </div>
  );
};

export default TextField;
