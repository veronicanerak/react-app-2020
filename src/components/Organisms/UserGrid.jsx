import React from 'react'
import UserCard from '../Molecules/UserCard'
import withLoader from '../HOC/withLoader'

const UserGrid = ({ users }) => (
    <div className="ed-grid">
        <h1>Users</h1>
        <div className="ed-grid s-grid-2 m-grid-3 l-grid-4">
            {
                users.map(user => (
                    <UserCard 
                        key = {user.id} 
                        name= {user.name} 
                        username={user.username} 
                        email={user.email} 
                    />
                ))
            }
        </div>
    </div>
)

export default withLoader("users", UserGrid)