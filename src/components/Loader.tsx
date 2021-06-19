import React, { useCallback } from "react"
import LinearProgress from "@material-ui/core/LinearProgress"
import { Modal, Backdrop, Container, Box } from "@material-ui/core"
interface props {
  children: React.ReactNode
}

export default function LinearDeterminate({ children }: props) {
  const [progress, setProgress] = React.useState(0)
  
  const checkComplete = useCallback(
    (timer: NodeJS.Timeout) => {
      if (progress === 100) {
        return clearInterval(timer)
      }
    },
    [progress]
  )

  React.useEffect(() => {
    let timer = setInterval(() => {
      setProgress(oldProgress => {
        const diff = Math.random() * 10
        return Math.min(oldProgress + diff, 100)
      })
    }, 200)
    checkComplete(timer)
    return () => {
      clearInterval(timer)
    }
  }, [checkComplete])

  if (progress === 100) return <>{children}</>

  return (
    <Modal
      open
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 200,
      }}>
      <Box display="flex" height="100vh" bgcolor="#fff" alignItems="center" justifyContent="center">
        <Container maxWidth="sm">
          <LinearProgress variant="determinate" value={progress} />
        </Container>
      </Box>
    </Modal>
  )
}
