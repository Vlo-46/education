import React, {useState, useEffect, useRef} from 'react'
import styles from './videochat.module.css'

const VideoField = () => {
    const [cameraIcon, setCameraIcon] = useState(true)
    const [microphoneIcon, setMicrophone] = useState(false)
    const [displayMedia, setDisplayMedia] = useState(false)

    const videoRef = useRef(null);
    const userVideoRef = useRef(null)
    const displayMediaRef = useRef(null)
    useEffect(() => {
        getUserVideo()
    }, [videoRef, userVideoRef, displayMediaRef, cameraIcon, microphoneIcon, displayMedia]);


    async function startCapture() {
        navigator.mediaDevices.getDisplayMedia({
            video: true,
            width: "100",
            height: "100"
        })
            .then(stream => {
                let capture = displayMediaRef.current;
                capture.srcObject = stream;
                capture.play()
            })
    }


    const getVideo = () => {
        navigator.mediaDevices
            .getUserMedia({
                video: cameraIcon,
                audio: microphoneIcon,
            })
            .then(stream => {
                let video = videoRef.current;
                video.srcObject = stream;
                video.play();
            })
            .catch(err => {
                console.error("error:", err);
            });
    };
    getVideo();

    const getUserVideo = () => {
        navigator.mediaDevices
            .getUserMedia({
                video: true,
                audio: false
            })
            .then(stream => {
                let video = userVideoRef.current;
                video.srcObject = stream;
                video.play();
            })
            .catch(err => {
                console.error("error:", err);
            });
    }

    let startScreenCapture = (displayMedia) => {
        if (!displayMedia) {
            startCapture()
        } else {
            getVideo()
        }
        setDisplayMedia(!displayMedia)
    }

    return (
        <div className={styles.videoField}>
            {
                displayMedia
                    ? <video ref={displayMediaRef} className={styles.camera}/>
                    :
                    cameraIcon
                        ? <video ref={videoRef} className={styles.camera}/>
                        : <img src="assets/images/no-video.jpg" alt="no-video" className={styles.noVideo}/>
            }
            <video ref={userVideoRef} className={styles.userCamera}/>
            <div className={styles.instruments}>
                <button className={`btn ${styles.instrumentButton}`}
                        onClick={() => setCameraIcon(!cameraIcon)}
                >
                    {
                        cameraIcon
                            ? <img src="assets/icons/camera.svg" alt="camera"/>
                            : <img src="assets/icons/camera-off.svg" alt="camera"/>
                    }
                </button>
                <button className={`btn ${styles.instrumentButton}`}
                        onClick={() => startScreenCapture(displayMedia)}
                >
                    <img src="assets/icons/demostration.svg" alt="demostration"/>
                </button>
                <button className={`btn ${styles.instrumentButtonEndCall}`}>
                    <img src="assets/icons/end-call.svg" alt="end-call"/>
                </button>
                <button className={`btn ${styles.instrumentButton}`}
                        onClick={() => setMicrophone(!microphoneIcon)}
                >
                    {
                        microphoneIcon
                            ? <img src="assets/icons/microphone.svg" alt="microphone"/>
                            : <img src="assets/icons/microphone-off.svg" alt="camera"/>
                    }
                </button>
            </div>
        </div>
    )
}

export default VideoField