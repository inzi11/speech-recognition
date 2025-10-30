import React, { useEffect, useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

const SpeechToText = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    isMicrophoneAvailable,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    console.log("Transcript:", transcript);
  }, [transcript]);

  if (!isMicrophoneAvailable) {
    return (
      <p> 
        please give access of the microphone
      </p>
    )
  }

  if (!browserSupportsSpeechRecognition) {
    return (
      <p>
        Browser does not support Speech Recognition
      </p>
    )
  }


  function handleListening() {
  
    // here im handling the listening 
    setIsListening(prev => {
      const newState = !prev

       if (newState) {
      console.log("starting listening");
      SpeechRecognition.startListening({ continuous: true, language: "en-US" });
    } else {
      console.log("stopping listening");
      SpeechRecognition.stopListening();
      }
    
      
      return newState
    });
    
}


  return (
    <div className="flex flex-col items-center justify-center min-h-screen backdrop-blur-2xl bg-amber-50 text-white p-8">
      <h1 className="text-4xl mb-8 font-bold text-slate-800"> Speech Recognition</h1>

      <div className="bg-gray-800 rounded-2xl p-6 w-full max-w-xl shadow-xl">
        <p className="text-lg min-h-[120px] border-2 border-gray-700 rounded-md p-4">
          {transcript || "Click on Listen button to start listening"}
        </p>
      </div>

      <div className="mt-6 flex gap-4">
        { isListening ?
          <button
          onClick={handleListening}
          className="bg-red-500 hover:bg-red-700 px-6 py-2 rounded-lg text-white font-semibold"
        >
          Stop 
        </button> : 
          
           <button
          onClick={handleListening}
          className="bg-green-500 hover:bg-green-700 px-6 py-2 rounded-lg font-semibold text-white"
        >
          Listen
        </button>
        
        }
        <button
          onClick={resetTranscript}
          className="bg-gray-600 hover:bg-gray-700 px-6 py-2 rounded-lg text-white"
        >
          Reset
        </button>
      </div>

      <p className="mt-4 text-sm text-gray-400">
        {listening ? "Listening... " : "Stopped "}
      </p>
    </div>
  );
};

export default SpeechToText;
