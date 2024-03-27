import React from 'react' 
import image1 from './Images/cat.jpg'
import audio1 from './Audio/Bol.mp3'
// import video1 from './Video/vid.mp4'
function Html(){
    return(
        <div>
            <h1>Welcome To Html</h1>
            <h5>Welcome To React</h5>
            <img src={'https://cdn.pixabay.com/photo/2018/08/12/16/59/parrot-3601194_640.jpg'}height={'500px'} width={'49%'}></img>
            <img src={image1} height={'500px'} width={'49%'}></img>
            <br /><br />
            <a href='https://www.youtube.com/' target={'_blank'}>Youtube</a>
            <br /><br />
            <iframe   src="https://www.youtube.com/embed/gCFkkYZSxOc?si=94f3LR0C3npp3VdU" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7567.182180528536!2d73.8586251413569!3d18.50217238035099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c014271918c5%3A0xfa3ce63f0c494d3f!2sSwargate%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1707895569808!5m2!1sen!2sin" width="600" height="450"  loading="lazy" ></iframe>
             <br /><br />
             <audio src={audio1} autoplay loop controls muted></audio>
             <video src={video1} autoplay loop controls  width={'50%'}></video>
             <br /><br />
             <table border={1} bgcolor='skyblue' cellSpacing={'10px'} rules={'row'}>
                <thead>
                    <tr>
                        <td>Sno</td>
                        <td>Name</td>
                        <td>Sal</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>01</td>
                        <td>A</td>
                        <td >10</td>
                    </tr>
                    <tr>
                        <td >02</td>
                        <td rowSpan={2}>B</td>
                        <td >20</td>
                    </tr>
                    <tr>
                        <td >03</td>
                        <td >30</td>
                    </tr>
                    <tr>
                        
                        <td colSpan={3}>@copyright</td>
                    </tr>
                </tbody>

             </table>

        </div>

    )
}
export default Html