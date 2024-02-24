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
      <h1 className='text-white font-bold  text-4xl flex justify-center pt-6'>
        Speech to Text Converter</h1>
        <br />
        <p className='text-gray-400 flex justify-center text-lg font-mono '>
          Convert and copy the speech you speak in the form of text.</p>

          <div className='w-5/12  mx-auto'>
          <div className='text-white flex  justify-center   mt-10 '>
            <textarea  placeholder='Start Speaking...' cols="70" rows="10" value={transcript} className='bg-gray-400 bg-opacity-50 text-white rounded-md'></textarea>
          </div>
          </div>

          <div className='text-white flex justify-center items-center m-6 p-4  font-bold text-xl'>
            <button className='mx-8 bg-blue-500 p-2 px-2 rounded-lg'>Copy</button>
            <button className='mx-8 bg-blue-500 p-2 px-2 rounded-lg' onClick={startListening}>Start Listening</button>
            <button className='mx-8 bg-blue-500 p-2 px-2 rounded-lg' onClick={stopListening}>Stop Listening</button>

            </div>
    </div>
  )
}

export default App