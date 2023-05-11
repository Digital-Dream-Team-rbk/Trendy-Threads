import React from 'react'

function UsersAdmin({data}) {
  return (
    data.map((e,i)=>(
        <div key={i}>
            <div>{e.username}</div>
            <div>{e.useremail}</div>
        </div>
    ))
  )
}

export default UsersAdmin