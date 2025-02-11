import { useState } from "react";
import { Chat } from './components/Chat/Chat';
import { Controls} from './components/Controls/Controls';
import styles from './App.module.css';
function App() {
  const [messages, setMessage] = useState(MESSAGES);
  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <img className={styles.Logo} src="/chat-bot.png" alt="icon" />
        <h2 className={styles.Title}>AI Chatbot</h2>
      </header>
      <div className={styles.ChatContainer}>
        <Chat messages={messages} />
      </div>
      <Controls />
    </div>
  );
}

const MESSAGES = [
  {
    role: 'user',
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, ipsa quas. Qui corrupti reiciendis, enim laudantium perferendis tempora inventore nostrum cupiditate cumque deserunt rerum minus facere officiis temporibus rem dolorum.'
  },
  {
    role: 'assistant',
    content: 'Hi there! How can I help you today?'
  },
  {
    role: 'user',
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, ipsa quas. Qui corrupti reiciendis, enim laudantium perferendis tempora inventore nostrum cupiditate cumque deserunt rerum minus facere officiis temporibus rem dolorum.'
  },
  {
    role: 'assistant',
    content: 'Hi there! How can I help you today?'
  },
  {
    role: 'user',
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, ipsa quas. Qui corrupti reiciendis, enim laudantium perferendis tempora inventore nostrum cupiditate cumque deserunt rerum minus facere officiis temporibus rem dolorum.'
  },
  {
    role: 'assistant',
    content: 'Hi there! How can I help you today?'
  },
  {
    role: 'user',
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, ipsa quas. Qui corrupti reiciendis, enim laudantium perferendis tempora inventore nostrum cupiditate cumque deserunt rerum minus facere officiis temporibus rem dolorum.'
  }
]

export default App
