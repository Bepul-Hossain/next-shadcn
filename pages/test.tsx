import React, { useState } from "react"

import styles from "./test.module.scss"

const Example = () => {
  const [showDialog, setShowDialog] = useState(false)
  const clickHandler = () => {
    setShowDialog(!showDialog)
  }

  return (
    <div>
      {showDialog && <button onClick={clickHandler}> Close</button>}
      {!showDialog && <button onClick={clickHandler}> Show Dialog </button>}
      {showDialog && (
        <div className={styles.dialogue}>This is the dialog content.
        {showDialog && <button onClick={clickHandler}>Close</button>}
        </div>
      )}
    </div>
  )
}

export default Example
