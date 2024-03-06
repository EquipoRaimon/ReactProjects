import { useEffect, useRef } from 'react';

export function useIntervalo(callback, delay) {
  const savedCallback = useRef();
  // Te recuerda la última devolución de llamada
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Configuras el intervalo
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => {
        clearInterval(id);
      };
    }
  }, [delay]);
}