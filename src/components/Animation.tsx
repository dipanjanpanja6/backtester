import { Grid, Box, Typography, Container } from "@material-ui/core"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoffee, faBookMedical, faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { useSpring, animated } from "react-spring"

function Animation() {
  const [open, toggle] = useState(false)
  const [hover, toggleHover] = useState(false)

  const expand = useSpring({
    config: { friction: 10 },
    width: hover ? `100px` : "0px",
    transform: hover ? "rotate(180deg)" : "rotate(0deg)",
  })
  const spin = useSpring({
    config: { friction: 10 },
    transform: open ? "rotate(180deg)" : "rotate(0deg)",
  })

  return (
    <>
      <Grid container>
        <Container>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <Box mt={15} mb={15} width="100%">
                <FontAwesomeIcon icon={faCoffee} spin />
                <FontAwesomeIcon icon={faBookMedical} pulse />
                <FontAwesomeIcon icon={faChevronDown} spin />
              </Box>
              <Box mt={15} mb={15} width="100%">
                <animated.div style={expand}>
                  <Typography variant="h4">Hello </Typography>
                </animated.div>
              </Box>
              <TextAnimation />
            </Grid>
            <Grid item container xs={12} sm={6}>
              <Box m="auto">
                <animated.button onClick={() => toggle(!open)} style={spin}>
                  <FontAwesomeIcon icon={faChevronDown} />
                  <Typography>OnClick animation</Typography>
                </animated.button>
                <button onMouseEnter={() => toggleHover(!hover)} onMouseLeave={() => toggleHover(!hover)}>
                  OnHover Animation
                </button>
              </Box>
            </Grid>
          </Grid>
        </Container>
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
    <Box mt={15} mb={15} width="100%">
      <animated.p style={freq}>
        <Typography variant="h2">auto Moving text</Typography>
      </animated.p>
    </Box>
  )
}
