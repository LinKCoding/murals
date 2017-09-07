everyMuralArr = []
function Mural(number, coders) {
  this.number = number
  this.coders = coders
  everyMuralArr.push(this)
}

Mural.prototype.coderPics = function() {
  this.coders.map(coder => {
    return `<img src=${coder.image}>`
  })
}

function Coder(name, bio, image) {
  this.name = name
  this.bio = bio
  this.image = image
}

const turingBio = "Alan Mathison Turing (23 June 1912 – 7 June 1954) was an English computer scientist, mathematician, logician, cryptanalyst, philosopher and theoretical biologist."
const turingImg = "https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg"
const alanTuring = new Coder("Alan Turing", turingBio, turingImg )

const lovelaceBio = "Augusta Ada King-Noel, Countess of Lovelace (10 December 1815 – 27 November 1852) was an English mathematician and writer, chiefly known for her work on Charles Babbage's proposed mechanical general-purpose computer, the Analytical Engine."
const lovelaceImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Ada_Lovelace_portrait.jpg/800px-Ada_Lovelace_portrait.jpg"
const adaLovelace = new Coder("Ada Lovelace", lovelaceBio, lovelaceImg)

const bernersBio = "Sir Timothy John Berners-Lee (8 June 1955), also known as TimBL, is an English engineer and computer scientist, best known as the inventor of the World Wide Web."
const bernersImg = "https://upload.wikimedia.org/wikipedia/commons/4/4e/Sir_Tim_Berners-Lee_%28cropped%29.jpg"
const timBernersLee = new Coder("Tims Berners-Lee", bernersBio, bernersImg)

const hopperBio = "Grace Brewster Murray Hopper  December 9, 1906 – January 1, 1992) was an American computer scientist and United States Navy rear admiral."
const hopperImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Commodore_Grace_M._Hopper%2C_USN_%28covered%29.jpg/800px-Commodore_Grace_M._Hopper%2C_USN_%28covered%29.jpg"
const graceHopper = new Coder("Grace Hopper", hopperBio, hopperImg)

mural1 = new Mural(1,[alanTuring])
mural2 = new Mural(2,[adaLovelace])
mural3 = new Mural(3, [timBernersLee, graceHopper])
