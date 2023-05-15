import React from 'react';
import { useSelector } from "react-redux"

export const User = () => {
  const user = useSelector(state => state.user)

    return(
        <>
        <ul>
          <li>{user.name}</li>
          <li>{user.about}</li>
        </ul>
        </>
    )
}