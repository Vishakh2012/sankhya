import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import styles from './Records.module.css';


const SpeechRecognitionComponent = () => {
  const { transcript, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();
  const [colour, setColour] = useState('white');
  const [tcolour, setTcolour] = useState('#0d6efd');
  function start() {
    SpeechRecognition.startListening();
    setColour('#0d6efd');
    setTcolour('white')
  }

  function stop() {
    SpeechRecognition.stopListening();
    setColour('white');
    setTcolour('#0d6efd');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(transcript);
    const response = await fetch('', {
      method: 'POST',
      body: JSON.stringify({ text: transcript }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  if (!browserSupportsSpeechRecognition) {
    return <div>Speech recognition is not supported by your browser</div>;
  }

  return (
    <div className={styles.records}>
      <div className={styles.buttonset}>
        <button
          className={styles.btn1}
          onClick={start}
          style={{ backgroundColor: colour, color:tcolour}}
        >
          Start Listening
        </button>
        <button className={styles.btn1} onClick={stop}>
          Stop Listening
        </button>
        <button className={styles.btn1} onClick={resetTranscript}>
          Reset
        </button>
      </div>
      <div className={styles.confirm}>
        Transcript: {transcript}
        <button onClick={handleSubmit} className={styles.btn2}>
          Confirm
        </button>
      </div>
    </div>
  );
};

export default SpeechRecognitionComponent;
