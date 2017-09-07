function createMurals(muralHeader, muralList) {
  everyMuralArr.forEach(mural => {
    let muralDiv = document.createElement('h2')
    muralDiv.class = "murals"
    muralDiv.id = `mural${mural.number}`
    muralDiv.innerHTML = `Mural #${mural.number}`
    muralList.appendChild(muralDiv)
  })
}
