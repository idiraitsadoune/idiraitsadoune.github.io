function createElement(tagName, attributes = {}){
    const element = document.createElement(tagName)
    for (const [attribute, value] of Object.entries(attributes)){
        element.setAttribute(attribute, value)
    }
    return element
}

function createMenu(path = "./"){
    const menu_element = document.getElementById("nav-bar")
    const div_container = createElement('div',{class : 'container'})
    const nav_element = createElement('nav',{class : 'navbar'})

    // #### The logo part 
    const div_e = createElement('div')
    const a_link = createElement('a', {class : 'small-hero-user', href : path + 'index.html'})
    const img_link = createElement('img', {src: path + 'IMG/idir.jpg'})

    a_link.appendChild(img_link)
    div_e.appendChild(a_link)
    nav_element.appendChild(div_e)
    // #### The end of the logo part 

    // #### The links part
    const div_links = createElement('div',{id : 'navbarNav'})
    const div_nav = createElement('div',{class : 'navbar-nav'})

    // Enseignement
    const item_enseignement = createElement('div',{class : 'nav-item'})
    const a_enseignement = createElement('a', {class : 'nav-link', href : path + 'enseignement'})
    const fa_enseignement = createElement('i',{class : 'fa fa-graduation-cap'})
    const t_enseignement = document.createTextNode("Enseignement");

    div_nav.appendChild(item_enseignement)
    item_enseignement.appendChild(a_enseignement)
    a_enseignement.appendChild(fa_enseignement)
    a_enseignement.appendChild(t_enseignement)
    
    // Recherche
    const item_recherche = createElement('div',{class : 'nav-item'})
    const a_recherche = createElement('a', {class : 'nav-link', href : path + 'recherche'})
    const fa_recherche = createElement('i',{class : 'fa fa-lightbulb-o'})
    const t_recherche = document.createTextNode("Recherche");

    div_nav.appendChild(item_recherche)
    item_recherche.appendChild(a_recherche)
    a_recherche.appendChild(fa_recherche)
    a_recherche.appendChild(t_recherche)

    // Publications
    const item_publications = createElement('div',{class : 'nav-item'})
    const a_publications = createElement('a', {class : 'nav-link', href : path + 'recherche/publications.html'})
    const fa_publications = createElement('i',{class : 'fa fa-book'})
    const t_publications = document.createTextNode("Publications");

    div_nav.appendChild(item_publications)
    item_publications.appendChild(a_publications)
    a_publications.appendChild(fa_publications)
    a_publications.appendChild(t_publications)

    // Développement
    const item_developpement = createElement('div',{class : 'nav-item'})
    const a_developpement = createElement('a', {class : 'nav-link', href : path + 'recherche/developpement.html'})
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
    const img_lmf = createElement('img', {src : path + 'IMG/lmf-new-logo.png'})
    a_lmf.appendChild(img_lmf)
    div_logos.appendChild(a_lmf)

    const a_cs = createElement('a',{class : 'navbar-brand', href : 'https://www.centralesupelec.fr', target : '_blank'})
    const img_cs = createElement('img', {src : path + 'IMG/cs.png'})
    a_cs.appendChild(img_cs)
    div_logos.appendChild(a_cs)

    const a_ups = createElement('a',{class : 'navbar-brand', href : 'https://www.universite-paris-saclay.fr', target : '_blank'})
    const img_ups = createElement('img', {src : path + 'IMG/ups.png'})
    a_ups.appendChild(img_ups)
    div_logos.appendChild(a_ups)

    nav_element.appendChild(div_logos)
    // #### The end of the logos of the university part 

    div_container.appendChild(nav_element)
    menu_element.appendChild(div_container)
}

function createDesignedBy(path = "./"){
    const section = document.getElementById("designed")
    const div = createElement('div',{class : 'container designed'})
    const text1 = document.createTextNode("Designed by ");
    const a = createElement('a', {href : path + 'index.html'})
    const a_text = document.createTextNode("Idir AIT SADOUNE")
    a.appendChild(a_text)
    const text2 = document.createTextNode(" - 2025");
    div.appendChild(text1)
    div.appendChild(a)
    div.appendChild(text2)
    section.appendChild(div)
}

function createFooter(){
    const section = document.getElementById("footer")
    section.setAttribute("class","section-form")

    const div_container = createElement('div',{class : "container"})
    section.appendChild(div_container)

    const div_title = createElement('div',{class : 'section-title'})
    div_title.appendChild(document.createTextNode("Me contacter"));
    div_container.appendChild(div_title)

    const div_grid = createElement('div',{class : 'footer-grid'})
    div_container.appendChild(div_grid)

    const div_1 = createElement('div')
    const div_2 = createElement('div')
    const div_3 = createElement('div')
    div_grid.appendChild(div_1)
    div_grid.appendChild(div_2)
    div_grid.appendChild(div_3)

    // DIV 1
    const title_1 = createElement('div',{class : "info-title"})
    title_1.appendChild(document.createTextNode("ADRESSE DE CENTRALESUPELEC"))
    div_1.appendChild(title_1)

    const item_11 = createElement('div',{class : "info_item"})
    item_11.appendChild(createElement('i',{class : "fa fa-map-marker"}))
    item_11.appendChild(document.createTextNode("Bâtiment Breguet"))
    item_11.appendChild(document.createElement("br"))
    item_11.appendChild(document.createTextNode("3 rue Joliot-Curie, F-91192 Gif-sur-Yvette Cedex"))
    div_1.appendChild(item_11)

    const item_12 = createElement('div',{class : "info_item"})
    item_12.appendChild(createElement('i',{class : "fa fa-phone"}))
    item_12.appendChild(document.createTextNode("+33/0 1 75 31 78 46"))
    div_1.appendChild(item_12)

    // DIV 2
    const title_2 = createElement('div',{class : "info-title"})
    title_2.appendChild(document.createTextNode("ADRESSE DU LMF"))
    div_2.appendChild(title_2)

    const item_21 = createElement('div',{class : "info_item"})
    item_21.appendChild(createElement('i',{class : "fa fa-map-marker"}))
    item_21.appendChild(document.createTextNode("Bât 650 Ada Lovelace"))
    item_21.appendChild(document.createElement("br"))
    item_21.appendChild(document.createTextNode("1, rue Raimond Castaing, 91190 Gif-sur-Yvette"))
    div_2.appendChild(item_21)

    const item_22 = createElement('div',{class : "info_item"})
    item_22.appendChild(createElement('i',{class : "fa fa-phone"}))
    item_22.appendChild(document.createTextNode("+33/0 1 75 31 78 46"))
    div_2.appendChild(item_22)

    // DIV 3
    const title_3 = createElement('div',{class : "info-title"})
    title_3.appendChild(document.createTextNode("EMAILS ET LIENS SUR LE WEB"))
    div_3.appendChild(title_3)

    const item_31 = createElement('div',{class : "info_item"})
    item_31.appendChild(createElement('i',{class : "fa fa-envelope"}))
    const mail_1 = createElement('a',{href : "mailto:idir.aitsadoune@centralesupelec.fr", class:"footer-link"})
    mail_1.appendChild(document.createTextNode(" idir[.]aitsadoune[at]centralesupelec[.]fr")) 
    item_31.appendChild(mail_1)

    item_31.appendChild(document.createElement("br"))
    item_31.appendChild(createElement('i',{class : "fa fa-envelope"}))
    const mail_2 = createElement('a',{href : "mailto:idiraitsadoune@lmf.cnrs.fr", class:"footer-link"})
    mail_2.appendChild(document.createTextNode(" idiraitsadoune[at]lmf[.]cnrs[.]fr")) 
    item_31.appendChild(mail_2)

    item_31.appendChild(document.createElement("br"))
    item_31.appendChild(createElement('i',{class : "fa fa-envelope"}))
    const mail_3 = createElement('a',{href : "mailto:idir.ait-sadoune@universite-paris-saclay.fr", class:"footer-link"})
    mail_3.appendChild(document.createTextNode(" idir[.]ait-sadoune[at]universite-paris-saclay[.]fr")) 
    item_31.appendChild(mail_3)

    div_3.appendChild(item_31)

    const item_32 = createElement('div',{class : "info_item"})
    const git = createElement('a',{href:"https://github.com/idiraitsadoune", target:"_blank"})
    git.appendChild(createElement('i',{class:"fa fa-github-square"}))
    item_32.appendChild(git)
    const linkedin = createElement('a',{href:"https://www.linkedin.com/in/idiraitsadoune/", target:"_blank"})
    linkedin.appendChild(createElement('i',{class:"fa fa-linkedin-square"}))
    item_32.appendChild(linkedin)
    const twitter = createElement('a',{href:"https://twitter.com/IdirAitSadoune", target:"_blank"})
    twitter.appendChild(createElement('i',{class:"fa fa-twitter-square"}))
    item_32.appendChild(twitter)
    const facebook = createElement('a',{href:"https://www.facebook.com/idir.aitsadoune", target:"_blank"})
    facebook.appendChild(createElement('i',{class:"fa fa-facebook-square"}))
    item_32.appendChild(facebook)
    const youtube = createElement('a',{href:"https://www.youtube.com/channel/UCQFRgqAWu5iLenriuvpK6Zg", target:"_blank"})
    youtube.appendChild(createElement('i',{class:"fa fa-youtube-square"}))
    item_32.appendChild(youtube)
    div_3.appendChild(item_32)
}

function createTitleBar(title="", path="./", sections=[], level=""){
    const section = document.getElementById("global-title")
    const div_container = createElement('div',{class : "container"})
    section.appendChild(div_container)

    const title_container = createElement('div',{class : "title-container"})
    title_container.appendChild(document.createTextNode(title)) 
    div_container.appendChild(title_container)

    const title_menu = createElement('div',{class : "title-menu"})

    title_menu.appendChild(createElement('i',{class : "fa fa-home"}))
    const link = createElement('a',{href : path + "index.html"})
    link.appendChild(document.createTextNode(" Accueil"))
    title_menu.appendChild(link)

    for(let i=0; i<sections.length ; i++){
        title_menu.appendChild(createElement('i',{class : "fa fa-folder-open-o", style : "padding-left:20px"}))
        const link_2 = createElement('a',{href : sections[i][1]})
        link_2.appendChild(document.createTextNode(" " + sections[i][0]))
        title_menu.appendChild(link_2)
    }

    if(level != ""){
        const span = createElement('span')
        span.appendChild(createElement('i',{class : "fa fa-graduation-cap"}))
        span.appendChild(document.createTextNode(" " + level))
        title_menu.appendChild(span)
    }

    div_container.appendChild(title_menu)
}

function createLastPublications(){
    const main_div = document.getElementById("last-publications")
    const headers = {Accept: 'application/json'}

    fetch("./JSON/last-pub.json", headers)
        .then((response) => response.json())
        .then((json) => {
            const publications = json["publications"]

            // Only the last four publications
            for (let i=0; i<4 ; i++){
                const div = createElement('div')
                const a = createElement('a',{href : publications[i]["link"], target : "_blank", class : "publication-title"})
                a.appendChild(createElement('i',{class : "fa fa-book"}))
                a.appendChild(document.createTextNode(" " + publications[i]["title"]))
                div.appendChild(a)
                main_div.appendChild(div)
                main_div.appendChild(document.createTextNode(" " + publications[i]["conference"]))
                main_div.appendChild(document.createElement("br"))
                if(i < 3) {
                    main_div.appendChild(document.createElement("br"))
                }
            }      
    });
}

function createLastLessons(){
    const main_div = document.getElementById("last-lessons-div")
    const headers = {Accept: 'application/json'}
    fetch("./JSON/last-lessons.json", headers)
        .then((response) => response.json())
        .then((json) => {
            const lessons = json["lessons"]

            const grid = createElement('div',{class : 'lessons-grid'})
            main_div.appendChild(grid)

            // Only the last four lessons
            for (let i=0; i<4 ; i++){
                const single = createElement('div',{class : 'single-lessons'})
                grid.appendChild(single)

                var a 
                if(lessons[i]["target"].localeCompare("_blank")===0){
                    a = createElement('a',{href: lessons[i]["link"], target: lessons[i]["target"]})
                    single.appendChild(a)
                }
                else {
                    a = createElement('a',{href: "enseignement/"+lessons[i]["link"], target: lessons[i]["target"]})
                    single.appendChild(a)
                }
                

                const img = createElement('img',{style:"width: 100%;",src:"./IMG/"+lessons[i]["image"]})
                a.appendChild(img)

                const title = createElement('div',{class:"lesson-title"})
                title.appendChild(document.createTextNode(lessons[i]["title"]))
                a.appendChild(title)

                const level = createElement('div',{class:"lesson-level"})
                level.appendChild(document.createTextNode(lessons[i]["level"]))
                a.appendChild(level)
            }
        });
}

function createAllPublications(){
    const main_div = document.getElementById("all-publications-div")
    const headers = {Accept: 'application/json'}
    
    fetch("../JSON/publications.json", headers)
        .then((response) => response.json())
        .then((json) => {
            
            const div_revue = createElement('div', {class:"section-title"})
            div_revue.appendChild(document.createTextNode("Journal Articles"))
            main_div.appendChild(div_revue)
    
            var publications = json["revues"]
            for (let i=0; i<publications.length ; i++){
                const div = createElement('div')
                const a = createElement('a',{href : publications[i]["link"], target : "_blank", class : "publication-title"})
                a.appendChild(createElement('i',{class : "fa fa-book"}))
                a.appendChild(document.createTextNode(" " + publications[i]["title"]))
                div.appendChild(a)
                main_div.appendChild(div)
                main_div.appendChild(document.createTextNode(" " + publications[i]["conference"]))
                main_div.appendChild(document.createElement("br"))
                main_div.appendChild(document.createElement("br"))  
            }
    
            const div_conf = createElement('div', {class:"section-title"})
            div_conf.appendChild(document.createTextNode("Conference and Workshop Papers"))
            main_div.appendChild(div_conf)
    
            publications = json["conferences"]
            for (let i=0; i<publications.length ; i++){
                const div = createElement('div')
                const a = createElement('a',{href : publications[i]["link"], target : "_blank", class : "publication-title"})
                a.appendChild(createElement('i',{class : "fa fa-book"}))
                a.appendChild(document.createTextNode(" " + publications[i]["title"]))
                div.appendChild(a)
                main_div.appendChild(div)
                main_div.appendChild(document.createTextNode(" " + publications[i]["conference"]))
                main_div.appendChild(document.createElement("br"))
                main_div.appendChild(document.createElement("br"))  
            }
    
            const div_chap = createElement('div', {class:"section-title"})
            div_chap.appendChild(document.createTextNode("Part in Books or Collections"))
            main_div.appendChild(div_chap)
    
            publications = json["chapitres"]
            for (let i=0; i<publications.length ; i++){
                const div = createElement('div')
                const a = createElement('a',{href : publications[i]["link"], target : "_blank", class : "publication-title"})
                a.appendChild(createElement('i',{class : "fa fa-book"}))
                a.appendChild(document.createTextNode(" " + publications[i]["title"]))
                div.appendChild(a)
                main_div.appendChild(div)
                main_div.appendChild(document.createTextNode(" " + publications[i]["conference"]))
                main_div.appendChild(document.createElement("br"))
                main_div.appendChild(document.createElement("br"))  
            }     
    }); 
}

function createAllLessons(){
    const main_div = document.getElementById("last-lessons-div")
    const headers = {Accept: 'application/json'}
    fetch("../JSON/last-lessons.json", headers)
        .then((response) => response.json())
        .then((json) => {
            const lessons = json["lessons"]

            const grid = createElement('div',{class : 'lessons-grid'})
            main_div.appendChild(grid)

            for (let i=0; i<lessons.length ; i++){
                const single = createElement('div',{class : 'single-lessons'})
                grid.appendChild(single)

                const a = createElement('a',{href:lessons[i]["link"], target: lessons[i]["target"]})
                single.appendChild(a)

                const img = createElement('img',{style:"width: 100%;",src:"../IMG/"+lessons[i]["image"]})
                a.appendChild(img)

                const title = createElement('div',{class:"lesson-title"})
                title.appendChild(document.createTextNode(lessons[i]["title"]))
                a.appendChild(title)

                const level = createElement('div',{class:"lesson-level"})
                level.appendChild(document.createTextNode(lessons[i]["level"]))
                a.appendChild(level)

            }
        });
}

function createLessonsList(){
    const main_div = document.getElementById("all-lessens-list")
    const headers = {Accept: 'application/json'}
    fetch("../../JSON/last-lessons.json", headers)
        .then((response) => response.json())
        .then((json) => {

            const lessons = json["lessons"]
            const ul_e = createElement('ul')
            main_div.appendChild(ul_e)

            for (let i=0; i<lessons.length ; i++){
                const li_e = createElement('li')
                ul_e.appendChild(li_e)

                var a 
                if(lessons[i]["target"].localeCompare("_blank")===0){
                    a = createElement('a',{href: lessons[i]["link"], target: lessons[i]["target"]})
                }
                else {
                    a = createElement('a',{href:"../" + lessons[i]["link"], target: lessons[i]["target"]})
                }

                a.appendChild(document.createTextNode(lessons[i]["title"]))
                li_e.appendChild(a)
            }
    });
}