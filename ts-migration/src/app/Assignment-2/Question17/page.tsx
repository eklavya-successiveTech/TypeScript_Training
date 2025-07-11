import { useState } from "react";
import useClipboard from "../hooks/useClipBoard";

const ClipboardComponent: React.FC = () => {
  const [textToCopy, setTextToCopy] = useState('Hello, this is sample text to copy!');
  const { copied, copy } = useClipboard(textToCopy);

  return (
    <div>
      <h1>Clipboard Hook Demo</h1>
      <div>
        <p>Text to copy: {textToCopy}</p>
        <button onClick={copy}>
          {copied ? 'Copied!' : 'Copy Text'}
        </button>
      </div>
      <div>
        <input 
          type="text" 
          value={textToCopy} 
          onChange={(e) => setTextToCopy(e.target.value)}
          placeholder="Enter text to copy"
        />
      </div>
    </div>
  );
};

export default ClipboardComponent;