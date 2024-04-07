import React from 'react'

type Props = {
    params: {
        id: string
    }
}

const Meeting = ({params}: Props) => {
  return (
    <div>Meeting Room: #{params.id}</div>
  )
}

export default Meeting
