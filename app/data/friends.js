// ===============================================================================
// DATA
// Below data will hold all of the friends.
// ===============================================================================
//this is the only friends that is persistent data
var friendsArray = [
    {
      friendName: "Boudreaux",
      friendImg: "/images/kingcake.jpg",
      scores: [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1
      ]
    },
    {
      friendName: "T-Bo",
      friendImg: "/images/LouisianaSwampBeauty.jpg",
      scores: [
          3,
          1,
          5,
          1,
          2,
          5,
          4,
          1,
          3,
          1
      ]
    },
    {
        friendName: "Thibideaux",
      friendImg: "/images/LouisianaSwampBeauty.jpg",
      scores: [
          5,
          5,
          5,
          5,
          4,
          4,
          4,
          4,
          1,
          1
      ]
    }
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendsArray;