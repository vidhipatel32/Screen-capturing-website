import React, { useState, useRef } from "react";
import {AiFillAudio } from 'react-icons/ai'
import styled from "styled-components";
import { Button, Row, Col, Container, Card, CardBody } from 'reactstrap';
import '../pages.css';
const mimeType = "audio/webm";

const AudioRecorder = () => {
    const [permission, setPermission] = useState(false);
    const mediaRecorder = useRef(null);
    const [recordingStatus, setRecordingStatus] = useState("inactive");
    const [stream, setStream] = useState(null);
    const [audioChunks, setAudioChunks] = useState([]);
    const [audio, setAudio] = useState(null);


    const getMicrophonePermission = async () => {
        if ("MediaRecorder" in window) {
            try {
                const streamData = await navigator.mediaDevices.getUserMedia({
                    audio: true,
                    video: false,
                });
                setPermission(true);
                setStream(streamData);
            } catch (err) {
                alert(err.message);
            }
        } else {
            alert("The MediaRecorder API is not supported in your browser.");
        }
    };

    const startRecording = async () => {
        setRecordingStatus("recording");
        //create new Media recorder instance using the stream
        const media = new MediaRecorder(stream, { type: mimeType });
        //set the MediaRecorder instance to the mediaRecorder ref
        mediaRecorder.current = media;
        //invokes the start method to start the recording process
        mediaRecorder.current.start();
        let localAudioChunks = [];
        mediaRecorder.current.ondataavailable = (event) => {
            if (typeof event.data === "undefined") return;
            if (event.data.size === 0) return;
            localAudioChunks.push(event.data);
        };
        setAudioChunks(localAudioChunks);
    };
    const stopRecording = () => {
        setRecordingStatus("inactive");
        //stops the recording instance
        mediaRecorder.current.stop();
        mediaRecorder.current.onstop = () => {
            //creates a blob file from the audiochunks data
            const audioBlob = new Blob(audioChunks, { type: mimeType });
            //creates a playable URL from the blob file.
            const audioUrl = URL.createObjectURL(audioBlob);
            setAudio(audioUrl);
            setAudioChunks([]);
        };
    };
    return (
        <Container>
        {audio ? (
            <AudioContainer>
                <Audio src={audio} controls /><br />
                <Button download href={audio}>
                    Download Recording
                </Button>
            </AudioContainer>) :
            (<div className="audio-controls page">
                <Card>
                    <CardBody>
                        <Row>
                            <Col>
                                <span ><AiFillAudio /></span>
                                <h3>Audio Recording</h3>
                                <h5>Follow the below steps to do Audio recording</h5>
                                <p>1.To start recording click on Audio recording to give Microphone Permission</p>
                                <p>2.Click on start recording button</p>
                                <p>3.To stop recording click on stop recording</p>
                                <p>4.click on download to download audio</p>

                            </Col>
                        </Row>
                        <Col>
                            <Button onClick={getMicrophonePermission} type="button">
                                 Audio Recording
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
    );
};
export default AudioRecorder;

const AudioContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

const Audio = styled.audio`
margin-top:100px;
max-width: 80%;
border: 1px solid #ccc;
border-radius: 4px;
`;
