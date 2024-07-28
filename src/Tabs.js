import { useState } from 'react';

export default function Tabs() {
  const [activeTab, setActiveTab] = useState('');

  const tabs = [
    {
      id: 'html',
      btnText: 'HTML',
      content:
        'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.',
    },
    {
      id: 'css',
      btnText: 'CSS',
      content:
        'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.',
    },
    {
      id: 'javascript',
      btnText: 'JavaScript',
      content:
        'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.',
    },
  ];

  return (
    <div>
      <div className="tab-btns">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={activeTab === tab.id ? 'active' : ''}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.btnText}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs.map((tab) =>
          tab.id === activeTab ? <p key={tab.id}>{tab.content}</p> : null
        )}
      </div>
    </div>
  );
}
