import React, { useEffect, useState } from 'react'
import './Post.css'


export default function Post({title,text}) {
    return(
        <div className='postContainer'>
            {title}:{text}
        </div>
    )
}