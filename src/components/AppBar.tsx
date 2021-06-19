import React from "react"
import AppBar from "@material-ui/core/AppBar"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFolder, faHome, faList } from "@fortawesome/free-solid-svg-icons"

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
      <Box position="fixed" top="auto" bottom={0} left={0} right={0}>
        <AppBar position="relative">
          <BottomNavigation showLabels value={value} onChange={handleChange}>
            <BottomNavigationAction label="Main Page" value={0} icon={<FontAwesomeIcon icon={faHome} />} />
            <BottomNavigationAction label="List Page" value={1} icon={<FontAwesomeIcon icon={faList} />} />
            <BottomNavigationAction label="Blank Page" value={2} icon={<FontAwesomeIcon icon={faFolder} />} />
          </BottomNavigation>
        </AppBar>
      </Box>
    </>
  )
}
