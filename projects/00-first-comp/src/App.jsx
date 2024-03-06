import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
    const formatUsername = (username) => `@${username}`

    return (
        <section className='App'>
          <TwitterFollowCard 
          formatUsername={formatUsername}
          isFollowinng
          userName="midudev" 
          name="Miguel Angel Duran"/>

          <TwitterFollowCard 
          formatUsername={formatUsername}
          isFollowing={false}
          userName="wismichu" 
          name="ismael Garcia"/>

          <TwitterFollowCard 
          formatUsername={formatUsername}
          isFollowing
          userName="elonmusk" 
          name="Elon Musk"/>
          
          <TwitterFollowCard 
          formatUsername={formatUsername}
          isFollowing
          userName="nirvana" 
          name="Nirvana"/>          
        </section>
    );
}