import useStore from "./zustandStore"

export function ZustandCounter() {
    const { count, increment, decrement, mode } = useStore()
    return (
        <div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={mode} role="iconTheme">Theme</button>
            <span role="counterinfo">{count}</span>
        </div>
    )
}