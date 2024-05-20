// //  Exercise # 11
// // Array 
// // DEfine an array of names

// let names : string[] = ["hussain","abdullah","hasan","ahmed"];

// // loop
// // for each
// // for loop
//  for(let i = 0; i < names.length; i++){
//     console.log(names[i]);
//  }
 
// //  for Each
// names.forEach(name => {
//    console.log(name);
// });

// // for of loop
// for (const freindName of names) {
//    console.log(freindName)
// }

// // Question no # 12

// for (let i = 0; i < names.length; i++) {
//    console.log(`hello,${names[i]}! how are you today ?`)
// }

// // Quetion no # 13

// let transportationMode : string[] = ["Car","Bus","Bicycle","Motorcycle"]

// for (let i = 0; i < transportationMode.length; i++) {
//    console.log(`I would like to own a ${transportationMode[i]}`)
// }

// transportationMode.forEach( mode =>{
//    console.log(`I would like to own a ${mode}`)
// })

// // Question 14
// // define array

// // Invite the guest
// guestlist.forEach(guest => {
   //    console.log(`Dear ${guest},YOu are invited to dinner`);
   
   // });
   
   
   // let invitation :string[] = guestlist.map(guest => `Dear ${guest},YOu are invited to dinner`);
   
   // invitation.forEach(invitations => { console.log(invitations)});
   
   
   // // Question 15
   
   
   // // print the name who can not make dinner
   // let unableAttends : string = guestlist.splice(1,1)[0];
   // console.log(`${unableAttends} cant invited for dinner`);
   
   // // push
   
   // guestlist.push('hina')
   // console.log(guestlist);
   
   // // Print a message
   // guestlist.forEach(guest => {
      //    console.log(`Dear ${guest}, You are invited for dinner`);
      
      // });

   // Question 16
      let guestlist : string[] = ['hussain','hassan','ali','ahmed'];
      console.log('Great news!, We found a bigger table');

// Unshift
guestlist.unshift('Hammad')

// Splice
guestlist.splice(Math.floor(guestlist.length/2),0,'nouman')

// push
guestlist.push('Raza')
console.log(guestlist);

// Print a message 
guestlist.forEach(guest => {
   console.log(`Dear ${guest},You All are invited`);
   
});