import React from "react"
import { Box, Grid, Paper } from "@material-ui/core"
import StrategyCount from "../components/StrategyCount"
import StrategySelect from "../components/StrategySelect"
import TradeActionSelect from "../components/TradeActionSelect"
import Animation from "../components/Animation"
import ImagesAndIcons from "../components/ImagesAndIcons"
import Toaster from "../components/Toaster"
import ErrorPopup from "../components/ErrorPopup"

export default function ComboForm() {
  return (
    <Grid container direction="column" alignContent="flex-start">
      <ImagesAndIcons />
      <Toaster />
      <ErrorPopup>error</ErrorPopup>
      <Box m={4}>
        <Paper variant="outlined">
          <Box p={4}>
            <StrategyCount />
          </Box>
          <Box p={4} display="flex" flexDirection="column">
            <StrategySelect />
          </Box>
          <Box p={4} display="flex" flexDirection="column">
            <TradeActionSelect />
          </Box>
        </Paper>
      </Box>
      <Animation />
      <Box m={4} />
    </Grid>
  )
}
