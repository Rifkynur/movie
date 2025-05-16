import React from "react";

const Result = ({ results }) => {
  return (
    <div>
      {results.map((result) => {
        return (
          <div key={result.id}>
            <h2>{result.original_title}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Result;
