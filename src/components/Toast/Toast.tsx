import React, { useEffect } from 'react';
import { useToast, useToastService } from '@services';
import { ToastContent } from './components/ToasContent';
import { Animated } from 'react-native';

const DEFAULT_DURATION = 2000;


const fadeAnim = React.useRef(new Animated.Value(0)).current;

export function Toast() {
  const toast = useToast();
  const { hideToast } = useToastService();

  useEffect(() => {
    if (toast) {
      setTimeout(() => {
        hideToast();
      }, toast.duration || DEFAULT_DURATION);
    }
  }, [hideToast, toast]);

  if (!toast) {
    return null;
  }

  return (
    <Animated.View testID={'toast-message'} style={{position: 'absolute', alignSelf: 'center', opacity: fadeAnim}}>
      <ToastContent toast={toast}>

      </ToastContent>
    </Animated.View>

  )
}
