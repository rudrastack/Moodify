import { useEffect, useRef, useState } from "react";
import { detect, init } from "../utils/utils";
import "./faceExpression.scss"


export default function FaceExpression({ onClick = () => { } }) {
    const videoRef = useRef(null);
    const landmarkerRef = useRef(null);
    const streamRef = useRef(null);

    const [expression, setExpression] = useState("Detecting...");

    useEffect(() => {
        init({ landmarkerRef, videoRef, streamRef });

        return () => {
            if (landmarkerRef.current) {
                landmarkerRef.current.close();
            }

            if (videoRef.current?.srcObject) {
                videoRef.current.srcObject
                    .getTracks()
                    .forEach((track) => track.stop());
            }
        };
    }, []);

    async function handleClick() {
        const expression = detect({ landmarkerRef, videoRef, setExpression })
        onClick(expression)
    }


    return (
        <div className="camera">
            <video
                ref={videoRef}
                className="camera__video"
                playsInline
            />
            <h2 className="camera__title">{expression}</h2>
            <button onClick={handleClick} className="camera__btn">
                Detect Expression
            </button>
        </div>
    );
}