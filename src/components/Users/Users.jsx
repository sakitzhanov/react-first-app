import React from "react";

import classes from './Users.module.css'

const Users = (props) => {
    if (props.users.length === 0) {    
        props.setUsers([
            {
                id: 1,
                fullName: 'Amangali',
                status: 'Currently studying...',
                isFollowed: true,
                photoUrl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png',
                location: {
                    city: 'New-York',
                    country: 'USA'
                }
            },
            {
                id: 2,
                fullName: 'Elmira',
                status: 'Want some junk food',
                isFollowed: false,
                photoUrl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png',
                location: {
                    city: 'Aktobe',
                    country: 'Kazakhstan'
                }
            },
            {
                id: 3,
                fullName: 'Gaziz',
                status: 'I am a dentist, so contact me',
                isFollowed: true,
                photoUrl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png',
                location: {
                    city: 'Astana',
                    country: 'Kazakhstan'
                }
            }
        ]);
    }

    const onFollow = (userId) => {
        props.follow(userId);
    }

    const onUnfollow = (userId) => {
        props.unfollow(userId);
    }

    return (
        <div>
            {
                props.users.map(user =><div key={user.id}>
                    <span>
                        <div>
                            <img alt="userPhoto" src={user.photoUrl} className={classes.userPhoto} />
                        </div>
                        <div>
                            {user.isFollowed
                            ? <button onClick={() => {onUnfollow(user.id)}}>Unfollow</button>
                            : <button onClick={() => {onFollow(user.id)}}>Follow</button>
                            }                            
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.fullName}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{user.location.city}</div>
                            <div>{user.location.country}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;