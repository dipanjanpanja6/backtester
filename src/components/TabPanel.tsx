import { Grid, Box, Typography } from "@material-ui/core"

interface TabPanelProps {
  children?: React.ReactNode
  path: string
  value: any
}

export default function TabPanel(props: TabPanelProps) {
  const { children, value, path, ...other } = props

  return (
    <Grid container role="tabpanel" hidden={value !== path} id={`simple-tabpanel-${path}`} aria-labelledby={`simple-tab-${path}`} {...other}>
      {value === path && (
        <Box p={3} width="100%">
          <Typography variant="h4">{path} Page</Typography>
          {children}
        </Box>
      )}
    </Grid>
  )
}
