// function _createComments() {
//   let comments = JSON.parse(localStorage.getItem(KEY));
//   if (!comments || !comments.length) {
//     comments = []
//     for (let i = 0; i < 10; i++) {
//       comments.push(_createComment())
//     }
//     localStorage.setItem(KEY, JSON.stringify(comments));
//   }
//   return comment;
// }

// function _createComment() {
//   const comment = getEmptycomment();
//   comment._id = utilService.makeId();
//   

// function getEmptycomment(){
//     return comment
//   }

  // const comment = {

//       "id": "c1001",
//       "by": {
//         "_id": "u105",
//         "fullname": "Bob",
//         "imgUrl": "http://some-img"
//       },
//       "txt": "good one!",
//       "likedBy": [ // Optional
//         {
//           "_id": "u105",
//           "fullname": "Bob",
//           "imgUrl": "http://some-img"
//         }
//       ],

//   "likedBy": [
//     {
//       "_id": "u105",
//       "fullname": "Bob",
//       "imgUrl": "http://some-img"
//     },
//     {
//       "_id": "u106",
//       "fullname": "Dob",
//       "imgUrl": "http://some-img"
//     }
//   ],
// }