import React from "react";
import countrylist from "./countrylist.json";

const CountriesDynamicList = () => {
  const Heading = Object.keys(countrylist[0]).map((key) => {
    return <th>{key}</th>;
  });

  return (
    <div>
      <h1 className="bg-primary text-white"> Details of Countries</h1>
      <table className="table table-bordered">
        <thead>
          <tr>{Heading}</tr>
        </thead>
        <tbody>
          {countrylist.map((country, ind) => {
            return (
              <tr key={ind}>
                {Object.values(country).map((val) => {
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

export default CountriesDynamicList;
