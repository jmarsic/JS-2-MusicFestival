const stages = ["Daily stage", "Main stage", "After stage"];

const festivalDays = ["18. srp 2024.", "19. srp 2024.", "20. srp 2024."];

const performers = [
  {
    id: 1,
    name: "TBF",
    about: "Croatian hip hop group",
    startingTimeOfConcert: `${festivalDays[0]} - 16:00`,
    endingTimeOfConcert: `${festivalDays[0]} - 17:20`,
    stage: stages[0],
    numberOfVisitors: 3000,
  },
  {
    id: 2,
    name: "Mort",
    about: "Croatian r'n'r band",
    startingTimeOfConcert: `${festivalDays[0]} - 17:30`,
    endingTimeOfConcert: `${festivalDays[0]} - 18:50`,
    stage: stages[0],
    numberOfVisitors: 4000,
  },
  {
    id: 3,
    name: "Dalmatino",
    about: "Croatian pop group",
    startingTimeOfConcert: `${festivalDays[1]} - 17:30`,
    endingTimeOfConcert: `${festivalDays[1]} - 18:50`,
    stage: stages[0],
    numberOfVisitors: 5000,
  },
  {
    id: 4,
    name: "Daleka Obala",
    about: "Croatian rock band",
    startingTimeOfConcert: `${festivalDays[0]} - 19:30`,
    endingTimeOfConcert: `${festivalDays[0]} - 20:50`,
    stage: stages[1],
    numberOfVisitors: 8000,
  },
  {
    id: 5,
    name: "Belfast Food",
    about: "Croatian irish folk band",
    startingTimeOfConcert: `${festivalDays[0]} - 21:00`,
    endingTimeOfConcert: `${festivalDays[0]} - 22:20`,
    stage: stages[1],
    numberOfVisitors: 9000,
  },
  {
    id: 6,
    name: "Neno Belan & Fiumens",
    about: "Croatian rock band",
    startingTimeOfConcert: `${festivalDays[1]} - 21:00`,
    endingTimeOfConcert: `${festivalDays[0]} - 22:20`,
    stage: stages[1],
    numberOfVisitors: 10000,
  },
  {
    id: 7,
    name: "Psihomodo Pop",
    about: "Croatian rock band",
    startingTimeOfConcert: `${festivalDays[1]} - 22:30`,
    endingTimeOfConcert: `${festivalDays[1]} - 23:50`,
    stage: stages[1],
    numberOfVisitors: 10200,
  },
  {
    id: 8,
    name: "Kuzma & Shaka Zulu",
    about: "Croatian pop & dance band",
    startingTimeOfConcert: `${festivalDays[2]} - 00:00`,
    endingTimeOfConcert: `${festivalDays[2]} - 01:30`,
    stage: stages[2],
    numberOfVisitors: 7000,
  },
];

let pin = "1950";

performers.forEach((p) => console.log(p));

// detaljni pregled izvodaca
const showPerformerDetails = () => {
  // navigacija >, < i izlaz
  let choice = 0;
  do {
    const performersByTime = performers.sort((a, b) => {
      return a.startingTimeOfConcert - b.startingTimeOfConcert;
    });

    for (let i = 0; i < performersByTime.length; i++) {
      console.log(i);
      if (i === 0)
        alert(
          `${performersByTime[i].name}, ${performersByTime[i].about}, ${performersByTime[i].startingTimeOfConcert}`
        );

      choice = prompt(`
      Enter '>' for next performer
      Enter '<' for previous performer
      Enter '0' for exit
      `);

      console.log(`i = ${i}, choice = ${choice}`);

      switch (choice) {
        case ">":
          // i !== performersByTime.length ? i++ : i;
          alert(
            `${performersByTime[i].name}, ${performersByTime[i].about}, ${performersByTime[i].startingTimeOfConcert}`
          );
          break;
        case "<":
          i !== 0 ? i - 2 : i;
          alert(
            `${performersByTime[i].name}, ${performersByTime[i].about}, ${performersByTime[i].startingTimeOfConcert}`
          );
          break;
        case "0":
          return;
        default:
          alert("Wrong input");
      }
    }
  } while (choice !== "0");
  return;
};

// pregled svih izvodaca po danu koncerta
const showAllPerformersByDay = (day) => {
  const result = performers
    .filter(day.startingTimeOfConcert)
    .map((p) => `${p.name}, ${p.stage}`);
  console.log(result);
};
// showAllPerformersByDay("18");

// ispis izvodaca po bini
const showAllPerformersByStage = (stage) => {
  performers.filter((performer) => {
    if (performer.stage === stage)
      console.log(`${performer.name}, ${performer.startingTimeOfConcert}`);
  });
};
showAllPerformersByStage("Main stage");

// ispis statistike
const showAllPerformersByNumberOfVisitorsDesc = () => {
  // performers.forEach((p) => {});
  alert("\nStatistic for DAILY STAGE");
  performers
    .filter((p) => p.stage === "Daily stage")
    .sort((a, b) => b.numberOfVisitors - a.numberOfVisitors)
    .map((p) =>
      alert(`Performer: ${p.name}
Number of visitors: ${p.numberOfVisitors}`)
    );

  alert("\nStatistic for MAIN STAGE");
  performers
    .filter((p) => p.stage === "Main stage")
    .sort((a, b) => b.numberOfVisitors - a.numberOfVisitors)
    .map((p) =>
      alert(`Performer: ${p.name}
Number of visitors: ${p.numberOfVisitors}`)
    );

  alert("\nStatistic for AFTER STAGE");
  performers
    .filter((p) => p.stage === "After stage")
    .sort((a, b) => b.numberOfVisitors - a.numberOfVisitors)
    .map((p) =>
      alert(`Performer: ${p.name}
Number of visitors: ${p.numberOfVisitors}`)
    );
};

// prosjek posjeta po stageu
const showPercentageVisitorsOfAStage = (stage) => {
  const sum = performers
    .filter((p) => p.stage === stage)
    .reduce((a, c) => {
      a += c.numberOfVisitors;
      return a;
    }, 0);
  const performersBySameStage = performers.filter((p) => p.stage === stage);
  performersBySameStage.forEach((p) => {
    console.log(
      `${p.name} has ${((p.numberOfVisitors / sum) * 100).toFixed(
        2
      )}% visitors.`
    );
  });
};
showPercentageVisitorsOfAStage("Daily stage");

const showAdminPanel = () => {
  let userInputForPin = prompt("Enter PIN to acces admin panel:");
  let choice = "0";

  if (userInputForPin !== pin) {
    alert("Wrong PIN!\n\nExitting..");
    return;
  }

  do {
    choice = prompt(`Enter number for:
    1 - Enter number of visitors
    2 - Enter new performer
    3 - Deleting performer
    4 - Change admin PIN
    0 - Exit`);

    console.log(choice);

    switch (choice) {
      case "1":
        break;
      case "2":
        break;
      case "3":
        break;
      case "4":
        break;
      case "0":
        break;
      default:
        alert("Invalid choice..");
    }
  } while (choice !== "0");
};
// showAdminPanel();

const showMainMenu = () => {
  let choice = "0";
  do {
    choice = prompt(`Enter number for:
    1 - Show performer details
    2 - Show performers by day of concert
    3 - Show performers by stage
    4 - Show number of visitors (descending) per stage
    5 - Show percentage of visitors by stage
    6 - Admin panel
    0 - Exit
    `);

    switch (choice) {
      case "1":
        showPerformerDetails();
        break;
      case "2":
        let choice = "0";
        do {
          choice = prompt(
            "Enter (number) day of concert: '18' or '19' or '20'"
          );
          console.log(choice);
        } while (choice !== "18" || choice !== "19" || choice !== "20");

        showAllPerformersByDay(choice);
        break;
      case "3":
        break;
      case "4":
        showAllPerformersByNumberOfVisitorsDesc();
        break;
      case "5":
        break;
      case "6":
        showAdminPanel();
        break;
      case "0":
        alert("Exiting console application..");
        break;
      default:
        alert("Invalid choice..");
    }
  } while (choice !== "0");
};

showMainMenu();
