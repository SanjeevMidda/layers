import React from 'react'

function Layer({color, keyValue}) {

    console.log(keyValue);

    let styles ={
        background: color
    }

  return (
    <div className={`layer ${keyValue}`} style={styles}></div>
  )
}

export default Layer