import React from 'react'

function UsersAdmin({data}) {
  return (
    data.map((e, i) => (
      <div className="card" style={{width: '18rem'}} key ={i}>
        <div className="card-body" style={{justifyContent: 'center', alignItems: 'center'}}>
          <h5 className="card-title">{e.username}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{e.useremail}</h6>
        </div>
      </div>
    ))
  )
}

export default UsersAdmin