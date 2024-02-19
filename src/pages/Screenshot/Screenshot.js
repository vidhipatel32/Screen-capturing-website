import React, { useState } from "react";
import styled from "styled-components";
import { RiScreenshotFill } from 'react-icons/ri'
import { Row, Col, Card, CardBody ,Button, Container} from 'reactstrap';
import '../pages.css'
const ScreenshotButton = ({ onClick }) => (
    <Container>
    <div>
      <div className='page'>
        <Card>
          <CardBody>
            <Row>
              <Col>
                <span ><RiScreenshotFill/></span>
                <h3>ScreenShot</h3>
                <h5>Follow the below steps to do screenshot</h5>
                <p>1.Click on Capture Screenshot button</p>
                <p>2.Select the screen</p>
                <p>3.Click on share button to confirm recording</p>
                <p>4.Click on download button to download </p>
              </Col>
            </Row>
            <Col>

              <Button onClick={onClick}>Capture Screenshot</Button>
            </Col>
          </CardBody>
        </Card>
      </div>
    </div>
    </Container>
);

const ScreenshotViewer = ({ screenshotUrl, onDownload }) => (
  <ScreenshotContainer>
    <ScreenshotImg src={screenshotUrl} alt="Screenshot" />
    <Button onClick={onDownload}>Download Screenshot</Button>
  </ScreenshotContainer>
);

const Screenshot = () => {
  const [screenshotUrl, setScreenshotUrl] = useState("");
  const [showScreenshot, setShowScreenshot] = useState(false);

  const captureScreenshot = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
      const videoElement = document.createElement("video");
      videoElement.srcObject = stream;
      videoElement.play();

      videoElement.addEventListener("loadeddata", () => {
        const canvas = document.createElement("canvas");
        canvas.width = videoElement.videoWidth;
        canvas.height = videoElement.videoHeight;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);

        const img = new Image();
        img.src = canvas.toDataURL("image/png");

        setScreenshotUrl(img.src);
        setShowScreenshot(true);

        stream.getTracks().forEach((track) => track.stop());
      });
    } catch (err) {
      console.error(err);
    }
  };

  const downloadScreenshot = () => {
    const link = document.createElement("a");
    link.href = screenshotUrl;
    link.download = "screenshot.png";
    link.click();

  };

  return (
    <Container>
      {showScreenshot ? (
        <ScreenshotViewer
          screenshotUrl={screenshotUrl}
          onDownload={downloadScreenshot}

        />
      ) : (
        <ScreenshotButton onClick={captureScreenshot} />
      )}
    </Container>
  );
};



const ScreenshotContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ScreenshotImg = styled.img`
  margin-top:100px;
  max-width: 80%;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export default Screenshot;

