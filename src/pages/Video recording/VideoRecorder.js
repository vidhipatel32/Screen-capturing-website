import { useState, useRef } from "react";
import { MdOndemandVideo } from 'react-icons/md'
import styled from "styled-components";
import { Button, Row, Col, Container, Card, CardBody } from 'reactstrap';
import '../pages.css';
const mimeType = "video/webm";

const VideoRecorder = () => {
    const [permission, setPermission] = useState(false);
    const mediaRecorder = useRef(null);
    const liveVideoFeed = useRef(null);
    const [recordingStatus, setRecordingStatus] = useState("inactive");
    const [stream, setStream] = useState(null);
    const [videoChunks, setVideoChunks] = useState([]);
    const [video, setRecordedVideo] = useState(null);
    const getCameraPermission = async () => {
        setRecordedVideo(null);
        if ("MediaRecorder" in window) {
            try {
                const videoConstraints = {
                    audio: false,
                    video: true,
                };
                const audioConstraints = { audio: true };
                // create audio and video streams separately
                const audioStream = await navigator.mediaDevices.getUserMedia(
                    audioConstraints
                );
                const videoStream = await navigator.mediaDevices.getUserMedia(
                    videoConstraints
                );
                setPermission(true);
                //combine both audio and video streams
                const combinedStream = new MediaStream([
                    ...videoStream.getVideoTracks(),
                    ...audioStream.getAudioTracks(),
                ]);
                setStream(combinedStream);
                //set videostream to live feed player
                liveVideoFeed.current.srcObject = videoStream;
            } catch (err) {
                alert(err.message);
            }
        } else {
            alert("The MediaRecorder API is not supported in your browser.");
        }
    };
    const startRecording = async () => {
        setRecordingStatus("recording");
        const media = new MediaRecorder(stream, { mimeType });
        mediaRecorder.current = media;
        mediaRecorder.current.start();
        let localVideoChunks = [];
        mediaRecorder.current.ondataavailable = (event) => {
            if (typeof event.data === "undefined") return;
            if (event.data.size === 0) return;
            localVideoChunks.push(event.data);
        };
        setVideoChunks(localVideoChunks);
    };
    const stopRecording = () => {
        setPermission(false);
        setRecordingStatus("inactive");
        mediaRecorder.current.stop();
        mediaRecorder.current.onstop = () => {
            const videoBlob = new Blob(videoChunks, { type: mimeType });
            const videoUrl = URL.createObjectURL(videoBlob);
            setRecordedVideo(videoUrl);
            setVideoChunks([]);
        };
    };

    return (
        <Container>
            {video ? (
                <VideoContainer>
                    <Video src={video} controls /><br />
                    <Button download href={video}>
                        Download Recording
                    </Button>
                </VideoContainer>) :
                (<div className="video-controls page">
                    <Card>
                        <CardBody>
                            <Row>
                                <Col>
                                    <span ><MdOndemandVideo /></span>
                                    <h3>Video Recording</h3>
                                    <h5>Follow the below steps to do Video recording</h5>
                                    <p>1.To start recording click on video recording to give Camera Permission</p>
                                    <p>2.Click on start recording button</p>
                                    <p>3.To stop recording click on stop recording</p>
                                    <p>4.click on download to download video</p>

                                </Col>
                            </Row>
                            <Col>
                                <Button onClick={getCameraPermission} type="button">
                                    Video Recording
                                </Button>


                                <Button onClick={startRecording} type="button">
                                    start Recording
                                </Button>


                                <Button onClick={stopRecording} type="button">
                                    stop recording
                                </Button>
                            </Col>
                        </CardBody>
                    </Card></div>
                )}

        </Container>
    )
};
export default VideoRecorder;


const VideoContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

const Video = styled.video`
margin-top:100px;
max-width: 80%;
border: 1px solid #ccc;
border-radius: 4px;
`;