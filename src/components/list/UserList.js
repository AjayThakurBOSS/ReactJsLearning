import React from "react";
import users from "./users.json";

export default function UserList() {
  const headings = Object.keys(users[0]).map((key) => <th>{key}</th>);
  return (
    <div className="text-center bg-secondary">
      <table>
        <thead>
          <tr>
            <th>{headings}</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, ind) => {
            return (
              <tr key={ind}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.id}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
