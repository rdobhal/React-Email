import React from 'react'
import './EmailList.css'
import InnerMailHeader from './InnerMailHeader'
import EmailRow from './EmailRow'

const EmailList =() => {
    return (
        <div className='emailList email_card'>
            <InnerMailHeader />
            <div className='emailList__section'>
                <EmailRow title="Anna Smith" description="This is my mail" time="10.00 PM" />
                <EmailRow title="Anna Smith" description="This is my mail" time="10.00 PM" />
                <EmailRow title="Anna Smith" description="This is my mail" time="10.00 PM" />
                <EmailRow title="Anna Smith" description="This is my mail" time="10.00 PM" />
                <EmailRow title="Anna Smith" description="This is my mail" time="10.00 PM" />
                <EmailRow title="Anna Smith" description="This is my mail" time="10.00 PM" />
                <EmailRow title="Anna Smith" description="This is my mail" time="10.00 PM" />
                <EmailRow title="Anna Smith" description="This is my mail" time="10.00 PM" />
                <EmailRow title="Anna Smith" description="This is my mail" time="10.00 PM" />
            </div>
        </div>
    )
}

export default EmailList
