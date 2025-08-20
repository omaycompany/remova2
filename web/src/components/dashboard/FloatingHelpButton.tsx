'use client';

import { useState } from 'react';

export default function FloatingHelpButton() {
  const [isExpanded, setIsExpanded] = useState(false);

  const helpOptions = [
    {
      id: 'chat',
      label: 'Live Chat',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      action: () => {
        console.log('Open live chat');
        // Integrate with your chat system (Intercom, Zendesk, etc.)
      }
    },
    {
      id: 'docs',
      label: 'Documentation',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      action: () => {
        window.open('/resources', '_blank');
      }
    },
    {
      id: 'support',
      label: 'Contact Support',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      action: () => {
        window.location.href = '/contact';
      }
    },
    {
      id: 'feedback',
      label: 'Send Feedback',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      ),
      action: () => {
        console.log('Open feedback form');
        // Open feedback modal or redirect to feedback form
      }
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Help options menu */}
      {isExpanded && (
        <div className="absolute bottom-16 right-0 mb-2">
          <div className="bg-base-100 rounded-lg shadow-lg border border-base-300 py-2 min-w-[180px]">
            {helpOptions.map((option, index) => (
              <button
                key={option.id}
                onClick={() => {
                  option.action();
                  setIsExpanded(false);
                }}
                className="flex items-center space-x-3 w-full px-4 py-3 text-sm hover:bg-base-200 transition-colors"
              >
                <span className="text-base-content/70">
                  {option.icon}
                </span>
                <span className="text-base-content">
                  {option.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Main help button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`
          btn btn-circle btn-lg shadow-lg transition-all duration-300
          ${isExpanded 
            ? 'btn-primary rotate-45' 
            : 'btn-primary hover:btn-primary-focus hover:scale-110'
          }
        `}
        aria-label="Help and Support"
      >
        {isExpanded ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )}
      </button>

      {/* Tooltip for main button */}
      {!isExpanded && (
        <div className="absolute bottom-full right-0 mb-2 opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
          <div className="bg-base-content text-base-100 text-xs px-2 py-1 rounded whitespace-nowrap">
            Need help?
            <div className="absolute top-full right-2 border-4 border-transparent border-t-base-content"></div>
          </div>
        </div>
      )}

      {/* Pulsing indicator for unread notifications/messages */}
      <div className="absolute -top-1 -right-1">
        <div className="w-3 h-3 bg-error rounded-full animate-pulse"></div>
      </div>
    </div>
  );
}

// Chat integration component (example)
export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: '1',
      text: 'Hi! How can I help you today?',
      sender: 'support',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');

  const sendMessage = () => {
    if (!inputText.trim()) return;

    const newMessage = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputText('');

    // Simulate support response
    setTimeout(() => {
      const response = {
        id: (Date.now() + 1).toString(),
        text: 'Thanks for your message! A support agent will be with you shortly.',
        sender: 'support',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, response]);
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-24 right-6 w-80 h-96 bg-base-100 rounded-lg shadow-xl border border-base-300 z-50">
      {/* Chat header */}
      <div className="flex items-center justify-between p-4 border-b border-base-300">
        <div>
          <h3 className="font-medium">Support Chat</h3>
          <p className="text-xs text-success">Online</p>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="btn btn-ghost btn-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 space-y-3 overflow-y-auto h-64">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                message.sender === 'user'
                  ? 'bg-primary text-primary-content'
                  : 'bg-base-200 text-base-content'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-base-300">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Type your message..."
            className="input input-bordered input-sm flex-1"
          />
          <button
            onClick={sendMessage}
            className="btn btn-primary btn-sm"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}