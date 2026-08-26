import React from 'react';
import { Check } from 'lucide-react';

interface ToastProps {
  show: boolean;
  message: string;
}

export const Toast: React.FC<ToastProps> = ({ show, message }) => {
  if (!show) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-black text-white px-5 py-3.5 border-2 border-white shadow-2xl animate-slideUp">
      <Check className="w-4 h-4 text-white shrink-0" />
      <span className="text-xs font-bold font-mono uppercase tracking-wider">{message}</span>
    </div>
  );
};
