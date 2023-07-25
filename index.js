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
const showAllPerformersByDay = (day) => {
  const result = performers
    .filter((p) => p.startingTimeOfConcert.includes(day)) // popravit da ne vata i sate (18)
    .map((p) => `${p.name}, ${p.stage}`);
  alert(result);
};
showAllPerformersByDay("18");

// 3 - ispis izvodaca po bini
const showAllPerformersByStage = (stage) => {
  const result = performers
    .filter((p) => p.stage.toLowerCase() === stage.toLowerCase())
    .map((p) => `\n${p.name}, ${p.startingTimeOfConcert}`);
  alert(`Performers by ${stage}:\n ${result}`);
};
// showAllPerformersByStage("Main stage");

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
  // const performersBySameStage = performers.filter((p) => p.stage === stage);
  // performersBySameStage.forEach((p) => {
  //   console.log(
  //     `${p.name} has ${((p.numberOfVisitors / sum) * 100).toFixed(
  //       2
  //     )}% visitors.`
  //   );
  // });
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
        // PREPRAVIT
        let input = "0";
        do {
          input = prompt("Enter (number) day of concert: '18' or '19' or '20'");
          console.log(input);
        } while (input !== "18" || input !== "19" || input !== "20");
        showAllPerformersByDay(choice);
        break;

      case "3":
        // PREPRAVIT
        let input1 = "0";
        do {
          input1 = prompt(
            "Enter (number) day of concert: '18' or '19' or '20'"
          );
          console.log(input1);
        } while (input1 !== "18" || input1 !== "19" || input1 !== "20");
        showAllPerformersByStage("Main stage");
        break;

      case "4":
        showAllPerformersByNumberOfVisitorsDesc();
        break;

      case "5":
        // PREPRAVIT
        showPercentageVisitorsOfAStage("Daily stage");
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
