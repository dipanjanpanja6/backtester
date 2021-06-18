import React from "react";
import {Grid} from "@material-ui/core";
import StrategiesSelect from "../components/StrategiesSelect";
import StrategySelect from "../components/StrategySelect";

export default function ComboForm(){

    return (
        <Grid container direction="column" alignContent="flex-start">
            <StrategiesSelect />
            <StrategySelect />
        </Grid>
    )

}
