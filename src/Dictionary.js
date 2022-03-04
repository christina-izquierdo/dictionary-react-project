import React, {useState} from "react";
import axios from "axios";
import Results from "./Results.js";
import Photos from "./Photos.js"
import "./Dictionary.css";

export default function Dictionary(){
    let [keyword, setKeyword] = useState("sunset");
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);
    function handleResponse(response){
        setResults(response.data[0]);
    }
    function handlePexelsResponse(response){
        setPhotos(response.data.photos);
    }
    function search(){
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
        let pexelsApiKey = "563492ad6f917000010000016638c8e6a3e646549ffc4f8b12d4bfdc";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
        let headers = {Authorization: `Bearer ${pexelsApiKey}`};
        axios.get(pexelsApiUrl, { headers: headers}).then(handlePexelsResponse);
    }
    function handleSubmit(event){
       event.preventDefault();
        search();
    }

    function handleKeywordChange(event){
        setKeyword(event.target.value);
    } 
    function load(){
        setLoaded(true);
        search();
    }
    if (loaded){
        return (
        <div className="Dictionary">
            <section>
                <form onSubmit={handleSubmit}>
                    <input type="search" onChange={handleKeywordChange}/>
                </form>
                <div className="hint">
                suggested words: retro, computer, waves, cat
            </div>
            </section>
           
            <Results results={results}/>
            <Photos photos={photos}/>
        </div>
        );
} else {
    load();
    return "Loading";
}}
