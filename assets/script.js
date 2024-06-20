function togglemode() {
  const html = document.documentElement
  html.classList.toggle("light")
  /*if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }*/

  // pegar a tag img
  const img = document.querySelector("#profile img")
  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light}
    img.setAttribute("src", "./assets/avatar.light.png") 
  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }
  if (html.classList.contains("light")) {
    img.alt=("Foto de Roberto Freires, sem camiseta, na academia")
  } else {
    img.alt=("Foto de Roberto Freires sorrindo, usando óculos de sol, camiseta preta, barba, dentro do carro.")
  }
    
}
