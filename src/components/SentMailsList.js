import React from 'react'
import EmailRow from './EmailRow'

const SentMailsList = () => {
    let time = new Date().toLocaleTimeString()
    let data = JSON.parse(window.localStorage.getItem('list'));
    return (
        <div className='sentMailList'>
            <EmailRow title={data.to} description={data.subject} time={time}/>
        </div>
    )
}

export default SentMailsList
