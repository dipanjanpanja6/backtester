import { Box } from "@material-ui/core"
import { useTransition, animated as a } from "react-spring"

interface TabPanelProps {
  children?: React.ReactNode
  path: string
  value: any
  index: number
}

export default function TabPanel(props: TabPanelProps) {
  const { children, value, index, path, ...other } = props

  const transition = useTransition(value, {
    from: { x: -100, y: 800, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 100, y: 800, opacity: 0 },
    
    //zoom style

    // from: { scale: 0, opacity: 0 },
    // enter: { scale: 1, opacity: 1 },
    // leave: { scale: 0, opacity: 0 },
  })

  return (
    <Box
      bgcolor="aquamarine"
      minHeight="calc(100vh - 64px)"
      position="absolute"
      width="100%"
      role="tabpanel"
      hidden={value !== index}
      id={path + "-" + index}
      aria-labelledby={path + "-" + index}
      {...other}>
      {transition((style, item) => item === index && <a.div style={style}>{children}</a.div>)}
    </Box>
  )
}
