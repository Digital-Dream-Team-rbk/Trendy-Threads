import React from 'react'

function UsersAdmin({data}) {
  return (
    data.map((e, i) => (
      <div className="card" style={{width: '18rem'}}>
        <div class="card-body">
          <h5 class="card-title">{e.username}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{e.useremail}</h6>
        </div>
      </div>
    ))
    
  )
}

export default UsersAdmin