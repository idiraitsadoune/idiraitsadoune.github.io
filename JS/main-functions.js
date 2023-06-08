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

    // #### The logo part 
    const div_e = createElement('div')
    const a_link = createElement('a', {class : 'small-hero-user', href : './index.html'})
    const img_link = createElement('img', {src:'./IMG/idir.jpg'})

    a_link.appendChild(img_link)
    div_e.appendChild(a_link)
    nav_element.appendChild(div_e)
    // #### The end of the logo part 

    // #### The links part
    const div_links = createElement('div',{id : 'navbarNav'})
    const div_nav = createElement('div',{class : 'navbar-nav'})

    // Enseignement
    const item_enseignement = createElement('div',{class : 'nav-item'})
    const a_enseignement = createElement('a', {class : 'nav-link', href : './enseignement.html'})
    const fa_enseignement = createElement('i',{class : 'fa fa-graduation-cap'})
    const t_enseignement = document.createTextNode("Enseignement");

    div_nav.appendChild(item_enseignement)
    item_enseignement.appendChild(a_enseignement)
    a_enseignement.appendChild(fa_enseignement)
    a_enseignement.appendChild(t_enseignement)
    
    // Recherche
    const item_recherche = createElement('div',{class : 'nav-item'})
    const a_recherche = createElement('a', {class : 'nav-link', href : './recherche.html'})
    const fa_recherche = createElement('i',{class : 'fa fa-lightbulb-o'})
    const t_recherche = document.createTextNode("Recherche");

    div_nav.appendChild(item_recherche)
    item_recherche.appendChild(a_recherche)
    a_recherche.appendChild(fa_recherche)
    a_recherche.appendChild(t_recherche)

    // Publications
    const item_publications = createElement('div',{class : 'nav-item'})
    const a_publications = createElement('a', {class : 'nav-link', href : './publications.html'})
    const fa_publications = createElement('i',{class : 'fa fa-book'})
    const t_publications = document.createTextNode("Publications");

    div_nav.appendChild(item_publications)
    item_publications.appendChild(a_publications)
    a_publications.appendChild(fa_publications)
    a_publications.appendChild(t_publications)

    // Développement
    const item_developpement = createElement('div',{class : 'nav-item'})
    const a_developpement = createElement('a', {class : 'nav-link', href : './developpement.html'})
    const fa_developpement = createElement('i',{class : 'fa fa-code'})
    const t_developpement = document.createTextNode("Développement");

    div_nav.appendChild(item_developpement)
    item_developpement.appendChild(a_developpement)
    a_developpement.appendChild(fa_developpement)
    a_developpement.appendChild(t_developpement)

    // Me contacter
    const item_contact = createElement('div',{class : 'nav-item'})
    const a_contact = createElement('a', {class : 'nav-link', href : '#footer'})
    const fa_contact = createElement('i',{class : 'fa fa-envelope'})
    const t_contact = document.createTextNode("Me contacter");

    div_nav.appendChild(item_contact)
    item_contact.appendChild(a_contact)
    a_contact.appendChild(fa_contact)
    a_contact.appendChild(t_contact)


    div_links.appendChild(div_nav)
    nav_element.appendChild(div_links)
    // #### The end of the links part 

    // #### The logos of the university part 
    const div_logos = createElement('div',{class : 'nav-logos'})

    const a_lmf = createElement('a',{class : 'navbar-brand', href : 'https://lmf.cnrs.fr/', target : '_blank'})
    const img_lmf = createElement('img', {src : './IMG/lmf-new-logo.png'})
    a_lmf.appendChild(img_lmf)
    div_logos.appendChild(a_lmf)

    const a_cs = createElement('a',{class : 'navbar-brand', href : 'https://www.centralesupelec.fr', target : '_blank'})
    const img_cs = createElement('img', {src : './IMG/cs.png'})
    a_cs.appendChild(img_cs)
    div_logos.appendChild(a_cs)

    const a_ups = createElement('a',{class : 'navbar-brand', href : 'https://www.universite-paris-saclay.fr', target : '_blank'})
    const img_ups = createElement('img', {src : './IMG/ups.png'})
    a_ups.appendChild(img_ups)
    div_logos.appendChild(a_ups)

    nav_element.appendChild(div_logos)
    // #### The end of the logos of the university part 

    div_container.appendChild(nav_element)
    menu_element.appendChild(div_container)
}

createMenu()