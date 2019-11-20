import { useState } from "react";

export const useSelector = value => {
  const [selectedValue, setSelectedValue] = useState(value);

  return {
    selectedValue,
    onChange: e => {
      setSelectedValue({ [e.target.name]: e.target.value });
    }
  };
};
// setSelectedValue({
//   ...selectedValue,
//   [event.target.name]: event.target.value
// });
// console.log(selectedValue);
