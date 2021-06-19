import { useState } from "react"
import { Button, ListItemAvatar, Avatar, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, ThemeProvider } from "@material-ui/core"
import { Delete, FileCopy, Edit } from "@material-ui/icons"
import { Alert } from "@material-ui/lab"
import { ListPageTheme } from "../theme"

function ListPage() {
  const [state] = useState<Array<Object> | null>([
    //dummy data
    { url: "https://www.upwork.com/messages/rooms/", key: "display dummy list data" },
    { url: "https://www.upwork.com/rooms/", key: "display dummy list data, with some buttons" },
    { url: "https://www.upwork.com/messages/rooms/", key: "display dummy list data, with some buttons" },
  ])

  return (
    //theme for specific page
    <ThemeProvider theme={ListPageTheme}>
      <List>
        {state ? (
          state.map(({ url, key }: any, i) => (
            <ListItem key={i} button component="a" href={url} target="_blank">
              <ListItemAvatar>
                <Avatar>
                  <FileCopy />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={key} secondary={url} />
              <ListItemSecondaryAction>
                <Button
                  variant="outlined"
                  color="secondary"
                  endIcon={<Delete />}
                  onClick={() => {
                    console.log(22)
                  }}>
                  Delete
                </Button>
                <IconButton>
                  <Edit />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))
        ) : (
          <Alert variant="outlined" severity="error">
            No Data found!
          </Alert>
        )}
      </List>
    </ThemeProvider>
  )
}

export default ListPage
