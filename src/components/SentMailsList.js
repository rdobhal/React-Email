import React from 'react'
import EmailRow from './EmailRow'
import { useEffect } from 'react';

const SentMailsList = () => {
    
    let time = new Date().toLocaleTimeString()
    let data = JSON.parse(window.localStorage.getItem('list'));
    useEffect(() => {
    let obj = []
       obj.push(data) 
    },[data])
    return (
        <div className='sentMailList'>
            <EmailRow title={data.to} description={data.subject} time={time}/>
        </div>
    )
}

export default SentMailsList
