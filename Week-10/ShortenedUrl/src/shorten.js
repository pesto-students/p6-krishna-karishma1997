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
    return (
        <div className="fixed-top background_img">
            <center className="m-40"><h1>More than just shorter Links</h1><br/>
            <h6>Build your recognition and get detailed insights on how your links are performing</h6><br/>
            <input type="text" name="url" className="text-primary" value={url} onChange={(e) => { seturl(e.target.value) }} />
            <button onClick={() => {
                fetchData();
            }} className="text-primary"
            >
                Submit URL
            </button><br/>
            {shortenedUrl }
            </center>
        </div>
    )
}
export default Shorten;