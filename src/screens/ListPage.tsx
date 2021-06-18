import { useState } from "react"
import { Button, ListItemAvatar, Avatar, List, ListItem, ListItemText, ListItemSecondaryAction } from "@material-ui/core"
import { Delete, FileCopy } from "@material-ui/icons"
import { Alert } from "@material-ui/lab"

function ListPage() {
  const [state] = useState<Array<Object> | null>(null)

  return (
    <List>
      {state ? (
        state.map(({ url, key }: any, i) => (
          <ListItem key={i} button component="a" href={url} target="_blank">
            <ListItemAvatar>
              <Avatar>
                <FileCopy />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={key} />
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
            </ListItemSecondaryAction>
          </ListItem>
        ))
      ) : (
        <Alert variant="outlined" severity="error">
          No Data found!
        </Alert>
      )}
    </List>
  )
}

export default ListPage
