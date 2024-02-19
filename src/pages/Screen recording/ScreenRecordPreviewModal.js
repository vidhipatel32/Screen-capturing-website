import React from 'react';
import { Modal, ModalBody, ModalHeader, Button, Row } from 'reactstrap';
import RecordRTC from 'recordrtc';
import styled from "styled-components";

var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

export default class ScreenRecordPreviewModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
        }
    }
    // Download option for screen record
    downloadScreenRecordVideo = () => {
        let recorderBlob = this.props.recorder;
        if (!recorderBlob) {
            return;
        }
        if (isSafari) {
            if (recorderBlob && recorderBlob.getDataURL) {
                recorderBlob.getDataURL(function (dataURL) {
                    RecordRTC.SaveToDisk(dataURL, this.getFileName('mp4'));
                });
                return;
            }
        }
        if (recorderBlob) {
            var blob = recorderBlob;
            var file = new File([blob], this.getFileName('mp4'), {
                type: 'video/mp4'
            });
            RecordRTC.invokeSaveAsDialog(file);
        }
    };
    // Get file name 
    getFileName = (fileExtension) => {
        var d = new Date();
        var year = d.getFullYear();
        var month = d.getMonth();
        var date = d.getDate();
        return 'ScreenRecord-' + year + month + date + '-' + this.getRandomString() + '.' + fileExtension;
    }
    // Get random string for file name
    getRandomString = () => {
        if (window.crypto && window.crypto.getRandomValues && navigator.userAgent.indexOf('Safari') === -1) {
            var a = window.crypto.getRandomValues(new Uint32Array(3)),
                token = '';
            for (var i = 0, l = a.length; i < l; i++) {
                token += a[i].toString(36);
            }
            return token;
        } else {
            return (Math.random() * new Date().getTime()).toString(36).replace(/\./g, '');
        }
    }
    render() {
        return (
            <Modal isOpen={this.props.isOpenVideoModal}  >
                < ModalHeader className="video__modal__header" toggle={this.props.videoModalClose} >
                    {/* < button className="lnr lnr-cross video__modal__clsBtn formModalCloseButton" type="button"
                        onClick={this.props.videoModalClose} />
                    < span className="bold-text">Preview Screen Record</span > */}
                </ModalHeader>
                < ModalBody>
                    {/* <Row className='downloadButtonAlign' >
                        <Button color='primary' outline onClick={this.downloadScreenRecordVideo} >Download</Button>
                    </Row> */}
                    <VideoContainer>
                    <Button color='primary' outline onClick={this.downloadScreenRecordVideo} >Download</Button>
                    <Video id="videorecord"
                        controls
                        // controlsList="nodownload"
                        autoPlay={this.state.isLoaded}
                        playsInline
                        width={'100%'} height={'100%'}
                        src={this.props.recordedVideoUrl} />
                        </VideoContainer>
                </ModalBody >
            </Modal>
        )
    }
}
const VideoContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

const Video = styled.video`
margin-top:20px;
margin-bottom:40px;
height: 380px;
width:600px;
border: 1px solid #ccc;
border-radius: 4px;
`;