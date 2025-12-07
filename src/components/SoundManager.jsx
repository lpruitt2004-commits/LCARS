import React, {
  createContext,
  useContext,
  useRef,
  useEffect,
  useState,
} from "react";

const SoundContext = createContext();

export const useSound = () => useContext(SoundContext);

const SoundManager = ({ children }) => {
  const clickRef = useRef(null);
  const ambientRef = useRef(null);
  const [ambientOn, setAmbientOn] = useState(true);

  useEffect(() => {
    if (ambientRef.current) {
      ambientRef.current.loop = true;
      ambientRef.current.volume = 0.2;
      ambientOn ? ambientRef.current.play() : ambientRef.current.pause();
    }
  }, [ambientOn]);

  const playClick = () => {
    if (clickRef.current) {
      clickRef.current.currentTime = 0;
      clickRef.current.play();
    }
  };

  const toggleAmbient = () => setAmbientOn((on) => !on);

  return (
    <SoundContext.Provider value={{ playClick, ambientOn, toggleAmbient }}>
      {children}
      <audio
        ref={clickRef}
        src="/src/assets/sounds/lcars-click.mp3"
        preload="auto"
      />
      <audio
        ref={ambientRef}
        src="/src/assets/sounds/lcars-ambient.mp3"
        preload="auto"
      />
    </SoundContext.Provider>
  );
};

export default SoundManager;
