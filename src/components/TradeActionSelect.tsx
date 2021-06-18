import React from "react"
import { useMutation, useQuery } from "@apollo/client"
import { Button, FormControl, FormLabel, CircularProgress, Box, Grid } from "@material-ui/core"
import gql from "graphql-tag"
import { TradeActionSelectQuery } from "./__generated__/TradeActionSelectQuery"
import { Alert } from "@material-ui/lab"

function TradeActionButton({ data }: { data: string | null }) {
  return (
    <Button
      fullWidth
      variant="contained"
      color="primary"
      onClick={() => {
        console.log("post combo form to database")
      }}>
      {data}
    </Button>
  )
}

export default function TradeActionSelect() {
  const [f] = useMutation(gql`
    mutation AddCombo($combo: ComboInsertInput!) {
      insertOneCombo(data: $combo) {
        _id
      }
    }
  `)

  console.log(f)

  const { loading, error, data } = useQuery<TradeActionSelectQuery>(gql`
    query TradeActionSelectQuery {
      frontend {
        tradeActions
      }
      comboStrategies @client {
        indicator @client
        operand @client
        operator @client
      }
    }
  `)

  if (loading) {
    return (
      <Alert severity="info" icon={<CircularProgress size={20} />}>
        loading trade actions
      </Alert>
    )
  }

  if (error) {
    return (
      <Alert variant="outlined" severity="error">
        error
      </Alert>
    )
  }

  const isComboStrategiesEmpty = data?.comboStrategies.every(f => !f?.indicator && !f?.operator && !f?.operand)

  return (
    <>
      {!isComboStrategiesEmpty && (
        <FormControl component="fieldset">
          <FormLabel component="legend">Trade Action</FormLabel>
          {data?.frontend?.tradeActions?.map((f, index) => (
            <Box mt={2}>
              <Grid container spacing={3}>
                <Grid item sm={6} xs={12}>
                  <TradeActionButton data={f} key={`${index}`} />
                </Grid>
              </Grid>
            </Box>
          ))}
        </FormControl>
      )}
    </>
  )
}
