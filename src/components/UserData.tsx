import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Navbar } from "./Navbar";
import { DocumentData, QuerySnapshot, onSnapshot } from "firebase/firestore";
import { user } from "../sevices/controller";
import { NewUserType } from "../types/user";
import Information from "./Information";

export function UserData() {
  const [users, setUsers] = useState<NewUserType[]>([]);
  useEffect(
    () =>
      onSnapshot(user, (snapshot: QuerySnapshot<DocumentData>) => {
        setUsers(
          snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          })
        );
      }),
    []
  );

  return (
    <>
      <Navbar />
      <div className="userdata">
        <div className="title">
          <h1>User Database</h1>
          {users && users.length ? (
            <div>
              {
                users.map((user) => (
                  <Information key={user.id} user={ user } />
                ))
              }
            </div>

          ) : (
              <div className="no-users">
                <h2>No users</h2>
             </div> 
          )}







          {/* {users.map((user) => (
            <div className="user" key={user.email}>
              <td>
                {user.firstName} {user.lastName}
              </td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </div>
          ))} */}
        </div>
      </div>
    </>
  );
}
