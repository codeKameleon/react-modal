import {useState, useEffect} from 'react'


export const useFetch = url => {
    const [state, setState] =  useState({
        items: [],
        loading: true
    });

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url);
            const data = await response.json();

            if(response.ok) {
                setState({
                    items: data,
                    loading: false
                })
            } else {
                alert(JSON.stringify(data))
                setState(s => ({...s, loading: false}))
            }
        }
        fetchData();
    }, [url])

    return [
        state.items,
        state.loading
    ];
}