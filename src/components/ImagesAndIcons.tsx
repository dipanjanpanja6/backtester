import { Grid, Typography, Box } from "@material-ui/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash, faUser, faUserEdit, faOilCan, faAd, faAlignLeft, faAlignCenter } from "@fortawesome/free-solid-svg-icons"

function ImagesAndIcons() {
  return (
    <Grid>
      <Typography variant="h5" gutterBottom>
        random images
      </Typography>
      <img alt="banner" src="https://source.unsplash.com/random/200x200" />
      <img alt="banner" src="https://source.unsplash.com/random/200x200" />
      <img alt="banner" src="https://source.unsplash.com/random/200x200" />
      <img alt="banner" src="https://source.unsplash.com/random/200x200" />
      <img alt="banner" src="https://source.unsplash.com/random/200x200" />
      <img alt="banner" src="https://source.unsplash.com/random/200x200" />
      <img alt="banner" src="https://source.unsplash.com/random/200x200" />

      <Typography variant="h5" gutterBottom>
        random icons
      </Typography>
      <Grid container>
        <Box m={2}>
          <FontAwesomeIcon icon={faTrash} size="2x" />
        </Box>
        <Box m={2}>
          <FontAwesomeIcon icon={faUser} size="2x" />
        </Box>
        <Box m={2}>
          <FontAwesomeIcon icon={faUserEdit} size="2x" />
        </Box>
        <Box m={2}>
          <FontAwesomeIcon icon={faOilCan} size="2x" />
        </Box>
        <Box m={2}>
          <FontAwesomeIcon icon={faAd} size="2x" />
        </Box>
        <Box m={2}>
          <FontAwesomeIcon icon={faAlignLeft} size="2x" />
        </Box>
        <Box m={2}>
          <FontAwesomeIcon icon={faAlignCenter} size="2x" />
        </Box>
      </Grid>
    </Grid>
  )
}

export default ImagesAndIcons
