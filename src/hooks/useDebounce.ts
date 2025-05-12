import { useEffect, useState } from "react";

/**
 *  @description usehooks-ts.com
 *  @params value
 *  @params delay
 *  @returs 
 */

export function useDebounce<T>(value: T, delay?: 500): T {
    const [debounceValue, setDebouncedValue] = useState<T>(value);


    useEffect(()=> {
        const timer = setTimeout(() => setDebouncedValue(value), delay );

        return () => {
            clearTimeout(timer);
        };
    }, [value, delay]);

    return debounceValue;
}