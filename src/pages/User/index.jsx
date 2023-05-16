import React from 'react';
import { useSelector } from "react-redux"

export const User = () => {
  const user = useSelector(state => state.user)

    return(
        <>
        <div>
          <img src={`${user.avatar}`} />
          <p>{user.name}</p>
          <p>{user.about}</p>
          <p>{user.group}</p>
          <p>{user.email}</p>
        </div>
        </>
    )
}