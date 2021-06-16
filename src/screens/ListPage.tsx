import { useEffect, useState } from "react"
import firebase from "firebase/app"
import { Container, Button, List, ListItem, ListItemText, ListItemSecondaryAction } from "@material-ui/core"

const storageRef = firebase.storage().ref()
function ListPage() {
  const [state, setState] = useState<Array<Object> | null>([])
  useEffect(() => {
    fetchItem()
  }, [])

  const deleteItem = async (e: string) => {
    storageRef
      .child(e)
      .delete()
      .then(() => {
        fetchItem()
      })
      .catch(error => {
        console.log(error)
      })
  }
  const fetchItem = async () => {
    try {
      let data: Array<Object> = []

      const res = await storageRef.listAll()
      if (res.items.length <= 0) {
        setState(null)
      } else {
        let promise = res.items.map(
          itemRef =>
            new Promise(resolve => {
              itemRef.getDownloadURL().then(url => {
                data.push({ key: itemRef.fullPath, url })
                resolve({ key: itemRef.fullPath, url })
              })
            })
        )

        Promise.all(promise).then(d => {
          console.log(d)
          setState(data)
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <List>
        {state
          ? state.map(({ url, key }: any, i) => (
              <ListItem key={i} button component="a" href={url} target="_blank">
                <ListItemText primary={key} />
                <ListItemSecondaryAction>
                  <Button variant="outlined" color="secondary" onClick={() => deleteItem(key)}>
                    Delete
                  </Button>
                </ListItemSecondaryAction>
              </ListItem>
            ))
          : "No data found"}
      </List>
    </Container>
  )
}

export default ListPage
