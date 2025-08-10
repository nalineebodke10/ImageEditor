import React, { use } from 'react'
import './Home.css'
import ImageBtn from '../../Component/ImageBtn.jsx';
import BgColorPicker from '../../Component/bgColorPicker.jsx';
import { useState } from 'react'
import catImg from '../../assets/catImg.jpg';
import img2 from '../../assets/img2.webp';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';
import img5 from '../../assets/img5.jpg';
import img6 from '../../assets/img6.jpg';
import rotate1 from './rotate1.png';
import rotate2 from './rotate2.png';

function Home() {

    const [image, setImage] = useState(catImg);
    const [sliderValue, setSliderVlue] = useState(50);
    const [bgColor, setBgColor] = useState("#ffffff");
    const [angle, setAngle] = useState(0);
    const [inputColor, setInputColor] = useState('#ffffff');

    // const handleImageChange = (newImage) => {
    //     setImage(newImage);
    // };


    const downloadEditedImage = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        const img = new Image();
        img.crossOrigin = "anonymous"; // avoid CORS issues
        img.src = image; // your selected image

        img.onload = () => {
            // Set canvas size (same as your preview size)
            const size = 300; // adjust to match your preview dimensions
            canvas.width = size;
            canvas.height = size;

            // Fill background color
            ctx.fillStyle = bgColor;
            ctx.fillRect(0, 0, size, size);

            // Move to center for rotation
            ctx.translate(size / 2, size / 2);
            ctx.rotate(angle * Math.PI / 180);

            // Scale image according to slider value
            const scale = sliderValue / 100;
            const imgWidth = img.width * scale;
            const imgHeight = img.height * scale;

            ctx.drawImage(img, -imgWidth / 2, -imgHeight / 2, imgWidth, imgHeight);

            // Create download link
            const link = document.createElement("a");
            link.download = "edited-image.png";
            link.href = canvas.toDataURL("image/png");
            link.click();
        };
    };




    return (
        <div className='app-container'>
            <h1>Playing with Images using <span className='header-highlight'>useState</span></h1>
            <p className='description'>
                This is a simple image editor application built with React. It allows you to upload an image,<br></br> apply filters, and download the edited image.
            </p>

            <div className='image-container' style={{ backgroundColor: bgColor }}>
                <img src={image} alt='Cat'
                    className='cat-image'
                    style={{
                        height: `${sliderValue}%`,
                        width: `${sliderValue}%`,
                        transform: `rotate(${angle}deg)`
                    }} />
            </div>

            <div style={{
                display: 'flex', justifyContent: 'center',
                alignItems: 'center'
            }}>
                <div style={{ marginRight: '30px' }}>
                    <div className='slider-container'>
                        <input type='range' min='0' max='100' className='slider' onClick={(e) => { setSliderVlue(e.target.value) }} />
                    </div>

                    <div className='angle-container'>
                        <img
                            src={rotate1}
                            alt='Rotate Right'
                            className='rotate-icon rotate-icon-right'
                            onClick={() => setAngle(angle + 90)}
                        />
                        <img
                            src={rotate2}
                            alt='Rotate Left'
                            className='rotate-icon rotate-icon-left'
                            onClick={() => setAngle(angle - 90)}
                        />
                        
                    </div>
                </div>
                <div>
                    <div style={{ fontSize: '18px', marginBottom: '10px', color: '#4d4d4d    ' }}><b>Enter a Color: </b></div>
                    <input
                        type='text'
                        style={{ borderRight: 'None', fontSize: '18px', width: '150px', color: '#4d4d4d' }}
                        value={inputColor}
                        onChange={(e) => setInputColor(e.target.value)}
                    />
                    <button style={{ fontSize: '18px' }} onClick={() => setBgColor(inputColor)}>Ok</button>
                </div>
                <button onClick={downloadEditedImage} className='DownloadImg'>
                    Download Image
                </button>

            </div>
            <div className='image-picker'>

                <ImageBtn image={catImg} setImage={setImage} />
                <ImageBtn image={img2} setImage={setImage} />
                <ImageBtn image={img3} setImage={setImage} />
                <ImageBtn image={img4} setImage={setImage} />
                <ImageBtn image={img5} setImage={setImage} />
                <ImageBtn image={img6} setImage={setImage} />
                <ImageBtn image={img3} setImage={setImage} />
                <ImageBtn image={img4} setImage={setImage} />
                <ImageBtn image={img5} setImage={setImage} />
                <ImageBtn image={img6} setImage={setImage} />
            </div>

            <div className='color-picker-container'>

                <BgColorPicker bgColor={'#ffffff'} setBgColor={setBgColor} />
                <BgColorPicker bgColor={'#fac9c9ff'} setBgColor={setBgColor} />
                <BgColorPicker bgColor={'#d6fcc4ff'} setBgColor={setBgColor} />
                <BgColorPicker bgColor={'#fcf8c5ff'} setBgColor={setBgColor} />
                <BgColorPicker bgColor={'#c3f8c6ff'} setBgColor={setBgColor} />
                <BgColorPicker bgColor={'#c5f8f0ff'} setBgColor={setBgColor} />
                <BgColorPicker bgColor={'#fac7dcff'} setBgColor={setBgColor} />
                <BgColorPicker bgColor={'#e3c1f7ff'} setBgColor={setBgColor} />
                <BgColorPicker bgColor={'#c2c1ffff'} setBgColor={setBgColor} />
                <BgColorPicker bgColor={'#c496a3ff'} setBgColor={setBgColor} />
            </div>
        </div>
    )
}
export default Home
