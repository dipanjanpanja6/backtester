import React from "react"
import { Box, Grid } from "@material-ui/core"
import StrategyCount from "../components/StrategyCount"
import StrategySelect from "../components/StrategySelect"
import TradeActionSelect from "../components/TradeActionSelect"

export default function ComboForm() {
  return (
    <Grid container direction="column" alignContent="flex-start">
      <Box p={2}>
        <StrategyCount />
      </Box>
      <Box p={2} display="flex" flexDirection="column">
        <StrategySelect />
      </Box>
      <Box p={2} display="flex" flexDirection="column">
        <TradeActionSelect />
      </Box>
    </Grid>
  )
}
