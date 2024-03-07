import { useState } from 'react';
//TwitterFollowCard component to show the user information and a button to follow or unfollow
export function TwitterFollowCard ({ userName, children, initialIsFollowing}) {
    //useState to manage the state of isFollowing
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
   //text and buttonClassName to change the text and the class of the button
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
      ? 'tw-followCard-button is-following'
      : 'tw-followCard-button'
    
    //handleClick function to change the state of isFollowing
    const handelClick = () => {
        setIsFollowing(!isFollowing)
    }
    //return the component
    return (
        //article with the user information and the button
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img
                    className="tw-followCard-avatar"
                    src={`https://unavatar.io/twitter/${userName}`}
                    alt="Avatar img" />
                <div className="tw-followCard-info">
                    <strong>{children}</strong>
                    <span
                    className="tw-followCard-inforUsername"
                    >@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handelClick} >
                    <span className="tw-followCard-text"> {text} </span>
                    <span className="tw-followCard-stopFollow"> unfollow </span>
                </button>
            </aside>
        </article>
    );
}