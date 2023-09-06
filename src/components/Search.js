import React from "react";

function Search( { search, setSearch, setSelectedCategory, setShowNewAndUsed }) {

    return (
        <div>
            <div>
                <input type="text" id="search-bar" placeholder="Search for questions" className="prompt" value={search} onChange={(e) => setSearch(e.target.value)}/>
            </div>
            <div>
                <label>
                    <strong>Filter by Category:</strong>
                    <select name="category" id="filter-category" onChange={(e) => setSelectedCategory(e.target.value)}>
                        <option value="All">All</option>
                        <option value="family-and-friends">Family & Friends</option>
                        <option value="recreation">Recreation</option>
                        <option value="work">Work</option>
                        <option value="miscellaneous">Miscellaneous</option>
                    </select>
                </label>
            </div>
            <div>
                <label>
                    <strong>Exclude Used Questions:</strong>
                    <input type="checkbox" id="new-or-repeat" name="completed" onClick={(e) => setShowNewAndUsed(e.target.checked)}/>
                </label>
            </div>
        </div>
      );
}

export default Search;
