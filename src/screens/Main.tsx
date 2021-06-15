import React, {useCallback} from "react";
import {Group2, Group2Value} from "../components/Group2";
import {Grid} from "@material-ui/core";
import {Group1} from "../components/Group1";
import {Group3} from "../components/Group3";

const Main: React.FC = () => {
  const [group1Value, setGroup1Value] = React.useState<number>(1);
  const [group2Values, setGroup2Values] = React.useState<Group2Value[]>([]);

  const changeValues = useCallback((values,index)=>{
    const newValues = [...group2Values];
    newValues[index] = values;

    setGroup2Values(newValues);
  },[group2Values]);

  return (
    <div className="App">
      <Grid container direction="column" alignContent="flex-start">
        <Group1 value={group1Value} setValue={setGroup1Value} />
        {[...Array(group1Value)].map((v, index) => {
          return <Group2
            key={`group2_${index}`}
            index={index}
            onSetValues={(values) => changeValues(values,index)}
          />;
        })}
        <Group3 onButtonPress={() => {
          const trimmedValues = [...group2Values];
          trimmedValues.splice(group1Value);
          console.log(trimmedValues);
        }} />
      </Grid>
    </div>
  );
}

export { Main };
