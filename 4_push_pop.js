// push
// denna metod lägger till ett eller flera element i en array
// den kan också returnera längden av arrayen efter det att det nya elementet lagts till
const teams = ['bajen', 'united', 'barca']
let count = teams.push('dortmund') //lägger till dortmund i arrayen teams
console.log(teams) // skriver ut arrayen i konsolen (som då borde innehålla dortmund)
console.log(count) // skriver ut längden av arrayen i konsolen (längden efter att det nya elementet lagts till)

// pop
// den här metoden tar bort det sista elementet i en array till skillnad från push som lade till
// metoden returnerar sedan det sista elementet
let element = teams.pop() // det här ger element värdet "dortmund"
console.log(element) // det här skriver ut det sista elementet som tagits bort
console.log(teams) // det här skriver ut arrayen teams utan "dortmund"