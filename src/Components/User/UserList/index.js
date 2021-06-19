import React, {useEffect, useState} from 'react'
import SingleUserCard from './SingleUserCard'

const UserList = () => {

    const [data, setData] = useState([])
    const [isFetchError, setIsFetchError] = useState(false)

    useEffect(() => {
        fetchUsersData()
    }, [])

    const fetchUsersData = () => {
        fetch(
            '/this/is/mock/users',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
            .then(res => res.json())
            .then(res => {
                if (res.status === 200) {
                    setData(res.data)
                } else {
                    setIsFetchError(true)
                }
            })
            .catch(err => {
                setData([])
                setIsFetchError(true)
            })
    }

    return (
        <div>
            {
                data.length === 0 && !isFetchError ?
                <div className="columns">
                    <div className="column">
                        No data found.
                    </div>
                </div> : null
            }
            {
                isFetchError ?
                <div className="columns">
                    <div className="column">
                        Error, cannot fetch.
                    </div>
                </div> : null
            }
            {
                data.map((d,i) => <SingleUserCard key={d.id} single_user={d} />)
            }
        </div>
    )
}

export default UserList
