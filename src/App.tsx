import { useState } from "react";
import { Select } from "./components/Select/Select";
//@ts-ignore
import { options } from "./data";

function App() {
  const [value, setValue] = useState(options[0]);
  const [multiValue, setMultiValue] = useState([options[0]]);

  const handleChange = (e: any) => {
    setValue(e);
  };

  const handleMultiValue = (e: any) => {
    setMultiValue(e);
  };

  return (
    <>
      <Select options={options} value={value} onChange={handleChange} />
      <br />
      <Select
        multiple
        options={options}
        value={multiValue}
        onChange={handleMultiValue}
      />
    </>
  );
}

export default App;
