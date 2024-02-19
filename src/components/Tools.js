import React from 'react'
import { FaCrown } from 'react-icons/fa'
import SectionHead from './SectionHead'
import Card from '../UI/Card'
import { RiScreenshotFill } from 'react-icons/ri'
import { GiVideoConference } from 'react-icons/gi'
import { MdOndemandVideo } from 'react-icons/md'
import { BsRecordBtn } from 'react-icons/bs'
import { AiFillAudio } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Tools = () => {
  return (
    <section className="tools">
      <div className="container tools__container">
        <SectionHead icon={<FaCrown/>} title="Tools" />
      
      <div className='tools__wrapper'>
        <Card className="tools__tool">
          <Link to='screenshot'>
            <span><RiScreenshotFill /></span>
            <h4>ScreenShot</h4>
        
          </Link>
        </Card>
        <Card className="tools__tool">
          <Link to='screenrecorder'>
          <span><BsRecordBtn /></span>
          <h4>Screen Recording</h4>
          
          </Link>
        </Card>
        <Card className="tools__tool center">
          <Link to='webcam'>
          <span><GiVideoConference /></span>
          <h4>Webcam</h4>
          
          </Link>
        </Card>
        <Card className="tools__tool">
          <Link to='videorecorder'>
          <span><MdOndemandVideo /></span>
          <h4>Video Recorder </h4>
          
          </Link>
        </Card>
        <Card className="tools__tool">
          <Link to='audiorecorder'>
          <span><AiFillAudio /></span>
          <h4>Audio Recorder</h4>
          </Link>
        </Card>
      </div>
      </div>
    </section>
  )
}

export default Tools