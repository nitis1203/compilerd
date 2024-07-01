import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faJava } from '@fortawesome/free-brands-svg-icons';
import './styles/CodeExecution.css'; // Ensure this path is correct

const languages = [
  { value: 'nodejs', label: 'Node.js', icon: faJs },
  { value: 'java', label: 'Java', icon: faJava },
];

function CodeExecution() {
  const [language, setLanguage] = useState('nodejs');
  const [script, setScript] = useState('');
  const [response, setResponse] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const sendRequest = async () => {
    try {
      const result = await axios.post('http://localhost:3000/api/execute/', {
        language: language,
        script: script,
      });
      setResponse(result.data);
    } catch (error) {
      console.error('Error sending request:', error);
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLanguageChange = (value) => {
    setLanguage(value);
    setDropdownOpen(false);
  };

  const selectedLanguage = languages.find((lang) => lang.value === language);

  return (
    <div className="App">
      <h1>Code Execution</h1>
      <div className="container">
        <div className="code-input">
          <div className="header">
            <label>
              Program:
              <div className="custom-dropdown">
                <div className="dropdown-header" onClick={toggleDropdown}>
                  <FontAwesomeIcon icon={selectedLanguage.icon} className='icon'/> {selectedLanguage.label}
                </div>
                {dropdownOpen && (
                  <div className="dropdown-list">
                    {languages.map((lang) => (
                      <div
                        key={lang.value}
                        className={`dropdown-item ${language === lang.value ? 'selected' : ''}`}
                        onClick={() => handleLanguageChange(lang.value)}
                      >
                        <FontAwesomeIcon icon={lang.icon} className='icon'/> {lang.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </label>
            <button onClick={sendRequest}>Run</button>
          </div>
          <textarea
            value={script}
            onChange={(e) => setScript(e.target.value)}
            placeholder="Write your code here..."
          />
        </div>
        <div className="code-output">
          <h2>Output:</h2>
          <pre >{response ? (response.output || response.errorMessage || response.compile_message) : "Output will be displayed here..."}</pre>
        </div>
      </div>
    </div>
  );
}

export default CodeExecution;
