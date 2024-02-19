import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.css';
import Home from './pages/Home/Home'
import AudioRecorder from './pages/Audio recording/AudioRecorder';
import VideoRecorder from './pages/Video recording/VideoRecorder';
import Screenshot from './pages/Screenshot/Screenshot';
import ScreenRecording from './pages/Screen recording/ScreenRecording';
import { Navbar } from './components/Navbar';
import Webcam from './pages/Screen and webcam/Webcam';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='screenshot' element={<Screenshot />} />
        <Route path='screenrecorder' element={<ScreenRecording />} />
        <Route path='webcam' element={<Webcam />} />
        <Route path='videorecorder' element={<VideoRecorder />} />
        <Route path='audiorecorder' element={<AudioRecorder />} />
      </Routes>


    </BrowserRouter>

  );
}

export default App;

