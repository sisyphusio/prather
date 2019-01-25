import React from 'react'

import Banner from '../components/Banner'
import Bio from '../components/Bio'
import Content from '../components/Content'

export default (acfContent) => {
    const { type, ...props } = acfContent
    switch (type) {
        case 'banner':
            return <Banner { ...props } />
        case 'content':
            return <Content { ...props } />
        case 'bio':
            return <Bio { ...props } />
        default:
            return ''
    }
}