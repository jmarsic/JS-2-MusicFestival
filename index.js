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
    endingTimeOfConcert: `${festivalDays[1]} - 22:20`,
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

const performersByTimeAsc = performers.sort((a, b) =>
  a.startingTimeOfConcert > b.startingTimeOfConcert ? 1 : -1
);

// utils
const validationAndFormatInputFromUser = () => {
  let userInputForStage = "0";
  do {
    userInputForStage = prompt(
      "Enter stage: 'Daily' or 'Main' or 'After'"
    ).toLowerCase();
  } while (
    userInputForStage !== "daily" &&
    userInputForStage !== "main" &&
    userInputForStage !== "after"
  );
  const firstLetter = userInputForStage.charAt(0).toUpperCase();
  const restOfInput = userInputForStage.slice(1);

  return firstLetter + restOfInput + " stage";
};

// 1 - detaljni pregled izvodaca
const showPerformerDetails = (performersByTime) => {
  let choice = "0";

  do {
    for (let i = 0; i < performersByTime.length; i++) {
      choice = prompt(`
      Enter '>' for next performer
      Enter '<' for previous performer
      Enter '0' for exit
      `);

      switch (choice) {
        case ">":
          alert(
            `${performersByTime[i].name}, ${performersByTime[i].about}, ${performersByTime[i].startingTimeOfConcert}`
          );
          break;

        case "<":
          if (i === 0) {
            alert("Invalid choice, try with '>'");
            break;
          } else if (i === 1) {
            i -= 1;
            alert(
              `${performersByTime[i].name}, ${performersByTime[i].about}, ${performersByTime[i].startingTimeOfConcert}`
            );
            break;
          }
          i -= 2;
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
};

// 2 - pregled svih izvodaca po danu koncerta
function showAllPerformersByDay(day) {
  const result = performers
    .filter((p) => p.startingTimeOfConcert.includes(day)) // popravit da ne vata i sate (18)
    .map((p) => `\n${p.name}, ${p.stage}`);
  alert(result);
}

// 3 - ispis izvodaca po bini
const showAllPerformersByStage = (stage) => {
  const result = performers
    .filter((p) => p.stage.toLowerCase() === stage.toLowerCase())
    .map((p) => `\n${p.name}, ${p.startingTimeOfConcert}`);
  alert(`Performers by ${stage}:\n ${result}`);
};

// 4 - ispis statistike
const showAllPerformersByNumberOfVisitorsDesc = () => {
  const visitorsForDailyStage = performers
    .filter((p) => p.stage === "Daily stage")
    .sort((a, b) => b.numberOfVisitors - a.numberOfVisitors)
    .map(
      (p) => `\nPerformer: ${p.name}, number of visitors: ${p.numberOfVisitors}`
    );
  alert(`\nVisitors for daily stage \n${visitorsForDailyStage}`);

  const visitorsForMainStage = performers
    .filter((p) => p.stage === "Main stage")
    .sort((a, b) => b.numberOfVisitors - a.numberOfVisitors)
    .map(
      (p) => `\nPerformer: ${p.name}, number of visitors: ${p.numberOfVisitors}`
    );
  alert(`\nVisitors for main stage \n${visitorsForMainStage}`);

  const visitorsForAfterStage = performers
    .filter((p) => p.stage === "After stage")
    .sort((a, b) => b.numberOfVisitors - a.numberOfVisitors)
    .map(
      (p) => `\nPerformer: ${p.name}, number of visitors: ${p.numberOfVisitors}`
    );
  alert(`\nVisitors for after stage \n${visitorsForAfterStage}`);
};

// 5 - prosjek posjeta po stageu
const showPercentageVisitorsOfAStage = (stage) => {
  const sum = performers
    .filter((p) => p.stage === stage)
    .reduce((a, c) => {
      a += c.numberOfVisitors;
      return a;
    }, 0);

  const performersBySameStage = performers
    .filter((p) => p.stage === stage)
    .map((p) => {
      return `\n${p.name} has ${((p.numberOfVisitors / sum) * 100).toFixed(
        2
      )}% visitors.`;
    });
  alert(`Daily percentage of visitors for ${stage}\n ${performersBySameStage}`);
};

// 6 - admin panel
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
        showPerformerDetails(performersByTimeAsc);
        break;

      case "2":
        let dayOfConcert = "0";
        do {
          dayOfConcert = prompt(
            "Enter (number) day of concert: '18' or '19' or '20'"
          );
        } while (
          dayOfConcert !== "18" &&
          dayOfConcert !== "19" &&
          dayOfConcert !== "20"
        );
        showAllPerformersByDay(`${dayOfConcert}.`);
        break;

      case "3":
        let enteredStage = "0";
        do {
          enteredStage = prompt(
            "Enter stage: 'Daily' or 'Main' or 'After'"
          ).toLowerCase();
        } while (
          enteredStage !== "daily" &&
          enteredStage !== "main" &&
          enteredStage !== "after"
        );
        enteredStage = enteredStage + " stage";
        showAllPerformersByStage(enteredStage);
        break;

      case "4":
        showAllPerformersByNumberOfVisitorsDesc();
        break;

      case "5":
        const userInputForStage = validationAndFormatInputFromUser();
        showPercentageVisitorsOfAStage(userInputForStage);
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
