import { useState } from "react";


const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <header className="demo-header">
        <h1 className="demo-title">Component State Isolation Demo</h1>
        <div className="demo-description">
          <p>
            This demo shows how React components <strong>maintain isolated state</strong>. 
            Below are two <strong>independent instances</strong> of the same component. 
            Each maintains its own state and interactions.
          </p>
          <p style={{ marginTop: "1rem" }}>
            Try interacting with one component and observe the other remains unaffected!
          </p>
        </div>
      </header>

      <div className="component-grid">
        <div className="component-instance">
          <h3 className="instance-title">Component Instance 1</h3>
          <Steps />
        </div>

        <div className="component-instance">
          <h3 className="instance-title accent">Component Instance 2</h3>
          <Steps />
        </div>
      </div>
      <div className="developer-info">
        <h3>Developed by Ihsan Saif</h3>
        <div className="developer-links">
          <a href="https://github.com/ihsansaif313" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/its-saif-products" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/ihsansaif313/steps-navigation-component" target="_blank" rel="noopener noreferrer">
            CODE
          </a>
        </div>
      </div>
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }

  return (
    <div className="steps">
      <button className="close" onClick={() => setIsOpen((s) => !s)}>
        &times;
      </button>
      {isOpen && (
        <>
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <div className="message">
            STEP {step}: {messages[step - 1]}
          </div>
          <div className="buttons">
            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleNext}>Next</button>
          </div>
        </>
      )}
    </div>
  );
}