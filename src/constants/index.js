import project1 from "../assets/projects/123123123.jpg";
import project2 from "../assets/background1.png";
import project3 from "../assets/game-logo.png";
import project4 from "../assets/InvestmentCalculator.jpg";
import project5 from "../assets/Timer.jpg";
import project6 from "../assets/Cattura.jpg";
import project7 from "../assets/management.jpg";
import project8 from "../assets/Placepicker.jpg";
import project9 from "../assets/quizzOnePiece.jpg";
import project10 from "../assets/food.jpg";

export const HERO_CONTENT = `Sono un Full Stack Developer con formazione presso Hackademy Aulab e una specializzazione ulteriore in React.js attraverso CGM Consulting.Le mie esperienze precedenti nella logistica hanno affinato le mie capacità di progettazione e organizzazione. Ora sono un professionista che lavora ma alla ricerca sempre di nuove sfide e opportunità. Empatico e socievole, mi adatto facilmente al lavoro di squadra e mi piace affrontare nuove sfide. Presto grande attenzione ai dettagli in ogni fase dello sviluppo web, garantendo la qualità del prodotto entro scadenze serrate. La mia creatività nel design e la capacità di risolvere problemi complessi mi consentono di creare esperienze utente coinvolgenti e affrontare le sfide tecniche con determinazione.`;

export const ABOUT_TEXT = `Sono un professionista che eccelle nel lavoro di squadra, adottando metodologie agili e dimostrando una forte creatività. Grazie all'approccio Scrum, riesco a mantenere efficienza e flessibilità in ogni progetto. Mi distinguo per la mia capacità di risolvere problemi in modo innovativo, affrontando ogni sfida con una prospettiva dinamica e collaborativa.`;

export const EXPERIENCES = [
  {
    year: "2024- Presente",
    role: "Full stack developer",
    company: "3ITechnology",
    description: `Full stack Developer con l'obiettivo di apprendere e imparare le varie tecnologie web, come Angular, Power Platform Mirosoft, SQL, MySQL, Typescript, Javascript e C#.
    Ho preso parte a vari progetti di sviluppo app web/softwer per aziende anche importandi come per esempio  Gnerali assicurazione.s `,
    technologies: ["Angular", "Power Platform Mirosoft", "SQL", "MySQL", "Typescript", "Javascript","C#"],
  },
  {
    year: "2024 - 2024",
    role: "Front-Developer Reactjs",
    company: "FoxByte SRL",
    description: ` Freelance Developer. Da remoto. Sviluppo front-end con React JS Nextjs e NodeJS. Contributo regolare su progetto in collaborazione. Bugfixing e migliorie tecniche per la use experience.  
`,
    technologies: ["Javascript", "React.js", "Next.js", "Typescript"],
  },
  {
    year: "2023 - 2024",
    role: "Front-Developer Reactjs",
    company: "CGM Consulting",
    description: `Corso intesivo su Reactjs a i fini dell'assunzione per poi conludersi con una collaborazione lavorativa.`,
    technologies: ["HTML", "CSS", "Reactjs", "Javascript"],
  },
  {
    year: "2022 - 2022",
    role: "Front-Developer Reactjs",
    company: "Aulab",
    description: `Corso per sviluppare conoscere e masterare le varie caratteristiche di Reactjs.`,
    technologies: ["HTML", "CSS", "Reactjs", "Javascript"],
  },
  {
    year: "2022- 2022",
    role: "Full stack developer",
    company: "AULAB",
    description: `Corso intensivo di 3 mesi per apprnedere al meglio le basi di programmazione in HTML, CSS, Javascript, con l'utilizzo di framework come Laravel insieme a PHP e MySQL.`,
    technologies: ["Laravel", "HTML", "CSS", "PHP", "MySQL", "Javascript"],
  }

];

export const PROJECTS = [
  {
    title: "RED",
    image: project1,
    description:
      "Primo progetto del corso per apllicare le varie tecniche CSS per creare un sito web.",
    technologies: ["HTML", "CSS", "Javascript"],
    source: "https://github.com/Bubu90/ProgettoRED",
  },
  {
    title: "Presto.it",
    image: project2,
    description: "Progetto Finale del corso Aulab.",
    technologies: ["Laravel", "PHP", "Html", "CSS", "javascript"],
    source: "https://github.com/Bubu90/ProgettoPresto.it",
  },
  {
    title: "Tic-Tac-Toe",
    image: project3,
    description:
      "Single Page Application (SPA) utilizzando la libreria React JS, con l'obiettivo di replicare il celebre gioco del Tic Tac Toe. Questa applicazione consente a due giocatori di partecipare, assegnando condizioni di vittoria basate sui simboli scelti (X o O) e prevedendo anche la possibilità di un pareggio. Lo stato del gioco è rappresentato da un array bidimensionale, il quale viene manipolato dinamicamente durante l'interazione dei giocatori e determina le condizioni di fine partita.",
    technologies: ["React", "CSS", "javascript"],
    demo: "https://tiktaktoereactbestpractice.netlify.app/",
    source: "https://github.com/Bubu90/Tic-TAc-Toe",
  },
  {
    title: "Investment Calculator",
    image: project4,
    description:
      "Questa SPA React è un calcolatore di investimenti che sfrutta l'hook useState per gestire dinamicamente gli input dell'utente. La struttura organizzata riflette l'albero dei componenti, evidenziando l'utilizzo efficace delle props e la logica di riusabilità dei componenti. Gli utenti possono inserire dati finanziari per ottenere proiezioni personalizzate, mentre la gestione reattiva dello stato assicura un'esperienza utente fluida. ",
    technologies: ["React", "CSS", "javascript"],
    demo: "https://calculator-for-br1.netlify.app/",
    source: "https://github.com/Bubu90/Calculator-Form",
  },
  {
    title: "Timer-Game",
    image: project5,
    description:
      "APP per giocare con i tuoi amici in un gioco di tempo. Buon gioco!",
    technologies: ["React", "CSS", "javascript"],
    demo: "https://timer-game-br1.netlify.app",
    source: "https://github.com/Bubu90/Timer-Challenger",
  },
  {
    title: "Expenses Tracker",
    image: project6,
    description:
      "Single Page Application in React per tracciare le spese personali, utilizzando come hook useState. Gli utenti possono aggiungere nuove spese e filtrare i risultati in base agli anni di interesse. ",
    technologies: ["React", "CSS", "javascript"],
    demo: "https://personal-expense-list.netlify.app/",
    source: "https://github.com/Bubu90/Expenses-List",
  },
  {
    title: "Management System",
    image: project7,
    description: " ",
    technologies: ["React", "CSS", "javascript"],
    demo: "https://personal-expense-list.netlify.app/",
    source: "https://www.github.com",
  },
  {
    title: "Placepicker",
    image: project8,
    description:
      "PlacePicker SPA, sviluppata in React, sfrutta la geolocalizzazione per ordinare i luoghi in base alla vicinanza. Implementa un custom hook per le chiamate Fetch e utilizza local storage per salvare i dati nel browser. Modali consentono la conferma dell'eliminazione dei luoghi selezionati, gestiti con useEffect. Fornisce un'esperienza utente intuitiva per la ricerca, selezione e salvataggio dei luoghi in modo efficiente. ",
    technologies: ["React", "CSS", "javascript"],
    demo: "https://golden-tarsier-f1e026.netlify.app/",
    source: "https://github.com/Bubu90/PLACEPICKER2",
  },
  {
    title: "Quizz",
    image: project9,
    description:
      "Single Page Application per la Quiz App utilizza React Hooks come useState, useRef, useEffect e useCallback per gestire lo stato e ottimizzare le prestazioni. Ogni domanda presenta un timer visibile tramite una progress bar, gestito con setTimeout e setInterval. Alla fine del quiz, viene generato un summary che riporta la percentuale di risposte corrette, errate e non risposte, offrendo agli utenti un feedback dettagliato sulle loro prestazioni. ",
    technologies: ["React", "CSS", "javascript"],
    demo: "https://reactquizbyvasco.netlify.app/",
    source: "https://github.com/Bubu90/Quizz-App",
  },

  {
    title: "Food order App",
    image: project10,
    description:
      "Single Page Application per FoodOrderApp utilizza React Hooks come useState, useRef, useEffect e useCallback per gestire lo stato e ottimizzare le prestazioni. Con chiamate al beck end per gestire gli ordini in modo dinamico e gestire il carrello dell'utente.Per visualuizzare il backend, scaricate il codice sorgente  e nella console,dopo che siente entrati nella cartella backend, startare il server ",
    technologies: ["React", "CSS", "javascript"],
    demo: "https://foabyvasco.netlify.app/",
    source: "https://github.com/Bubu90/react-final-project-cgm",
  },
];

export const CONTACT = {
  address: "Via Ferriere 8, Villadossola , Piemonte - IT",
  phoneNo: "+39 3488148429",
  email: "brunolaria1390@gmail.com",
};
