"use strict";
15.; // Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
let guest_list = ["kainat", "Maham", "Marium", "ayesha"];
for (let i = 0; i < guest_list.length; i++) {
    console.log(`Dear Miss` + " " + guest_list[i] + `,\n\nplease come to my birthday party\n\n\t\t thank you\t\t`);
}
let new_guest = "Rubab";
let absent_guest = "kainat";
guest_list[0] = new_guest;
for (let i = 0; i < guest_list.length; i++) {
    console.log(`Dear Miss` + " " + guest_list[i] + `,\n\nplease come to my birthday party\n\n\t\t thank you\t\t\n\n`);
}
console.log(`Dear Miss ${absent_guest} is not comming to my birthday party`);
