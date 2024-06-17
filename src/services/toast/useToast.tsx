import { useState } from 'react';

interface Toast {
  message: string;
  type: 'sucess' | 'error';
  duration: number;
  action: {
    title: string;
    onPress: () => void;
  };
}

interface ToastService {
  toast: Toast;
  showToast: (toast: Toast) => void;
  hiddenToast: () => void;
}

export function useToast(): ToastService {
  const [toast, setToast] = useState<ToastService['toast']>(null);

  function showTest(_toast: Toast) {
    setToast(_toast);
  }

  function hiddenToast() {
    setToast(null);
  }

  return {
    toast,
    showToast,
    hiddenToast,
  };
}
