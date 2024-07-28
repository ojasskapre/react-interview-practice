import { useState } from 'react';

export default function MultipleAccordion() {
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleItems = (i) => {
    if (selectedItem === i) {
      setSelectedItem(null);
      return;
    }
    setSelectedItem(i);
  };

  const data = [
    {
      question: 'What is React?',
      answer:
        'React is a declarative, efficient, and flexible JavaScript library for building user interfaces.',
    },
    {
      question: 'What is JSX?',
      answer:
        'JSX is a syntax extension for JavaScript. It was written to be used with React. JSX code looks a lot like HTML.',
    },
    {
      question: 'What is Babel?',
      answer:
        'Babel is a JavaScript compiler. Babel is a popular tool for using the newest features of the JavaScript programming language.',
    },
  ];

  return (
    <div className="accordian">
      {data.map((item, index) => (
        <div className="acc-item" key={index}>
          <div
            className="acc-item--title"
            onClick={() => {
              toggleItems(index);
            }}
          >
            <h2>{item.question}</h2>
            <h2>+</h2>
          </div>
          {selectedItem === index && (
            <div className="acc-item--content">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}
