import React from "react"

const Title = ({ msg = "Hello Parcel" }) => <h1>{msg}</h1>

export default () => (
  <>
    <Title msg="Hello World" />
  </>
)
