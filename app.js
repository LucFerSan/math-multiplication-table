const form = document.querySelector('main form')
const list = document.querySelector('main ul')

function showTable(number) {
  list.innerHTML = ''
  let table = []
  
  for (let i = 1; i <= 10; i++) {
    table.push(`${number} x ${i} = ${number * i}`)
  }

  table.forEach(item => {
    const line = document.createElement('li')
    const lineText = document.createTextNode(item)
    line.append(lineText)

    list.append(line)
  })
}

form.addEventListener('submit', e => {
  e.preventDefault()

  const number = form.querySelector('input').value
  showTable(number)
})