import { MdSecurity } from 'react-icons/md'
import { BsWebcamFill } from 'react-icons/bs'
import { TbFreezeRow } from 'react-icons/tb'



export const faqs = [
    {
        id: 1,
        question: 'Is ScreenCaps Free??',
        answer: "Yes! Our screen and webcam recorder is free to use for all users. "
    },
    {
        id: 2,
        question: 'Can I download my content?',
        answer: "Yes! You can download your content"
    },
    {
        id: 3,
        question: 'Is online screen recording secure?',
        answer: "Yes, it is absolutely secure, both for your browser and for your laptop. All recordings are for your use only – nobody can steal them."

    },
    {
        id: 4,
        question: 'How can I record my screen with audio?',
        answer: "To include your voice, enable the Microphone icon mark before you start recording. If you need to capture internal system sounds, enable the Sound icon."
    
    }
]
export const wcs = [
    {
        id: 1,
        icon: <MdSecurity />,
        name: "Securit Guaranteed",
        desc: "Don't worry about privacy and security because we have no access to your uploaded files."
    },
    {
        id: 2,
        icon: <BsWebcamFill />,
        name: "Web-based Screen Recorder",
        desc: "Our free screen recorder allows you to easily capture your screen online without installing any software or extensions."
    },
    {
        id: 3,
        icon: <TbFreezeRow />,
        name: "Free to Use",
        desc: "The screen recording tool is free and simple to use. Don't hesitate to record your content now."
    }

]