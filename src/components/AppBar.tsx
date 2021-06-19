import React from "react"
import AppBar from "@material-ui/core/AppBar"
import { Folder, Home, List } from "@material-ui/icons"
import { BottomNavigation, BottomNavigationAction, Box } from "@material-ui/core"

interface AppbarProps {
  children?: React.ReactNode
  value: any
  handleChange: any
}

export default function Appbar(props: AppbarProps) {
  const { value, handleChange } = props

  return (
    <>
      <BottomNavigation />
      <Box position="fixed" top="auto" bottom={0} left={0} right={0}>
        <AppBar position="relative">
          <BottomNavigation showLabels value={value} onChange={handleChange}>
            <BottomNavigationAction label="Main Page" value={0} icon={<Home />} />
            <BottomNavigationAction label="List Page" value={1} icon={<List />} />
            <BottomNavigationAction label="Blank Page" value={2} icon={<Folder />} />
          </BottomNavigation>
        </AppBar>
      </Box>
    </>
  )
}
