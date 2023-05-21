import React from 'react';
import { useSelector } from "react-redux"

export const User = () => {
  const user = useSelector(state => state.user)

    return(
        <>
        <div>
         <div className="row g-0 mt-4">
           <div className="col-md-4">
             <img src={user.avatar} className="img-fluid rounded" alt="photo"/>
           </div>
           <div className="col-md-8">
            <div className="card-body">
              <p>{user.name}</p>
              <p>{user.about}</p>
              <p>{user.group}</p>
              <p>{user.email}</p>
            </div>
           </div>
           </div>
          </div>
        
        </>
    )
}