import { useState } from 'react';

interface Props {
  userName: string;
  initialIsFollowing?: boolean;
  children?: string | JSX.Element | JSX.Element[];
}

export function TwitterFollowCard({ userName, initialIsFollowing, children }: Props) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  const text = isFollowing ? 'Siguiendo' : 'Seguir';
  const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button';
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="Avatar de midudev"
          src={`https://unavatar.io/twitter/${userName}`}
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={() => setIsFollowing(!isFollowing)}>
          <span className="tw-followCard-buttonText">{text}</span>
          <span className={`tw-followCard-buttonText-unfollow ${isFollowing ? 'is-following' : ''}`}>
            Dejar de seguir
          </span>
        </button>
      </aside>
    </article>
  );
}
