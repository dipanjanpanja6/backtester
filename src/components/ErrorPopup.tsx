import React from "react"
import { Dialog, DialogContent, Button, DialogActions } from "@material-ui/core"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"

interface ErrorPopupProps {
  children: string
}

function ErrorPopup(props: ErrorPopupProps) {
  const { children } = props
  const [open, setOpen] = React.useState<boolean>(true)

  const handleClose = () => setOpen(false)

  return (
    <div>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm" disableEscapeKeyDown disableBackdropClick>
        <DialogTitle id="alert-dialog-title">{"Something went wrong!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">{children} </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="secondary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default ErrorPopup
