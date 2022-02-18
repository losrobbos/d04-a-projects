

// const found = true

// if(found == true) {
// if( found ) {
//   console.log("Gefunden!")
// }
// else {
//   console.log("Nicht gefunden")
// }


// if( "hallo" ) {
//   console.log("Gefunden")
// }
// else {
//   console.log("Nicht gefunden")
// }

// alles was LEER ist => ist false
// 

// "", 0, null, undefined => FALSY values

// const foundItem = "" // false
// const foundItem = 0
// const foundItem = undefined
// const foundItem = null

// if( foundItem ) {
//   console.log("Nicht gefunden")
// }
// else {
//   console.log("Gefunden")
// }


// const limit = 16

// const checkLimit = (amount) => {

//   if(!(limit == 16)) {
//     return "Limit ist nicht 16"
//   }

//   // else 
//   // continue function logic
// }



const login = (email, pw) => {

  // Loope durch Array

  // const user = arrUsers.
  const user = "Rob"

  // exist function wenn user nicht existiert
  if(!user) {
    const result = "Could not find user with that email" // return = exit function
    return result
  } // return value

  // gebe user rechte
  // lade das profile des users

  // if user gefunden => weitermachen
  const successMsg = "Logged you in successfully"
  return successMsg
}

const result = login("rob@rob.rob", "rob123")
console.log( result )