// 1. ZEIGE LISTE MIT PIZZAS AN
// X Wir haben einen ARRAY von Pizzas
// - LOOPE über JEDES ITEM im ARRAY
// - Und zeige es dann an (???)
// => WANDEL ITEM IN HTML UM => konvertiere einen String in einen anderen!
// => Zeige HTML STRING im Browser an

// const arrPizzas = [ 'Hawaii', 'Funghi', 'Margeritha', 'Spinat', 'Garnelen' ]; // item = "Hawaii"

// LOOPE über pizzas

// for(let i=0; i<arrPizzas.length; i++) {
//   console.log(arrPizzas[i] )
// }

// TEIL 1 - Zeige jede Pizza an
// FOR OF LOOP
// for(let item of arrPizzas) {
//   console.log( item )
// }

// FOR => Counter (i) => wenn wir irgendwas mit Numbers machen wollen
// FOR OF => Arrays

// PART 2 - suche nach keyword

// 2. SUCHE NACH PIZZA BY SUCHWORT (=SEARCHTERN)
// - X User gibt Buchstaben in INPUT FELD ein
// - X Suchwort wird in Variable gespeichert
// - Suche soll auch einen TEIL des Titles matchen
//  - In jedem Item wollen wir prüfen, ob Suchwort INCLUDED ist in Title
//  - Wir wollen Item FINDEN, wo Suchwort INCLUDED ist in Title
//  - Wir loopen über alle Items und finden das Item, wo Suchwort INCLUDED ist in title
//  - Zeige NUR das gefundene Item an, alle anderen nicht!
//    - a) lösche alle anderen Items aus Array
//    - b) replace Array durch nur das eine Item
//    - c) VERSTECKE alle anderen Items irgendwie

const arrPizzas = [ 'Hawaii', 'Funghi', 'Margeritha', 'Spinat', 'Garnelen' ]; // item = "Hawaii"


const searchTermInPizzas = ( searchWord ) => {

  // Ich will in der For Loop etwas HERAUSFINDEN
  // Dafür brauche ich die Variable VOR der ForLoop
  let foundItems = []; // mache einen empty box für mehrere items

  //  In JEDEM Item wollen wir prüfen, ob Suchwort INCLUDED ist in Title
  for (let pizza of arrPizzas) {
    // "Hawaii".includes("Fung") => false
    const included = pizza.toUpperCase().includes(searchWord.toUpperCase());

    // WENN item gefunden wurde, SPEICHERE es für später
    if (included) {
      foundItems.push( pizza )
    }
  }
  return foundItems
};

// USer sucht nach Funghi
const log = console.log

log( searchTermInPizzas("Funghi"))
log( searchTermInPizzas("Teriyaki"))
log( searchTermInPizzas("Marg")) 
log( searchTermInPizzas("g"))



