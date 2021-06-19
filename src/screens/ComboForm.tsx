import React from "react"
import { Box, Grid, Paper, Typography, Grow } from "@material-ui/core"
import StrategyCount from "../components/StrategyCount"
import StrategySelect from "../components/StrategySelect"
import TradeActionSelect from "../components/TradeActionSelect"
import Intro from "../components/Intro"
import Footer from "../components/Footer"
import Banner from "../components/Banner"

export default function ComboForm() {
  return (
    <Grid container direction="column" alignContent="flex-start">
      <Banner />
      <Box m={4}>
        <Grid container spacing={1}>
          <Grid item>
            <Grow in>
              <Typography gutterBottom variant="h4">
                Choose your
              </Typography>
            </Grow>
          </Grid>
          <Grid item>
            <Grow in {...{ timeout: 1000 }}>
              <Typography gutterBottom variant="h4">
                strategy
              </Typography>
            </Grow>
          </Grid>
          <Grid item>
            <Grow in {...{ timeout: 1000 }}>
              <Typography gutterBottom variant="h4">
               - Animated text
              </Typography>
            </Grow>
          </Grid>
        </Grid>

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
      <Intro />
      <Footer />
    </Grid>
  )
}
