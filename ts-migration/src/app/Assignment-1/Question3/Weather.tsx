interface TempProps {
  temperature: number;
}

export default function Weather({ temperature }: TempProps) {
  let message = "";

  if (temperature > 25) {
    message = "It's sunny today!";
  } else if (temperature < 10) {
    message = "It's cold today!";
  } else {
    message = "The weather is moderate.";
  }

  return (
    <>
      <h1>{message}</h1>
    </>
  );
}