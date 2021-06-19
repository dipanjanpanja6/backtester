import { Grid, Box } from "@material-ui/core"

interface TabPanelProps {
  children?: React.ReactNode
  path: string
  value: any
  index: number
}

export default function TabPanel(props: TabPanelProps) {
  const { children, value, index, path, ...other } = props

  return (
    <Grid container role="tabpanel" hidden={value !== index} id={path + "-" + index} aria-labelledby={path + "-" + index} {...other}>
      {value === index && <Box width="100%">{children}</Box>}
    </Grid>
  )
}
