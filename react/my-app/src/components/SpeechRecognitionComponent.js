import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import styles from './Records.module.css'
const SpeechRecognitionComponent = () => {
  const { transcript, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();
  // const handleSubmit = async(e)=>{
  //   e.preventDefault();
  // }
  if (!browserSupportsSpeechRecognition) {
    return <div>Speech recognition is not supported by your browser</div>;
  }

  return (
    <div className={styles.records}>
    <div className={styles.buttonset}>
      <button className={styles.btn1} onClick={SpeechRecognition.startListening }>Start Listening</button>
      <button className={styles.btn1} onClick={SpeechRecognition.stopListening}>Stop Listening</button>
      <button className={styles.btn1} onClick={resetTranscript}>Reset</button>
      
    </div>
    <div className={styles.confirm}>
      Transcript: {transcript}
      <button  className={styles.btn2}>Confirm</button>
      </div>
    
    </div>
  );
}

export default SpeechRecognitionComponent;