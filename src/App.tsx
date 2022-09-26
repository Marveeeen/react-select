import { useState } from "react";
import { Select } from "./Select";

const options = [
  {
    label: "First",
    value: 1,
  },
  {
    label: "Second",
    value: 2,
  },
  {
    label: "Third",
    value: 3,
  },
  {
    label: "Fourth",
    value: 4,
  },
  {
    label: "Fifth",
    value: 5,
  },
  {
    label: "Sixth",
    value: 6,
  },
];

function App() {
  const [value, setValue] = useState(options[0])

  const handleChange = (e: any) => {
    setValue(e)
  }

  return (
    <>
      <Select options={options} value={value} onChange={handleChange} />
    </>
  );
}

export default App;
