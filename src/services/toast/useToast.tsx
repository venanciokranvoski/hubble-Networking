import React, { createContext, useContext, useState } from 'react';

interface Toast {
  message: string;
  type: 'success' | 'error';
  duration: number;
  action: {
    title: string;
    onPress: () => void;
  };
}

interface ToastService {
  toast: Toast | null;
  showToast: (toast: Toast) => void;
  hiddenToast: () => void;
}

const ToastContext = createContext<ToastService>({
  toast: null,
  showToast: () => {},
  hiddenToast: () => {},
});

const [toast, setToast] = useState<ToastService['toast']>(null);

function showToast(_toast: Toast) {
  setToast(_toast);
}

function hiddenToast() {
  setToast(null);
}

export function ToastProvider({ children }: React.PropsWithChildren<{}>) {
  return (
    <ToastContext.Provider value={{ toast, showToast, hiddenToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export function useToast(): ToastService {
  const { toast, hiddenToast, showToast } = useContext(ToastContext);
  return {
    toast,
    hiddenToast,
    showToast,
  };
}
