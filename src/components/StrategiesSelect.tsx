import React from "react";
import { useQuery } from "@apollo/client";
import {FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup} from "@material-ui/core";
import {StrategiesSelectQuery} from "./__generated__/StrategiesSelectQuery";
import {strategiesVar} from "../services/apollo";
import {STRATEGIES_SELECT_FRONTEND_DATA_LOCAL} from "../services/query";

// TODO - Rename to StrategyCount
export default function StrategiesSelect(){

    const { loading, error, data } = useQuery<StrategiesSelectQuery>(STRATEGIES_SELECT_FRONTEND_DATA_LOCAL);

    if(loading) {
        return <div>loading</div>
    }

    if(error) {
        return <div>error</div>
    }

    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">Group 1</FormLabel>
            <RadioGroup aria-label="group1" name="group1" value={data?.strategies}>
                <Grid container direction="row">
                    {[...Array(10)].map((v, index) => {
                        const option = index + 1;
                        return <FormControlLabel key={`group1_radio_${option}`} value={option.toString()} onChange={({target}) => {
                            strategiesVar((target as any).value);
                        }} control={<Radio/>} label={option.toString()}/>;
                    })}
                </Grid>
            </RadioGroup>
        </FormControl>
    )

}
