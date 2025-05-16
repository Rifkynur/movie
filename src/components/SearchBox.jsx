"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchInput = search.toLocaleLowerCase();
    router.push(`/search/${searchInput}`);
  };
  return (
    <form className="flex item-center px-5 gap-3 max-w-6xl mx-auto mt-5" onSubmit={handleSubmit}>
      <input type="text" placeholder="Search keywords..." className="w-full h-10 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1 max-w-[200px] border px-2" value={search} onChange={(e) => setSearch(e.target.value)} />
      <button type="submit" className="bg-amber-600 px-6 rounded-lg font-bold text-gray-50 disabled:bg-gray-400 cursor-pointer" disabled={search === ""}>
        Search
      </button>
    </form>
  );
};

export default SearchBox;
