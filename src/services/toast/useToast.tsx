import { ToastService } from './toastTypes';
// UseContext use
// import { useToastContext } from './useToastContext'; context
// utilizando o Zustand
import { useToasServiceZustand, useToastZustand } from './useToastZustand';

export function useToast(): ToastService['toast'] {
  //const { toast } = useToastContext(); // context
  return useToastZustand();
}

export function useToastService(): Pick<
  ToastService,
  'showToast' | 'hideToast'
> {
  // const { hideToast, showToast } = useToastContext();
  // return {
  //   showToast,
  //   hideToast,
  // };
  return useToasServiceZustand();
}
