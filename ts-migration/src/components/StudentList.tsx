"use client";

import { useState, useMemo } from "react";

const StudentList=()=> {
  const [students, setStudents] = useState<string[]>(["Anu", "Raj", "Neha"]);
  const [input, setInput] = useState<string>("");
 
  const StudentsName = useMemo(() => {
    return students;
  }, [students]);
  // add student when button is clicked
  const addStudent = () => {
    if (input.trim() === "") return; // prevent empty entries
    setStudents([...students, input]); // add to list
    setInput(""); // clear input box
  };

  return (
    <div>
      <h2>Student List</h2>

     
      <input
        type="text"
        placeholder="Enter student name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addStudent}>Add Student</button>   {/* onclick =addStudent */}

      <ul>
        {StudentsName.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
export default StudentList;
