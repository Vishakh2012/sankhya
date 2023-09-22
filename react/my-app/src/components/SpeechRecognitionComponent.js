import React from 'react';
import { useState } from 'react';
import '../App.css'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const SpeechRecognitionComponent = () => {
  const { transcript, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <div>Speech recognition is not supported by your browser</div>;
  }
  const [listening, setListening] = useState(false);

  const startListening = () => {
    setListening(true);
  };

  const stopListening = () => {
    setListening(false);
  };
  const start =() =>{
    SpeechRecognition.startListening();
    startListening();
    
  }

  const stop =() =>{
    SpeechRecognition.stopListening();
    stopListening();
    

  }

  return (
    <div classname='record'>
      <button onClick={start} style={{ backgroundColor: listening ? 'red' : '' }}disabled={listening} className='button-1'>Start Listening</button>
      <button onClick={stop} disabled={!listening} className='button-1'>Stop Listening</button>
      <button onClick={resetTranscript} style={{backgroundColor:'red'}}>Reset</button>
      <div className='trans'>Transcript: {transcript}</div>
    </div>
  );
}

export default SpeechRecognitionComponent;