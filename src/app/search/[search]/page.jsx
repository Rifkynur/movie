import React from "react";
import Result from "@/components/Result";

const SearchPage = async ({ params }) => {
  const seach = params.search;
  const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${seach}&language=en-US&page=1&include_adult=false`);
  const data = await res.json();
  const results = data.results;
  return (
    <div>
      {results && results.length === <h1 className="text-center pt-6">No results found</h1>}
      {results && <Result results={results} />}
    </div>
  );
};

export default SearchPage;
