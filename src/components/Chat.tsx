import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { askGpt } from '../services/gpt';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

const Chat: React.FC = () => {
  const { t } = useTranslation();
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'bot', text: t('welcome') },
    { sender: 'bot', text: t('ask') }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSend = async () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: 'user', text: input }]);
    setLoading(true);
    setError(null);
    const userMessage = input;
    setInput('');
    try {
      const gptReply = await askGpt([
        ...messages.map(m => ({ role: m.sender === 'user' ? 'user' as const : 'assistant' as const, content: m.text })),
        { role: 'user', content: userMessage }
      ]);
      setMessages(msgs => [...msgs, { sender: 'bot', text: gptReply }]);
    } catch (e) {
      setError('GPT error. Try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '0 auto', border: '1px solid #eee', borderRadius: 8, padding: 16 }}>
      <div style={{ minHeight: 200, marginBottom: 8 }}>
        {messages.map((msg, idx) => (
          <div key={idx} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left', margin: '4px 0' }}>
            <span style={{ background: msg.sender === 'user' ? '#d1e7dd' : '#f8d7da', borderRadius: 4, padding: '4px 8px' }}>{msg.text}</span>
          </div>
        ))}
        {loading && (
          <div style={{ textAlign: 'left', margin: '4px 0', color: '#888' }}>AI is typing...</div>
        )}
        {error && (
          <div style={{ color: 'red', marginTop: 8 }}>{error}</div>
        )}
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSend()}
          style={{ flex: 1, padding: 8 }}
          placeholder={t('ask')}
        />
        <button onClick={handleSend} style={{ padding: '8px 16px' }} disabled={loading}>Send</button>
      </div>
    </div>
  );
};

export default Chat; 