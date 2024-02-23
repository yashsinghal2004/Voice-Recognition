import React from 'react'
import 'regenerator-runtime/runtime';

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
const App = () => {
  const startListening=()=>SpeechRecognition.startListening({ continuous: true })
  const stopListening=()=>SpeechRecognition.stopListening()

  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  
  return (
    <div className='bg-black h-screen '>
      <h1 className='text-white font-bold  text-4xl flex justify-center p-6'>
        Speech to Text Converter</h1>
        <br />
        <p className='text-white flex justify-center text-lg font-mono'>
          Convert and copy the speech you speak in the form of text.</p>


          <div className='text-white'>
            {transcript}
          </div>

          <div className='text-white flex justify-center items-center m-6 p-4 '>
            <button>Copy</button>
            <button onClick={startListening}>Start Listening</button>
            <button onClick={stopListening}>Stop Listening</button>

            </div>
    </div>
  )
}

export default App