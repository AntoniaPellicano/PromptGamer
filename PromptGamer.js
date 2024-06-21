import React, { useState, useEffect } from 'react';

// Componenti UI di base
const Card = ({ children, className }) => (
  <div className={`bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg p-6 text-white ${className}`}>
    {children}
  </div>
);

const Button = ({ onClick, disabled, children, className }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`px-4 py-2 bg-white text-purple-500 rounded hover:bg-gray-100 disabled:opacity-50 ${className}`}
  >
    {children}
  </button>
);

const Input = ({ value, onChange, placeholder, className }) => (
  <input
    type="text"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className={`w-full p-2 rounded bg-white/20 text-white placeholder-white/50 ${className}`}
  />
);

const Progress = ({ value }) => (
  <div className="w-full bg-white/20 rounded-full h-2.5">
    <div className="bg-white h-2.5 rounded-full" style={{ width: `${value}%` }}></div>
  </div>
);

const Badge = ({ children, className }) => (
  <span className={`px-2 py-1 bg-white/20 rounded text-sm ${className}`}>
    {children}
  </span>
);

const scenarios = [
  "Genera un'immagine di un paesaggio fantastico",
  "Scrivi una breve storia di fantascienza",
  "Crea un logo per una startup tecnologica",
  "Componi una poesia sulla natura",
  "Progetta un poster per un concerto rock"
];

const tips = [
  "Sii specifico: Più dettagli fornisci, migliore sarà l'output dell'AI.",
  "Usa un linguaggio chiaro: Evita ambiguità nelle tue istruzioni.",
  "Fornisci contesto: Spiega il background o lo scopo del tuo prompt.",
  "Considera il tono: Specifica lo stile o l'emozione desiderata.",
  "Sperimenta con la struttura: Prova diversi formati di prompt per vedere cosa funziona meglio."
];

const PromptGamer = () => {
  const [currentScenario, setCurrentScenario] = useState('');
  const [userPrompt, setUserPrompt] = useState('');
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isGroupMode, setIsGroupMode] = useState(false);
  const [round, setRound] = useState(0);
  const [currentTip, setCurrentTip] = useState('');
  const [activeTab, setActiveTab] = useState('game');

  useEffect(() => {
    if (isPlaying && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      endRound();
    }
  }, [timeLeft, isPlaying]);

  const startNewRound = () => {
    const randomScenario = scenarios[Math.floor(Math.random() * scenarios.length)];
    setCurrentScenario(randomScenario);
    setUserPrompt('');
    setFeedback('');
    setTimeLeft(60);
    setIsPlaying(true);
    setRound(round + 1);
    setCurrentTip(tips[Math.floor(Math.random() * tips.length)]);
  };

  const endRound = () => {
    setIsPlaying(false);
    evaluatePrompt();
  };

  const evaluatePrompt = () => {
    const wordCount = userPrompt.split(' ').length;
    const timeBonus = Math.floor(timeLeft / 10);
    const roundScore = wordCount + timeBonus;
    
    setScore(score + roundScore);
    
    if (wordCount > 15) {
      setFeedback(`Ottimo lavoro! Hai guadagnato ${roundScore} punti. Il tuo prompt è dettagliato e specifico.`);
    } else if (wordCount > 10) {
      setFeedback(`Buon lavoro! Hai guadagnato ${roundScore} punti. Il tuo prompt è abbastanza dettagliato.`);
    } else {
      setFeedback(`Hai guadagnato ${roundScore} punti. Prova ad aggiungere più dettagli al tuo prompt la prossima volta.`);
    }
  };

  const toggleGroupMode = () => {
    setIsGroupMode(!isGroupMode);
    setScore(0);
    setRound(0);
  };

  return (
    <Card className="w-[500px] mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center mb-2">Prompt Gamer</h1>
      <p className="text-sm text-center mb-6">Master the Game of AI Prompts</p>
      
      <div className="mb-4">
        <div className="flex justify-center mb-2">
          <Button onClick={() => setActiveTab('game')} className="mr-2">Gioca</Button>
          <Button onClick={() => setActiveTab('learn')}>Impara</Button>
        </div>
      </div>

      {activeTab === 'game' ? (
        <>
          <div className="flex justify-between mb-4">
            <Badge>Round: {round}</Badge>
            <Badge>Score: {score}</Badge>
          </div>
          {isPlaying ? (
            <>
              <p className="mb-4"><strong>Scenario:</strong> {currentScenario}</p>
              <Input
                value={userPrompt}
                onChange={(e) => setUserPrompt(e.target.value)}
                placeholder="Scrivi il tuo prompt qui"
                className="mb-4"
              />
              <div className="flex items-center justify-between mb-2">
                <span>⏱️</span>
                <Progress value={(timeLeft / 60) * 100} />
                <span>{timeLeft}s</span>
              </div>
              <p className="text-sm italic mt-2">Consiglio: {currentTip}</p>
            </>
          ) : (
            <div className="text-center mb-4">
              <p className="text-xl font-bold mb-2">
                {isGroupMode ? "Modalità Gruppo" : "Modalità Singolo"}
              </p>
              <p>{feedback}</p>
            </div>
          )}
        </>
      ) : (
        <div className="bg-white/20 p-4 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Consigli per Prompt Efficaci</h3>
          <ul className="list-disc pl-5">
            {tips.map((tip, index) => (
              <li key={index} className="mb-2">{tip}</li>
            ))}
          </ul>
          <div className="mt-4">
            <h4 className="font-bold">Risorse Aggiuntive:</h4>
            <ul className="list-disc pl-5">
              <li>Guide online su prompt engineering</li>
              <li>Esempi di prompt di successo</li>
              <li>Esercizi pratici di creazione prompt</li>
            </ul>
          </div>
        </div>
      )}

      <div className="flex justify-between mt-4">
        <Button onClick={startNewRound} disabled={isPlaying}>
          {round === 0 ? "Inizia Gioco" : "Nuovo Round"}
        </Button>
        <Button onClick={toggleGroupMode} disabled={isPlaying}>
          {isGroupMode ? "👤" : "👥"}
        </Button>
      </div>
    </Card>
  );
};

export default PromptGamer;
