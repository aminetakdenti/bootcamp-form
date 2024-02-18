import { useState } from "react";

// Custom hook to manage dropdown state
function useDropdown(initialValue) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return {
    value,
    onChange: handleChange,
  };
}

export default useDropdown;
