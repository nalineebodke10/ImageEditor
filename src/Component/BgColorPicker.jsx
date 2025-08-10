import React from 'react'
import './BgColorPicker.css';

function BgColorPicker({ bgColor, setBgColor }) {
    return (
        <div className='bgcolor-picker-container'>
            <div className='color-picker' style={{ backgroundColor: bgColor }} onClick={() => setBgColor(bgColor)}></div>
        </div>
    )
}
export default BgColorPicker
