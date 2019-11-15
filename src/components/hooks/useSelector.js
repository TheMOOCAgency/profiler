import { useState } from "react";

export default event => {
  const [selectedValue, setSelectedValue] = useState(null);
  setSelectedValue(event.target.value);
  return [selectedValue];
};
