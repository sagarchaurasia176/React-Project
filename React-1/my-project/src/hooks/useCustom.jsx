import React from 'react'
import axios from 'axios';
import { useState , useEffect } from 'react';
// API_URL 
const API_key = import.meta.env.VITE_API_KEY;
const RandomUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_key}`;


function useCustom(tag) {
    //create one time and execute everywhere
    const [loading, setLoading] = useState(false);
    const [gif, setGif] = useState("");

    const apiData = async (tag) => {
        setLoading(true);
        const { data } = await axios.get(tag ? `${RandomUrl}&tag=${tag}` : RandomUrl );
        const imgSrc = data.data.images.downsized_medium.url;
        setLoading(false);
        setGif(imgSrc);
    };

    useEffect(() => {
        apiData();
    }, []);

    return {loading , gif , apiData}
}

export default useCustom