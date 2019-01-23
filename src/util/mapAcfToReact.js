import React from 'react'

// import Banner from '../components/Banner'

export default (acfContent) => {
    const { type, ...props } = acfContent
    switch (type) {
        case 'banner':
            // return <Banner { ...props } />
        default:
            return <div>Content Not Found</div>
    }
}