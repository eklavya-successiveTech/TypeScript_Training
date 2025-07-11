import { TaskListProps } from "@/types";


const TaskList = ({ tasks }: TaskListProps) => {
  return (
    <>
      <p style={{ justifyContent: "center", alignItems: "center", display: "flex" }}>
        Task list is available
      </p>
      {tasks.map((element, index) => (
        <ul key={index} className="tasks">
          <li>{element}</li>
        </ul>
      ))}
    </>
  );
};

export default TaskList;
