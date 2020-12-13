// filter, är en metod som filtrerar en tidigare array och skapar en ny
const brands = ['adidas', 'nike', 'puma', 'newbalance']
console.log(brands.filter(x => x.length > 5)) // det enda som bör loggas i konsolen är adidas och newbalance
// på grund av att de är de enda elementen längre än 5