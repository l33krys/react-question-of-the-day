import React from "react";

function AddQuestionForm() {
  return (
    <form className="NewItem">
      <label>
        New Question:
        <input type="text" name="name" />
      </label>

      <label>
        Category:
        <select name="category">
          <option value="All">All</option>
          <option value="category">Category 1</option>
          <option value="category">Category 2</option>
          <option value="category">Category 3</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default AddQuestionForm;
