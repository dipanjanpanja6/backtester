import { useState } from "react"
import { Button, ListItemAvatar, Avatar, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Paper } from "@material-ui/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash, faUser, faUserEdit } from "@fortawesome/free-solid-svg-icons"
import { Alert } from "@material-ui/lab"

function ListPage() {
  const [state] = useState<Array<Object> | null>([
    //dummy data
    { url: "https://www.upwork.com/messages/rooms/", key: "display dummy list data" },
    { url: "https://www.upwork.com/rooms/", key: "display dummy list data, with some buttons" },
    { url: "https://www.upwork.com/messages/rooms/", key: "display dummy list data, with some buttons" },
  ])

  return (
    <Paper>
      <List>
        {state ? (
          state.map(({ url, key }: any, i) => (
            <ListItem key={i} button component="a" href={url} target="_blank">
              <ListItemAvatar>
                <Avatar>
                  <FontAwesomeIcon icon={faUser} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={key} secondary={url} />
              <ListItemSecondaryAction>
                <Button
                  variant="outlined"
                  color="secondary"
                  endIcon={<FontAwesomeIcon icon={faTrash} />}
                  onClick={() => {
                    console.log(22)
                  }}>
                  Delete
                </Button>
                <IconButton>
                  <FontAwesomeIcon icon={faUserEdit} />
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
    </Paper>
  )
}

export default ListPage
