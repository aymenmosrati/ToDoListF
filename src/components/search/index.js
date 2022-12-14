import React from "react";

const Search = () => {
  return (
    <>
      <div className="navbarSearch">
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="navbarSearchIcon"
        >
          <path
            d="M10.5417 19.2502C15.3512 19.2502 19.25 15.3513 19.25 10.5418C19.25 5.73235 15.3512 1.8335 10.5417 1.8335C5.73223 1.8335 1.83337 5.73235 1.83337 10.5418C1.83337 15.3513 5.73223 19.2502 10.5417 19.2502Z"
            stroke="#787486"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20.1667 20.1668L18.3334 18.3335"
            stroke="#787486"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <input
          type="text"
          name="search"
          placeholder="Recherche"
          className="navbarSearchInput"
        />
      </div>
    </>
  );
};

export default Search;
