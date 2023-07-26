const stages = ["Daily stage", "Main stage", "After stage"];

const festivalDays = ["18. 7. 2024.", "19. 7. 2024.", "20. 7. 2024."];

const performers = [
  {
    id: 1,
    name: "TBF",
    about: "Croatian hip hop group",
    startingTimeOfConcert: `${festivalDays[0]} 16:00`,
    endingTimeOfConcert: `${festivalDays[0]} 17:20`,
    stage: stages[0],
    numberOfVisitors: 3000,
  },
  {
    id: 2,
    name: "Mort",
    about: "Croatian r'n'r band",
    startingTimeOfConcert: `${festivalDays[0]} 17:30`,
    endingTimeOfConcert: `${festivalDays[0]} 18:50`,
    stage: stages[0],
    numberOfVisitors: 4000,
  },
  {
    id: 3,
    name: "Dalmatino",
    about: "Croatian pop group",
    startingTimeOfConcert: `${festivalDays[1]} 17:30`,
    endingTimeOfConcert: `${festivalDays[1]} 18:50`,
    stage: stages[0],
    numberOfVisitors: 5000,
  },
  {
    id: 4,
    name: "Daleka Obala",
    about: "Croatian rock band",
    startingTimeOfConcert: `${festivalDays[0]} 19:30`,
    endingTimeOfConcert: `${festivalDays[0]} 20:50`,
    stage: stages[1],
    numberOfVisitors: 8000,
  },
  {
    id: 5,
    name: "Belfast Food",
    about: "Croatian irish folk band",
    startingTimeOfConcert: `${festivalDays[0]} 21:00`,
    endingTimeOfConcert: `${festivalDays[0]} 22:20`,
    stage: stages[1],
    numberOfVisitors: 9000,
  },
  {
    id: 6,
    name: "Neno Belan & Fiumens",
    about: "Croatian rock band",
    startingTimeOfConcert: `${festivalDays[1]} 21:00`,
    endingTimeOfConcert: `${festivalDays[1]} 22:20`,
    stage: stages[1],
    numberOfVisitors: 10000,
  },
  {
    id: 7,
    name: "Psihomodo Pop",
    about: "Croatian rock band",
    startingTimeOfConcert: `${festivalDays[1]} 22:30`,
    endingTimeOfConcert: `${festivalDays[1]} 23:50`,
    stage: stages[1],
    numberOfVisitors: 10200,
  },
  {
    id: 8,
    name: "Kuzma & Shaka Zulu",
    about: "Croatian pop & dance band",
    startingTimeOfConcert: `${festivalDays[2]} 00:00`,
    endingTimeOfConcert: `${festivalDays[2]} 01:30`,
    stage: stages[2],
    numberOfVisitors: 7000,
  },
];

let pin = "1950";

const performersByTimeAsc = performers.sort((a, b) =>
  a.startingTimeOfConcert > b.startingTimeOfConcert ? 1 : -1
);

// utils
const capitalize = (string) => {
  const word = string.toLowerCase();
  const firstLetter = word.charAt(0).toUpperCase();
  const restOfString = word.slice(1);

  return firstLetter + restOfString;
};

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

const checkDate = (performerDateOfConcert) => {
  const date = new Date();

  const performerDateInfo = performerDateOfConcert.split(" ");
  const performerHourInfo = performerDateInfo[3].split(":");

  const performerDate = parseInt(performerDateInfo[0].slice(0, -1));
  const performerMonth = parseInt(performerDateInfo[1].slice(0, -1));
  const performerYear = parseInt(performerDateInfo[2].slice(0, -1));
  const performerHour = parseInt(performerHourInfo[0]);
  const performerMinutes = parseInt(performerHourInfo[1]);

  const dateMonth = date.getMonth() + 1;
  const dateDate = date.getDate();
  const dateYear = date.getFullYear();
  const dateHour = date.getHours();
  const dateMinutes = date.getMinutes();

  if (dateYear > performerYear) {
    return 0;
  } else if (dateYear < performerYear && dateMonth > performerMonth) {
    return 1;
  } else if (dateYear === performerYear && dateMonth > performerMonth) {
    return 0;
  } else if (dateYear === performerYear && dateDate > performerDate) {
    return 0;
  } else if (dateYear === performerYear && dateHour > performerHour) {
    return 0;
  } else if (dateYear === performerYear && dateMinutes >= performerMinutes) {
    return 0;
  }
  return 1;
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

// admin functions
const enterNumberOfVisitors = () => {
  let choice = "";

  do {
    choice = prompt(
      "\nEnter for which performer you want to change number of visitors"
    );

    const matchingIndex = performers.findIndex(
      (p) => p.name.toLowerCase() === choice.toLowerCase()
    );

    if (matchingIndex !== -1) {
      performers[matchingIndex].numberOfVisitors = prompt(
        `\nEnter number of visitors for ${performers[matchingIndex].name}`
      );
      alert(
        `${performers[matchingIndex].name}, new number of visitors: ${performers[matchingIndex].numberOfVisitors}`
      );
      break;
    } else alert("\nDidn't find that performer, try something else");
  } while (true);
};

const addNewPerformer = () => {
  const name = capitalize(prompt("Enter performer name:"));
  const about = capitalize(prompt("Enter something about performer:"));
  let day = "";
  let month = "";
  let year = "";
  let hours = "";
  let minutes = "";
  do {
    day = parseInt(prompt("Enter day of concert"));
    month = parseInt(prompt("Enter month of concert"));
    year = parseInt(prompt("Enter year of concert"));
    hours = parseInt(prompt("Enter hours of concert"));
    minutes = parseInt(prompt("Enter minutes of concert"));
  } while (
    !(day > 0 && day < 31) ||
    !(month > 0 && month <= 12) ||
    !(year >= 2023) ||
    !(hours >= 0 && hours < 24) ||
    !(minutes >= 0 && minutes < 60)
  );
  const startingTimeOfConcert = `${day}. ${month}. ${year}. ${hours}:${minutes}`;

  if (!checkDate(startingTimeOfConcert)) {
    alert("Cannot add this performer");
    return;
  }

  let lengthOfConcertInHours = "";
  let additionalLengthOfConcertInMinutes = "";

  do {
    lengthOfConcertInHours = parseInt(
      prompt("Enter length of concert in hours (max 2 hours)")
    );
    additionalLengthOfConcertInMinutes = parseInt(
      prompt("Enter minutes (if needed 0 - 60 mins)")
    );
  } while (
    !(lengthOfConcertInHours > 0 && lengthOfConcertInHours <= 2) ||
    !(
      additionalLengthOfConcertInMinutes >= 0 &&
      additionalLengthOfConcertInMinutes < 60
    )
  );
  const endingTimeOfConcert = `${lengthOfConcertInHours}:${additionalLengthOfConcertInMinutes}`;

  const stage = validationAndFormatInputFromUser();

  const id = performers[performers.length - 1].id + 1;

  const newPerformer = {
    id,
    name,
    about,
    startingTimeOfConcert,
    endingTimeOfConcert,
    stage,
    numberOfVisitors: 0,
  };

  performers.push(newPerformer);

  alert("New performer added..");
};

const deletePerformer = () => {
  let choice = "";

  do {
    choice = prompt("\nEnter performer you want to delete");

    const matchingIndex = performers.findIndex(
      (p) => p.name.toLowerCase() === choice.toLowerCase()
    );

    if (matchingIndex !== -1) {
      const result = checkDate(performers[matchingIndex].startingTimeOfConcert);
      console.log(result);
      if (result) {
        performers.filter((p) => p.id === matchingIndex);
        console.log(matchingIndex);

        console.log(performers);
        alert(`\nDeleted ${performers[matchingIndex].name} from performers.`);
        performers.splice(matchingIndex, 1);
        console.log(performers);
        break;
      } else alert("\nCannot delete performer that had concert!");
    } else alert("\nDidn't find that performer, try something else");
  } while (choice !== "0");
};

const changePin = () => {
  let newPassword = "";

  do {
    newPassword = prompt("\nSet up a new PIN that has from 4 to 8 characters");
  } while (!(newPassword.length >= 4) || !(newPassword.length <= 8));

  alert("\nNew pin setted");

  return newPassword;
};

// 6 - admin panel
const showAdminPanel = () => {
  let userInputForPin = prompt("\nEnter PIN to acces admin panel:");
  let choice = "0";

  if (userInputForPin !== pin) {
    alert("\nWrong PIN!\n\nExitting..");
    return;
  }

  do {
    choice = prompt(`Enter number for:
    1 - Enter number of visitors
    2 - Enter new performer
    3 - Deleting performer
    4 - Change admin PIN
    0 - Exit`);

    switch (choice) {
      case "1":
        enterNumberOfVisitors();
        break;

      case "2":
        addNewPerformer();
        break;

      case "3":
        deletePerformer();
        break;

      case "4":
        pin = changePin();
        break;

      case "0":
        alert("\nReturning to main menu..");
        break;

      default:
        alert("\nInvalid choice..");
    }
  } while (choice !== "0");
};

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
            "\nEnter (number) day of concert: '18' or '19' or '20'"
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
            "\nEnter stage: 'Daily' or 'Main' or 'After'"
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
        alert("\nExiting console application..");
        break;

      default:
        alert("\nInvalid choice..");
    }
  } while (choice !== "0");
};

showMainMenu();
