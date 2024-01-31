import React from 'react'
import './banner.scss'

const FullBanner = (props) => {
  return (
    <div className='full-banner'>
        <img src={props.bannerImgSrc} alt="Full Banner" />
    </div>
  )
}

export default FullBanner