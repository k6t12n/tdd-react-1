import React, {useEffect, useState} from 'react'

const SingleUserCard = ({single_user}) => {

    const {firstname, middlename, lastname, email} = single_user

    if (
        firstname && firstname !== '' &&
        lastname && lastname !== '' &&
        email && email !== ''
    ) {
        
        return (
            <div className="card" data-testid='single_user_card'>
                <div className="card-body">
                    <p style={{marginBottom: 0}}>
                        {
                            `${firstname}${middlename ? ' (' + middlename + ')' : ''} ${lastname}`
                        }
                    </p>
                    <p style={{marginBottom: 0}}>{email}</p>
                </div>
            </div>
        )

    } else {

        return (
            <div className="card" data-testid='single_user_card'>
                <div className="card-body">
                    <p style={{marginBottom: 0}}>Not enough data to display</p>
                </div>
            </div>
        )
        
    }
}

export default SingleUserCard
