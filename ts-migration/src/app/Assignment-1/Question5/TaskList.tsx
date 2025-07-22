interface TaskProps{
    tasks: string[];
}
export default function TaskList({tasks}:TaskProps){
    return(
        <>
        <p>Component to display the list of tasks</p>
        <ul>
            {
                tasks.map((element:any, index: any)=>(
                    <li key={index}>{index+1}{". "} {element}</li>
                ))
            }
        </ul>
        </>
    )
}