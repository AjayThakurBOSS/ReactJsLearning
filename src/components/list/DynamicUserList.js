import React from "react";
import users from "./users.json";

const DynamicUserList = () => {
  const headings = Object.keys(users[0]).map((key) => <th>{key}</th>);
  return (
    <div>
      <h1 className="text-center bg-primary text-white p-3"> Hello</h1>
      <table className="table table-bordered ">
        <thead>
          <tr> {headings}</tr>
        </thead>
        <tbody>
          {users.map((user, ind) => {
            console.log(user);
            return (
              <tr key={ind}>
                {Object.values(user).map((val) => {
                  return <td>{val}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicUserList;
