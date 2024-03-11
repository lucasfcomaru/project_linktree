function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

    // if (html.classList.contains("light")){
    //     html.classList.remove("light")
    // } else {
    //     html.classList.add("")
    // }

    // pegar a tag img
    const img = document.querySelector("#profile img")

    // substituir a imagem
    if(html.classList.contains("light")) {
        // se tiver light mode, adicionar a imagem light
        img.setAttribute ("src", "assets/avatar-light.png")
    } else {
        // se tiver sem light mode, manter a imagem normal
        img.setAttribute ("src", "assets/avatar.png")
    }

    // pegar a tag alt
    const alt = document.querySelector("#profile img")

    // substituir a imagem
    if(html.classList.contains("light")) {
        // se tiver light mode, adicionar a imagem light
        alt.setAttribute ("alt", "Maykbrito de óculos escuro")
    } else {
        // se tiver sem light mode, manter a imagem normal
        alt.setAttribute ("alt", "Mayk brito de óculos de grau")
    }
}
