const fetch = require('node-fetch')

console.log(fetch)

// async function g() {
//     fetch('http://localhost:4000/graphql?query={hello}')
//         .then(console.log)
// }


// g()

fetch('http://localhost:4000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({query: "{ hello }"})
  })
    .then(r => r.json())
    .then(data => console.log('data returned:', data));