import { renderHook } from "@testing-library/react"
import { useAuth } from "./useAuth"
import { act } from "react-dom/test-utils";

describe('useAuth', () => {
    it('should return default values', () => {
        const { result } = renderHook(() => useAuth())

        expect(result.current.user).toBe(null);
        expect(result.current.isAuthenticated).toBe(false);
        expect(typeof result.current.login).toBe('function');
        expect(typeof result.current.logout).toBe('function');
    });

    it('should isAuthenticated to be false and user to be null when logout was called', () => {
        const { result } = renderHook(() => useAuth())

        act(() => { result.current.logout() })

        expect(result.current.user).toBe(null)
        expect(result.current.isAuthenticated).toBe(false)
    });

    it('should set isAuthenticated to true and user containes infos when login is called', () => {
        const { result } = renderHook(() => useAuth());

        act(() => {
            result.current.login({ username: 'teste@teste.com', password: '123' });
        })

        expect(result.current.user && Object.keys(result.current.user).length).toBeGreaterThan(0);
        expect(result.current.isAuthenticated).toBe(true);
    });
})