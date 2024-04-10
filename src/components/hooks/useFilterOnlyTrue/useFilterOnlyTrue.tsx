type ObjProps = {
    item1: boolean;
    item2: boolean;
    item3: boolean;
}

const useFilterOnlyTrue = () => {

    const obj: ObjProps[] = [
        { item1: true, item2: true, item3: true },
        { item1: true, item2: false, item3: true },
        { item1: true, item2: true, item3: true },
        { item1: true, item2: true, item3: true },
    ]

    const filterOnlyTrue = () => {
        return obj.filter((obj) => Object.values(obj).filter(Boolean).length === 3);
    }

    return filterOnlyTrue;
}

export default useFilterOnlyTrue;