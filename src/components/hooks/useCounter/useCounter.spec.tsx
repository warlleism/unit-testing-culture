import { renderHook, RenderHookResult } from "@testing-library/react"
import { useCounter } from "./useCounter";
import { act } from "react-dom/test-utils";

describe('useCounter', () => {
    it('should return default values', () => {
        const { result } = renderHook(() => useCounter(0))
        expect(result.current.count).toBe(0);
    });

    it('the counter must be incremented when it is called increment', () => {
        const { result } = renderHook(() => useCounter(1))
        act(() => { result.current.increment() })
        expect(result.current.count).toBe(2);
    });

    it('the counter must be decremented when it is called decrement', () => {
        const { result } = renderHook(() => useCounter(1))
        act(() => { result.current.decrement() })
        expect(result.current.count).toBe(0);
    });

    it('when fetchData is called, the object must be greater than zero', async () => {
        const { result } = renderHook(() => useCounter(1));
        expect(result.current.object.length).toBe(0);
        await act(async () => { await result.current.fetchData() });
        expect(result.current.object.length).toBeGreaterThan(0);
    });

})