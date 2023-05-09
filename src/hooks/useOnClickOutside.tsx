import { RefObject, useCallback } from 'react';
import { useEventListener } from 'usehooks-ts';

type Handler = (event: MouseEvent | TouchEvent) => void;

export default function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: Handler,
  eventType: 'click' | 'touchstart' = 'click'
): void {
  const handleClickOutside = useCallback(
    (event: MouseEvent | TouchEvent) => {
      const el = ref?.current;

      if (!el || el.contains(event.target as Node)) {
        return;
      }
      handler(event);
    },
    [ref, handler]
  );
  useEventListener(eventType, handleClickOutside);
}
