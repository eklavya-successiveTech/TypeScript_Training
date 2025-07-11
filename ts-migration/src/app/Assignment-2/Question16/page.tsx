"use client"
import React, { useState, useMemo } from 'react';

interface Employee {
  name: string;
  salary: number;
}

const EmployeeSalary: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([
    { name: 'Eklavya', salary: 50000 },
    { name: 'Anuj', salary: 60000 },
    { name: 'Khushi', salary: 55000 },
    { name: 'Rahul', salary: 65000 },
    { name: 'Soham', salary: 70000 }
  ]);

  const averageSalary = useMemo(() => {
    if (employees.length === 0) return 0;
    const totalSalary = employees.reduce((sum, employee) => sum + employee.salary, 0);
    return totalSalary / employees.length;
  }, [employees]);

  const updateEmployeeSalaries = () => {
    setEmployees(prevEmployees =>
      prevEmployees.map(employee => ({
        ...employee,
        salary: employee.salary + Math.floor(Math.random() * 10000) + 1000
      }))
    );
  };

  return (
    <div>
      <h1>Employee Salary</h1>
      <h2>Average Salary: {averageSalary.toFixed(2)}</h2>
      <button onClick={updateEmployeeSalaries}>Update Employee Salaries</button>
    </div>
  );
};

export default EmployeeSalary;