"use client"
import React, { useState, useCallback } from 'react';

interface UseClipboardReturn {
  copied: boolean;
  copy: () => void;
}

const useClipboard = (text: string): UseClipboardReturn => {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(() => {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    
    try {
      const successful = document.execCommand('copy');
      setCopied(successful);
      
      if (successful) {
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (err) {
      setCopied(false);
    } finally {
      document.body.removeChild(textarea);
    }
  }, [text]);

  return { copied, copy };
};
export default useClipboard