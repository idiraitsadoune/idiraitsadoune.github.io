function createElement(tagName, attributes = {}){
    const element = document.createElement(tagName)
    for (const [attribute, value] of Object.entries(attributes)){
        element.setAttribute(attribute, value)
    }
    return element
}

function createMenu(){
    const menu_element = document.getElementById("nav-bar")
    const div_container = createElement('div',{class : 'container'})
    const nav_element = createElement('nav',{class : 'navbar'})

    // Partie LOGO 
    const div_e = createElement('div')
    const a_link = createElement('a', {class : 'small-hero-user', href : './index.html'})
    const img_link = createElement('img', {src:'./IMG/idir.jpg'})

    a_link.appendChild(img_link)
    div_e.appendChild(a_link)
    nav_element.appendChild(div_e)
    // Fin partie LOGO 

    div_container.appendChild(nav_element)
    menu_element.appendChild(div_container)
}

createMenu()