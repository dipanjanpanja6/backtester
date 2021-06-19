import { Grid, Typography, IconButton, Box, Link } from "@material-ui/core"
import { Facebook, LinkedIn } from "@material-ui/icons"
const logo = require("../logo.svg").default as string

function Footer() {
  return (
    <Box bgcolor="#dfffbb">
      <Grid container>
        <Grid item sm={4} container justify="center" alignItems="center" direction="column">
          <img alt="logo" src={logo} height="100px" width="100px" />
          <Typography>Fintech Pvt.</Typography>
          <Box>
            <IconButton>
              <Facebook />
            </IconButton>
            <IconButton>
              <LinkedIn />
            </IconButton>
          </Box>
        </Grid>
        <Grid item sm={4} container justify="center" alignItems="center" direction="column">
          <Typography component={Link} href="/">
            Search
          </Typography>
          <Typography component={Link} href="/">
            Search Trends
          </Typography>
          <Typography component={Link} href="/">
            Browse
          </Typography>
        </Grid>
        <Grid item sm={4} container justify="center" alignItems="center" direction="column">
          <Typography component={Link} href="/">
            INFORMATION
          </Typography>
          <Typography component={Link} href="/">
            Terms of Service
          </Typography>
          <Typography component={Link} href="/">
            Privacy Policy
          </Typography>
          <Typography component={Link} href="/">
            Help / FAQ
          </Typography>
          <Typography component={Link} href="/">
            Contact Us
          </Typography>
          <Typography component={Link} href="/">
            DMCA
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Footer
