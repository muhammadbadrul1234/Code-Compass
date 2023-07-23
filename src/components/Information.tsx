import React from 'react'
import { NewUserType } from '../types/user';

interface IProps {
  user: NewUserType;
}

function Information({ user }: IProps) {
    console.log(user, "user");
    
  return (
      <div className="user-preview">
          <td>{user.firstName} {user.lastName}</td>
            <td>{user.email}</td>
    </div>
  )
}

export default Information
