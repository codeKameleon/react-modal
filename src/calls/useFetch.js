import { useState, useEffect } from 'react'
import axios from 'axios'

export const useFetch = (url, token) => {
    const [state, setState] =  useState({
        items: [],
        loading: true
    });

    useEffect(() => {
            axios.get(url, {
                headers: {
                    "Authorization": `Token token=${token}`
                }
            })
            .then((res) => {
                setState({
                    items: res.data,
                    loading: false
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }, [url, token])

    return [
        state.items,
        state.loading
    ];
}