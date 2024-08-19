const people = [
  {
    name: "Artem",
    friends: ["Maks", "Vania", "Kiril"],
    balance: 340,
    skills: ["programming"],
  },
  {
    name: "Vania",
    friends: ["Dima", "Artem"],
    balance: 560,
    skills: ["drawing"],
  },
  {
    name: "Taras",
    friends: ["Maks", "V'yacheslav", "Kiril", "Artem"],
    balance: 210,
    skills: ["swimming"],
  },
];

// Task 1

const sumOfBalances = people.reduce((acc, person) => acc + person.balance, 0);
console.log(sumOfBalances);

// Task 2

const hasFriendKiril = people.filter((person) => person.friends.includes("Kiril"));
console.log(hasFriendKiril);

// Task 3

const sortedPeopleByQuantityOfFriend = [...people].sort((curr, next) => curr.friends.length - next.friends.length);
console.log(sortedPeopleByQuantityOfFriend);

// Task 4

const sortedPeopleBySkill = [...people].sort((curr, next) => {
  const currSkills = curr.skills.join(", ");
  const nextSkills = next.skills.join(", ");

  return currSkills.localeCompare(nextSkills);
});
console.log(sortedPeopleBySkill);