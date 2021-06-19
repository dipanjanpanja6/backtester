import { useMutation, useQuery } from "@apollo/client"
import { Button, FormControl, FormLabel, Box, Grid } from "@material-ui/core"
import gql from "graphql-tag"
import { TradeActionSelectQuery } from "./__generated__/TradeActionSelectQuery"
import ErrorPopup from "../components/ErrorPopup"
import Loader from "./Loader"

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
    return <Loader />
  }

  if (error) {
    return <ErrorPopup>TradeActionSelect error</ErrorPopup>
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
