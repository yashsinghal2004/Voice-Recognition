import React from 'react'
import 'regenerator-runtime/runtime';
import useClipboard from "react-use-clipboard";

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { useDispatch, useSelector } from 'react-redux';
import { CopyText } from './Utils/copySlice';
const App = () => {
  const dispatch=useDispatch();
  const copiedtext=useSelector((store)=>store.copy.textToCopy);
  const [isCopied, setCopied] = useClipboard(copiedtext);
  const startListening=()=>SpeechRecognition.startListening({ continuous: true })
  const stopListening=()=>SpeechRecognition.stopListening()
  

  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  
  return (
    <div className=' h-screen '>
      <h1 className='text-black font-bold  text-3xl sm:text-4xl flex justify-center pt-14 sm:pt-10'>
        Speech to Text Converter</h1>
        <br />
        <p className='text-gray-500 flex justify-center items-center px-4 sm:p-0 text-lg font-mono '>
          Convert and copy the speech you speak in the form of text<br/>*Note-Click on the input box before copying to clipboard</p>


          <div className=' flex  justify-center w-11/12 sm:w-9/12  mx-auto my- mt-14 drop-shadow-lg' >
            <textarea  placeholder='  Start Speaking...' cols="70" rows="10" value={transcript} className='bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md p-2' onClick={()=>dispatch(CopyText(transcript))}></textarea>
          </div>


          <div className='text-white flex justify-center items-center m-6 p-4  font-bold text-xl'>
            <button className='mx-4 sm:mx-8 bg-green-700 hover:bg-green-800 p-2 px-2 rounded-lg' onClick={setCopied}> {isCopied ? "Copied" : "Copy to Clipboard"}</button>
            <button className='mx-4 sm:mx-8 bg-green-700 hover:bg-green-800 p-2 px-2 rounded-lg' onClick={startListening}>Start Listening</button>
            <button className='mx-4 sm:mx-8 bg-green-700 hover:bg-green-800 p-2 px-2 rounded-lg' onClick={stopListening}>Stop Listening</button>

            </div>
    </div>
  )
}

export default App