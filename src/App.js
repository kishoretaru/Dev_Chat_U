import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
const App = () => {

  if(!localStorage.getItem('username')) return <LoginForm />
  return (
    <ChatEngine height="100vh"
    projectID="818ad6ea-2396-4c99-9e36-a53b126298fa"
    userName={localStorage.getItem('username')}
    userSecret={localStorage.getItem('password')}
    renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
    />
  );
};

export default App;
