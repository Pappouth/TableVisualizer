const ask = require('./ask')


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function displayTable(table, depart, fin) {
  console.clear()
  console.log(`Vous voulez la table de ${table} en commençant à ${depart} jusqu'à ${fin}`)
  console.log('-----------')

  for (var i = depart; i <= fin; i++) {
    console.log(i + ' | ' + i * table)
  }
} 

async function main() {
  const table = await ask('Quelle table souhaitez-vous avoir ?')
  const depart = await ask('Par quelle valeur souhaitez-vous commencer ?')
  const fin = await ask('Jusqu à quelle valeur souhaitez-vous aller ?')

  const tableIsNaN = parseInt(table)
  const departIsNaN = parseInt(depart)
  const finIsNaN = parseInt(fin)

  if (isNaN(tableIsNaN) || isNaN(departIsNaN) || isNaN(finIsNaN)) {
    console.log('Quelque chose ne va pas...')
  } else {
    displayTable(table, depart, fin)
  }
}

async function mainAleatoire() {
  const table = getRandomInt(10)
  const depart = 0
  const fin = 10

  displayTable(table, depart, fin)
}

async function menu() {
  console.log(`Bonjour! Que voulez-vous faire ? \n
  [1] - visualiser une table de multiplication
  [2] - visualiser une table de multiplication au hasard
  [0] - quitter le programme \n`)

  const choice = await ask('Que voulez-vous faire ?')

  switch (choice) {
    case "1":
      main()
      break;
    case "2":
      mainAleatoire()
      break;
    case "0":
      console.log('Au revoir !')
      process.exit()
      break;
  }
}

menu()