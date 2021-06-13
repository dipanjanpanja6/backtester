import React from 'react';
import './App.css';
import {Autocomplete} from "@material-ui/lab";
import {TextField} from "@material-ui/core";

const arr1 = ['item 1', 'item 2', 'item 3'];
const arr2 = ['item 1', 'item 2', 'item 3'];
const arr3 = ['item 1', 'item 2', 'item 3'];

function App() {
  const [input1, setInput1] = React.useState<string | null>(null);
  const [input2, setInput2] = React.useState<string | null>(null);
  const [input3] = React.useState<string | null>(null);

  return (
    <div className="App">
      <Autocomplete
        id="input1"
        value={input1}
        options={arr1}
        renderInput={(params) => <TextField {...params} label="Input 1" variant="outlined"/>}
        onChange={(e, v) => setInput1(v)}
      />
      {input1 && <Autocomplete
        id="input2"
        value={input2}
        options={arr2}
        renderInput={(params) => <TextField {...params} label="Input 2" variant="outlined"/>}
        onChange={(e, v) => setInput2(v)}
      />}
      {input2 && <Autocomplete
        id="input3"
        value={input3}
        options={arr3}
        renderInput={(params) => <TextField {...params} label="Input 3" variant="outlined"/>}
        onChange={(e, v) => {
          setInput1(null);
          setInput2(null);
        }
        }
      />}
    </div>
  );
}

export default App;
