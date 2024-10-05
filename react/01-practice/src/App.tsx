import { TwitterFollowCard } from './TwitterFollowCard';
import './App.css';

export function App() {
  const users = [
    {
      userName: 'midudev',
      name: 'Miguel Angel Duran',
      isFollowing: true
    },
    {
      userName: 'pheralb',
      name: 'Pablo Hernandez',
      isFollowing: false
    }
  ];
  return (
    <section className="App">
      {users.map(({ userName, isFollowing, name }) => (
        <TwitterFollowCard userName={userName} initialIsFollowing={isFollowing}>
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  );
}
