import axios from "axios";
import { useState } from "react";

const Shorten = () => {
    const [url, seturl] = useState("");
    const [shortenedUrl, setshortenedUrl] = useState("");
    const fetchData = async () => {
        try {
            const response = await axios(`https://api.shrtco.de/v2/shorten?url=${url}`
            );
            console.log(response);
            setshortenedUrl(response.data.result.full_short_link);
        } catch (e) {
            console.log(e);
        }
    };
    console.log(url);
    return (
        <div className="fixed-top">
            <input type="text" name="url" className="text-primary" value={url} onChange={(e) => { seturl(e.target.value) }} />
            <button onClick={() => {
                fetchData();
            }} className="text-primary"
            >
                Submit URL
            </button><br/>
            {shortenedUrl}
        </div>
    )
}
export default Shorten;