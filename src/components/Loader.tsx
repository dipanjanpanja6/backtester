import { Modal, CircularProgress, Backdrop, Box } from "@material-ui/core"
import Fade from "@material-ui/core/Fade"

export default function Loader() {
  return (
    <div>
      <Modal
        open
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
        <Box display="flex" height="100vh" alignItems="center" justifyContent="center">
          <Fade in>
            <CircularProgress />
          </Fade>
        </Box>
      </Modal>
    </div>
  )
}
