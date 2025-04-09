import React from 'react';
import Flashcard from './Flashcard';
import domains from './data';
import './App.css';

function App() {
  const [currentDomain, setCurrentDomain] = React.useState(domains[0]);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleDomainChange = (e) => {
      const newDomain = domains.find(domain => domain.name === e.target.value);
      setCurrentDomain(newDomain);
      setCurrentIndex(0); // Reset to the first card of the new domain
  };

  const handleNext = () => {
      if (currentIndex < currentDomain.cards.length - 1) {
          setCurrentIndex(currentIndex + 1);
      }
  };

  const handlePrev = () => {
      if (currentIndex > 0) {
          setCurrentIndex(currentIndex - 1);
      }
  };

  return (
      <div>
          <select onChange={handleDomainChange} value={currentDomain.name}>
              {domains.map((domain, index) => (
                  <option key={index} value={domain.name} style={{ backgroundColor: domain.color }}>
                      {domain.name}
                  </option>
              ))}
          </select>

          <Flashcard card={currentDomain.cards[currentIndex]} color={currentDomain.color} />

          <div className="navigation">
              <button onClick={handlePrev} disabled={currentIndex === 0}>Prev</button>
              <button onClick={handleNext} disabled={currentIndex === currentDomain.cards.length - 1}>Next</button>
          </div>
      </div>
  );
}

export default App;
