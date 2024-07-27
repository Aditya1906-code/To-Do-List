import React, { useState } from "react";

function Todo({ todo, writeText ,addTodo }) {


  return (
    <div>
      <div className="input-container">
        <input onChange={writeText} type="text" value={todo} />
        <button onClick={addTodo}>+</button>
      </div>
    </div>
  );
}

export default Todo;
