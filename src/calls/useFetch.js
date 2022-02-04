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
                console.log('res data', res.data)
                setState({
                    items: res.data,
                    loading: false
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }, [url])

    return [
        state.items,
        state.loading
    ];
}