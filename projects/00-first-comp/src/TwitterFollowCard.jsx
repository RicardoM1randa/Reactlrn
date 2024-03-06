import { useState } from 'react';

export function TwitterFollowCard ({ formatUsername, userName, name, isFollowing}) {
   
    
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
      ? 'tw-followCard-button is-following'
      : 'tw-followCard-button'

    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img
                    className="tw-followCard-avatar"
                    src={`https://unavatar.io/twitter/${userName}`}
                    alt="Avatar img" />
                <div className="tw-followCard-info">
                    <strong>{name}</strong>
                    <span
                    className="tw-followCard-inforUsername"
                    >{formatUsername(userName)}</span>
                </div>
            </header>
            <aside>
                <button
                className={buttonClassName}>
                    {text}
                </button>
            </aside>
        </article>
    );
}