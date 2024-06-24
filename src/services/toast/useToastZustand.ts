import { ToastService } from './toastTypes';
import { create } from 'zustand';

const useToastStore = create<ToastService>((set) => ({
  toast: null,
  showToast: (toast) => set({ toast }),
  hideToast: () => set({ toast: null }),
}));

export function useToastZustand(): ToastService['toast'] {
  return useToastStore((state) => state.toast);
}

// evitar re-renderizações desnecessaria para quem usa o toast com isso vou usar o Pick
// para selecionar quais eu irei utilizar
export function useToasServiceZustand(): Pick<
  ToastService,
  'showToast' | 'hideToast'
> {
  const showToast = useToastStore((state) => state.showToast);
  const hideToast = useToastStore((state) => state.hideToast);

  return {
    showToast,
    hideToast,
  };
}
