function accountAccess() {
    let loginAttempt = 0;
    while (loginAttempt < 3) {
        console.log(`You have ${3 - loginAttempt} attempts left.`);
        loginAttempt++;
    }
    console.log("Account locked");
}
accountAccess();
const voteProcessor = (votesArray) => {
    let i = 0;

    do {
        let vote = votesArray[i];
        console.log(`The vote is ${vote}`);
        i++;

    }
    while (i < votesArray.length);
}
let votesArray = ["feature1", "feature2", "feature4", "feature1"];
voteProcessor(votesArray);
function dayName(dayNumbers) {
    let day;
    for (i = 0; i < dayNumbers.length; i++) {
        switch (dayNumbers[i]) {
            case 1:
                day = "Monday";

                break;
            case 2:
                day = "Tuesday";

                break;
            case 3:
                day = "Wednesday";

                break;
            case 4:
                day = "Thursday";

                break;
            case 5:
                day = "Friday";

                break;
            case 6:
                day = "Saturday";

                break;
            case 7:
                day = "Sunday";

                break;
            default:
                day = "There is no corresponding day."
                break;




        }
        console.log(day);
    }
}
dayName([1, 3, 5, 6, 8, 2, 0, 4, 6, 7]);
const passwordStrength = (pwdArray) => {
    pwdArray.forEach(pwd => {
        if (pwd.length >= 8) {
            console.log("Strong");

        }
        else {
            console.log("Weak");
        }
    }
    );
}
pwdArray = ["pass123wd", "123mero", "meron$"];
passwordStrength(pwdArray);
function greetingsByLanguage(languages) {
    languages.forEach(lang => {
        switch (lang) {
            case "en":
                console.log("Hello");
                break;
            case "fr":
                console.log("Bonjour");
                break;
            case "sw":
                console.log("Habari");
                break;
            case "geez":
                console.log("Selam leke");
                break;
            case "tg":
                console.log("Dehan do");
                break;
            default:
                console.log("Undefined/Unknown language");

        }
    })
}
let lang = ["tg", "en", "sw", "fr", "br", "geez"];
greetingsByLanguage(lang);
const tempraturesList = (temps) => {
    for (i = 0; i < temps.length; i++) {
        if (temps[i] > 30) {
            console.log("High heat alert!");
        }
        else if (temps[i] < 15) {
            console.log("Cold alert!");
        }
        else {
            console.log("Normal conditions");
        }

    }
}
tempraturesList([40, 70, 30, 20, -20]);

function registeredUsers(users) {
    let registeredUser;
    while (users.length>0) {
        registeredUser = users.shift();
        console.log(registeredUser);
    }
    console.log("The queue is empty");
  
}
users = ["Meron", "Nebyat", "Solyana", "Axumawit"];
registeredUsers(users);
function examRetakeChance(scores) {
  
scores.forEach(score=>{
    let attempt=0;
    do {
        console.log(`You can retake the test and your score is ${score}.`)
        score += 10;
        attempt++;
    }
    while (score < 50);
   console.log(`Passed after ${attempt} attempts!`);
})
   
}
examRetakeChance([40,0,20,60,50,20]);