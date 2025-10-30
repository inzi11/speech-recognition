import React, { useEffect } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

const SpeechToText = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();


  useEffect(() => {
    console.log("🎧 Transcript:", transcript);
  }, [transcript]);

  if (!browserSupportsSpeechRecognition) {
    return (
      <p className="text-center text-red-400 mt-10">
        Oops! Your browser doesn’t support speech recognition 😿
      </p>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <h1 className="text-3xl mb-6 font-bold">(≧▽≦)/ Speech Recognition Demo</h1>

      <div className="bg-gray-800 rounded-2xl p-6 w-full max-w-xl shadow-xl">
        <p className="text-lg min-h-[120px] border border-gray-700 rounded-md p-4 leading-relaxed whitespace-pre-line">
          {transcript || "Start speaking and watch magic happen 🎤✨"}
        </p>
      </div>

      <div className="mt-6 flex gap-4">
        <button
          onClick={() =>
            SpeechRecognition.startListening({ continuous: true, language: "en-US" })
          }
          className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded-lg text-white"
        >
          Start
        </button>
        <button
          onClick={SpeechRecognition.stopListening}
          className="bg-red-500 hover:bg-red-600 px-6 py-2 rounded-lg text-white"
        >
          Stop
        </button>
        <button
          onClick={resetTranscript}
          className="bg-gray-600 hover:bg-gray-700 px-6 py-2 rounded-lg text-white"
        >
          Reset
        </button>
      </div>

      <p className="mt-4 text-sm text-gray-400">
        {listening ? "Listening... 👂 (✿◕‿◕)/" : "Stopped ❌"}
      </p>
    </div>
  );
};

export default SpeechToText;
