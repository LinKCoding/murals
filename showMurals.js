function showMurals(mural) {
  let selectedMural = document.getElementById(mural)

  let index = mural.split("mural")[1] - 1
  let coderCollection = everyMuralArr[index].coders
  let check = coderCollection.map(coder => {
    return `<div id=${coder.name}>
      <h3>${coder.name}</h3>
      <div id="${coder.name}-info" class="info">
        <img src=${coder.image} height="100" width="70">
      </div>
    </div>`
  }).join("")
  selectedMural.innerHTML += check
}
