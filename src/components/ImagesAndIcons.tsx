import { Grid, Typography } from "@material-ui/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash, faUser, faUserEdit, faOilCan } from "@fortawesome/free-solid-svg-icons"

function ImagesAndIcons() {
  return (
    <Grid>
      <Typography> random images</Typography>
      <img alt="banner" src="https://source.unsplash.com/random/300x300" />
      <img alt="banner" src="https://source.unsplash.com/random/200x200" />
      <img alt="banner" src="https://source.unsplash.com/random/100x100" />
      <img alt="banner" src="https://source.unsplash.com/random/50x50" />
      <img alt="banner" src="https://source.unsplash.com/random/300x300" />
      <img alt="banner" src="https://source.unsplash.com/random/200x200" />
      <img alt="banner" src="https://source.unsplash.com/random/100x100" />
      <img alt="banner" src="https://source.unsplash.com/random/50x50" />
      <Typography> random icons</Typography>

      <FontAwesomeIcon icon={faTrash} />
      <FontAwesomeIcon icon={faUser} />
      <FontAwesomeIcon icon={faUserEdit} />
      <FontAwesomeIcon icon={faOilCan} />
    </Grid>
  )
}

export default ImagesAndIcons
