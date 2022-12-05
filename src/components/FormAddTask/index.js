import React from "react";

const FormAddTask = () => {
  return (
    <form className="FormAddTask">
      <p>Ajouter une matière</p>
      <input type="text" placeholder="Nom" required />
      <textarea placeholder="Descriptions" required />
      <button type="submit">Ajouter</button>
    </form>
  );
};
export default FormAddTask;
