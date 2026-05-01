import { createContext } from "react";
import { useState } from "react";

export const SongContext = createContext();

export const SongContextProvider = ({ children }) => {
    const [song, setSong] = useState({
        "url": "https://ik.imagekit.io/6v2va7nt5/moodify/songs/Gehra_Hua_8lTj_cmW2.mp3",
        "thumbnailUrl": "https://ik.imagekit.io/6v2va7nt5/moodify/posters/Gehra_Hua_CmUyUirXy.jpeg",
        "title": "Gehra Hua",
        "mood": "happy",
    });
    const [loading, setLoading] = useState(false);

    return (
        <SongContext.Provider
            value={{ song, setSong, loading, setLoading }}>
            {children}
        </SongContext.Provider>
    );
}