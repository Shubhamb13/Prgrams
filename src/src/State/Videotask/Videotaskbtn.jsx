import { useRef, useState } from 'react'
import video1 from './Video/vid.mp4'

const Videotaskbtn = () => {
    const[play,Setplay]=useState(false)
    const VideoElement=useRef()

    function handleclick(){
        const nextplay= !play
        Setplay(nextplay)
        if(nextplay){
            VideoElement.current.play()

        }
        else{
            VideoElement.current.pause()
        }
    }
  return (
    <div>
        <button onClick={handleclick}> {play ? "pause" : "play"}</button>
        <video ref={VideoElement} src={video1} height={'500px'} width={'100%'}></video>
    </div>
  )
}

export default Videotaskbtn