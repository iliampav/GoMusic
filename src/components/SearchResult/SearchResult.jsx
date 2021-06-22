import { useState, useEffect } from "react";
import { useHistory } from "react-router";

export default function SearchResult() {

    const history = useHistory()
    const inputSeach = history.location.state

    const [list, setList] = useState([])    
    const [videos, setVideos] = useState([])

    const search = inputSeach.inputValue.split(' ').join('+')

    useEffect(() => {
        fetch(`https://www.googleapis.com/youtube/v3/search?q=${search}&part=snippet&key=AIzaSyCQybqHDr1JGkg3X9M3FHeE2WTUdgpxQc0`)
        .then(response => response.json())
        .then(data => {
            setList(data)
        })
    }, []);

    useEffect(() => {
        fetch(`https://app.ticketmaster.com/discovery/v2/attractions.json?keyword=${search}&apikey=SHoe0U5Z7AI0rRmTp7TAWDuJetZYM8zG`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
    }, []);

    

    console.log(list)
    

    return (
        <div>Search</div>
    )
}