import { useEffect, useState } from "react"
import firebase from "firebase/app"
import { Container, Button, List, ListItem, ListItemText, ListItemSecondaryAction } from "@material-ui/core"

function ListPage() {
  const listRef = firebase.firestore().collection("lists")
  const [state, setState] = useState<Array<Object> | null>([])
  useEffect(() => {
    fetchItem()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const deleteItem = async (e: string) => {
    await listRef.doc(e).delete()
    fetchItem()
  }
  const fetchItem = async () => {
    try {
      var data: Array<Object> = []
      const doc = await listRef.get()
      if (doc.empty) {
        setState(null)
        console.log("No such document!")
      } else {
        doc.forEach((d: any) => {
          var x = d.data()
          x.id = d.id
          data.push(x)
        })
        console.log("Document data:", data)
        setState(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container maxWidth="xs">
      <List>
        {state
          ? state.map(({ title, id }: any, i) => (
              <ListItem key={id}>
                <ListItemText primary={title} />
                <ListItemSecondaryAction>
                  <Button variant="outlined" color="secondary" onClick={() => deleteItem(id)}>
                    Delete
                  </Button>
                </ListItemSecondaryAction>
              </ListItem>
            ))
          : "No document found!"}
      </List>
    </Container>
  )
}

export default ListPage
