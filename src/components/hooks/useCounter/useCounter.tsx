import { useEffect, useState } from "react"

export const useCounter = (initialCount: any) => {
    const [count, setCount] = useState(initialCount)
    const [object, setObject] = useState<any[]>([])
    const increment = () => setCount(count + 1)
    const decrement = () => setCount(count - 1)

    const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setObject(data);
    }

    return { count, increment, decrement, object, fetchData }
}