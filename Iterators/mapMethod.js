// The .map() Method :

    // The .map() method executes a callback function on each element in an array. It returns a new array made up of the return values from the callback function.

    // The original array does not get altered, and the returned array may contain different elements than the original array. 



const Participants = ['Taylor', 'Donald', 'Don', 'Natasha', 'Bobby'];

// add string 'joined the contest.' after each  participant
const announcements = Participants.map(member => {
  return member + ' joined the contest.';
})

console.log(announcements);