import React from 'react'

const BannerSection = () => {
    return (
        <div className="banner" style={{ backgroundImage: 'url(http://localhost:3000/static/media/image1.bab8adb0a1a6c85a982a.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
            <h1 className="banner-title">Contact Us</h1>
        </div>
    )
}

export default BannerSection
