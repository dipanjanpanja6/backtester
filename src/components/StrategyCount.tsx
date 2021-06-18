import React from "react"
import { useQuery } from "@apollo/client"
import { CircularProgress, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup } from "@material-ui/core"
import { strategyCount } from "../services/apollo"
import gql from "graphql-tag"
import { Alert } from "@material-ui/lab"

// TODO - Rename to StrategyCount
export default function StrategyCount() {
  const { loading, error, data } = useQuery(gql`
    query StrategiesCountQuery {
      strategyCount @client
    }
  `)

  if (loading) {
    return (
      <Alert severity="info" icon={<CircularProgress size={20} />}>
        loading
      </Alert>
    )
  }

  if (error) {
    return (
      <Alert severity="error" variant="outlined">
        error
      </Alert>
    )
  }

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Strategy Count</FormLabel>
      <RadioGroup aria-label="group1" name="group1" value={data?.strategies}>
        <Grid container direction="row">
          {[...Array(10)].map((v, index) => {
            const option = index + 1
            return (
              <FormControlLabel
                key={`group1_radio_${option}`}
                value={option.toString()}
                onChange={({ target }) => {
                  strategyCount((target as any).value)
                }}
                control={<Radio />}
                label={option.toString()}
              />
            )
          })}
        </Grid>
      </RadioGroup>
    </FormControl>
  )
}
