import { Grid, Box, Typography } from "@material-ui/core"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoffee, faBookMedical, faChevronDown, faTrash, faUser, faUserEdit, faOilCan, faAd, faAlignLeft, faAlignCenter } from "@fortawesome/free-solid-svg-icons"
import { useSpring, animated } from "react-spring"

function Animation() {
  const [open, toggle] = useState(false)
  const [hover, toggleHover] = useState(false)

  const expand = useSpring({
    config: { friction: 10 },
    // width: hover ? `100px` : "0px",
    transform: hover ? "rotate(180deg)" : "rotate(0deg)",
  })
  const spin = useSpring({
    config: { friction: 10 },
    transform: open ? "rotate(180deg)" : "rotate(0deg)",
  })

  return (
    <>
      <Grid container>
        <Typography variant="h5" gutterBottom>
          svg animations
        </Typography>
        <Box mt={2} mb={2} width="100%" display="flex">
          <Box m={2}>
            <FontAwesomeIcon icon={faTrash} size="2x" spin />
          </Box>
          <Box m={2}>
            <FontAwesomeIcon icon={faUser} size="2x" pulse />
          </Box>
          <Box m={2}>
            <FontAwesomeIcon icon={faUserEdit} size="2x" pulse />
          </Box>
          <Box m={2}>
            <FontAwesomeIcon icon={faOilCan} size="2x" spin />
          </Box>
          <Box m={2}>
            <FontAwesomeIcon icon={faAd} size="2x" spin />
          </Box>
          <Box m={2}>
            <FontAwesomeIcon icon={faAlignLeft} size="2x" spin />
          </Box>
          <Box m={2}>
            <FontAwesomeIcon icon={faAlignCenter} size="2x" spin />
          </Box>
          <Box m={2}>
            <FontAwesomeIcon icon={faCoffee} spin />
          </Box>
          <Box m={2}>
            <FontAwesomeIcon icon={faBookMedical} pulse />
          </Box>
          <Box m={2}>
            <FontAwesomeIcon icon={faChevronDown} spin />
          </Box>
        </Box>
        <Box width="100%">
          <Typography variant="h5" gutterBottom>
            on hover animation
          </Typography>
        </Box>
        <Box mt={2} mb={2} onMouseEnter={() => toggleHover(!hover)} onMouseLeave={() => toggleHover(!hover)}>
          <animated.div style={expand}>
            <Typography variant="h4"> hover on me </Typography>
          </animated.div>
        </Box>
        <TextAnimation />

        <Box>
          <animated.button onClick={() => toggle(!open)} style={spin}>
            <FontAwesomeIcon icon={faChevronDown} />
            <Typography>OnClick animation</Typography>
          </animated.button>
        </Box>
      </Grid>
    </>
  )
}

export default Animation

function TextAnimation() {
  const freq = useSpring({
    loop: true,
    from: { rotateX: 0 },
    to: { rotateX: 360 },
  })
  return (
    <Box width="100%">
      <animated.p style={freq}>
        <Typography variant="h4">auto Moving text</Typography>
      </animated.p>
    </Box>
  )
}
