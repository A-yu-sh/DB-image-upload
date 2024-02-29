import React from "react";
import { Data } from "./Data";

const Page = () => {
  return (
    <div>
      <h1>WELCOME, ADMIN</h1>
      <div className="grid grid-cols-5 mt-20 mx-10">
        <h1>UserName</h1>
        <h1>UserEmail</h1>
        <h1>Rented Car</h1>
        <h1>Timing (In Hour)</h1>
        <h1>Total Amount</h1>
      </div>
      <div className="mt-5 mx-10 rounded-md border">
        {Data.map((e) => {
          return (
            <div className="grid grid-cols-5 border-b text-xl my-4">
              <div>{e.UserName}</div>
              <div>{e.UserEmail}</div>
              <div>{e.Rented_Car}</div>
              <div>{e.Rent_Timing}</div>
              <div>{e.Amount}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
