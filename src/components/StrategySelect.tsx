import React, {useState} from "react";
import {useQuery, useReactiveVar} from "@apollo/client";
import gql from "graphql-tag";
import {FormControl, FormLabel, TextField} from "@material-ui/core";
import {comboStrategyVar} from "../services/apollo";
import {Autocomplete} from "@material-ui/lab";
import {StrategySelectQuery, StrategySelectQuery_frontend} from "./__generated__/StrategySelectQuery";

function StrategySelectGroups({index, data}:{index:number,data?:StrategySelectQuery_frontend}) {


    const [indicator,setIndicator] = useState<string>("");
    const [operator,setOperator] = useState<string>("");
    const [operand,setOperand] = useState<string>("");
    const comboStrategies = useReactiveVar(comboStrategyVar);

    const indicatorOptions = data?.indicators?.map(f => f?.name as string);
    const operatorOptions = data?.operators?.map(f => f?.name as string);
    const operandOptions = data?.operands?.map(f => f as string);


    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">Group 2 - Index: {index}</FormLabel>
            <Autocomplete
                id={`group2_input1_${index}`}
                value={indicator || null}
                options={indicatorOptions || []}
                renderInput={(params) => <TextField {...params} label="Input 1" variant="outlined"/>}
                onChange={(e, v) => {
                    setIndicator(v as string);
                }}
            />
            {indicator && <Autocomplete
                id={`group2_input2_${index}`}
                value={operator || null}
                options={operatorOptions || []}
                renderInput={(params) => <TextField {...params} label="Input 2" variant="outlined"/>}
                onChange={(e, v) => {
                    setOperator(v as string)
                }}
            />}
            {operator && <Autocomplete
                id={`group2_input3_${index}`}
                value={operand || null}
                options={operandOptions || []}
                renderInput={(params) => <TextField {...params} label="Input 3" variant="outlined"/>}
                onChange={(e, v) => {
                    setOperand(v as string)
                    comboStrategies[index].operand = v!;
                    comboStrategies[index].operator = operator;
                    comboStrategies[index].indicator = indicator!;
                    comboStrategyVar(comboStrategies)
                }}
            />}
        </FormControl>
    )
}



export default function StrategySelect(){

    const { loading, error, data } = useQuery<StrategySelectQuery>(gql`
        query StrategySelectQuery {
            frontend {
                indicators {
                    name
                }
                operands
                operators {
                    name
                }
            }
            strategies @client
        }
    `);

    if(loading) {
        return <div>loading</div>
    }

    if (error) {
        return <div>error</div>
    }

    const strategies = data?.strategies;

    return (
        <>
            {
                strategies && [...Array(Number(strategies))].map((v, index) => {
                    return <StrategySelectGroups key={`group2_${index}`}  index={index} data={data?.frontend || undefined}/>
                })
            }
        </>
    )

}
