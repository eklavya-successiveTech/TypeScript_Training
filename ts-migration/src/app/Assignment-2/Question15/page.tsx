"use client"
import React, { useState, useMemo } from 'react';

const StudentList: React.FC = () => {
  const [students, setStudents] = useState<string[]>([
    'Eklavya',
    'Anuj',
    'Khushi'
  ]);

  const memoizedStudentList = useMemo(() => {
    return students;
  }, [students]);

  const addNewStudent = () => {
    const newStudentName = `Student ${students.length + 1}`;
    setStudents([...students, newStudentName]);
  };

  return (
    <div>
      <h1>Student List</h1>
      <ul>
        {memoizedStudentList.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul>
      <button onClick={addNewStudent}>Add New Student</button>
    </div>
  );
};

export default StudentList;