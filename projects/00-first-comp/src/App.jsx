import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
  { userName: 'midudev', name: 'Miguel Angel Duran', isFollowing: true },
  { userName: 'wismichu', name: 'Ismael Garcia', isFollowing: false },
  { userName: 'elonmusk', name: 'Elon Musk', isFollowing: true },
  { userName: 'nirvana', name: 'Nirvana', isFollowing: true }
]

export function App () {
    const formatUsername = (username) => `@${username}`

    return (
        <section className='App'>
          {
            users.map(user => {
              return (
                <TwitterFollowCard
                  key={user.userName}
                  userName={user.userName}
                  initialIsFollowing={user.isFollowing}
                >
                  {user.name}
                </TwitterFollowCard>
              )
            })
          }
        </section>
    );
}