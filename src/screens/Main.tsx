import React, { useCallback, useEffect } from "react"
import { Group2, Group2Value } from "../components/Group2"
import { Grid } from "@material-ui/core"
import { Group1 } from "../components/Group1"
import { Group3 } from "../components/Group3"
import firebase from "firebase"

const storageRef = firebase.storage().ref()

const Main: React.FC = () => {
  const [calling, setCalling] = React.useState<boolean>(true)
  const [group1Value, setGroup1Value] = React.useState<number>(1)
  const [group2Values, setGroup2Values] = React.useState<Group2Value[]>([])

  const changeValues = useCallback(
    (values, index) => {
      const newValues = [...group2Values]
      newValues[index] = values

      setGroup2Values(newValues)
    },
    [group2Values]
  )

  const uploadFCF = useCallback(async () => {
    setCalling(false)
    const trimmedValues = [...group2Values]
    trimmedValues.splice(group1Value)

    if (trimmedValues.length <= 0) {
      return
    } else if (trimmedValues.every(e => Object.values(e).every(f => f !== null))) {
      const res = await (await storageRef.listAll()).items.length
      if (res < 10) {
        let addPayload = firebase.functions().httpsCallable("addPayload")
        addPayload(trimmedValues).then(result => {
          console.log("uploaded")
          return
        })
      }
    }
  }, [group2Values, group1Value])

  useEffect(() => {
    if (calling) uploadFCF()
  }, [calling, uploadFCF])

  useEffect(() => {
    let now = new Date()
    let min = now.getMinutes()
    let startIn = 10 - (min % 10)
    let interval: ReturnType<typeof setTimeout>
    const timeout = setTimeout(runInterval, startIn * 60 * 1000)

    function runInterval() {
      clearTimeout(timeout)
      setCalling(true)
      interval = setInterval(function () {
        setCalling(true)
      }, 600000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="App">
      <Grid container direction="column" alignContent="flex-start">
        <Group1 value={group1Value} setValue={setGroup1Value} />
        {[...Array(group1Value)].map((v, index) => {
          return <Group2 key={`group2_${index}`} index={index} onSetValues={values => changeValues(values, index)} />
        })}
        <Group3
          onButtonPress={() => {
            const trimmedValues = [...group2Values]
            trimmedValues.splice(group1Value)
            console.log(trimmedValues)
          }}
        />
      </Grid>
    </div>
  )
}

export { Main }
