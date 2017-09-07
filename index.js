document.addEventListener("DOMContentLoaded", () => {
  const muralHeader = document.getElementById('muralHeader')
  const muralList = document.getElementById('muralList')


  muralHeader.addEventListener("click", function(){
    createMurals(this, muralList)
  })

  muralList.addEventListener("click", function(){
    let target = event.target
    if(target.class === "murals") {
      showMurals(target.id)
    }
  })

  if(document.querySelectorAll(".info")){
    let info = document.querySelectorAll(".info")
    console.log(info);
  }
})
