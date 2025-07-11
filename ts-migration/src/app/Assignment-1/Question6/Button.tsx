interface ButtonProps {
    text: string;
    color: string;
}
export default function Button({text, color}:ButtonProps){
    const style = {
    backgroundColor: color,
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };
    return(
        <button style={style}>{text}</button>
    )
}