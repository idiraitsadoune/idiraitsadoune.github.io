function createElement(tagName, attributes = {}){
    const element = document.createElement(tagName)
    for (const [attribute, value] of Object.entries(attributes)){
        element.setAttribute(attribute, value)
    }
    return element
}

const main_div = document.getElementById("all-publications")
const headers = {Accept: 'application/json'}

fetch("../JSON/publications.json", headers)
    .then((response) => response.json())
    .then((json) => {
        
        const div_revue = createElement('div', {class:"section-title"})
        div_revue.appendChild(document.createTextNode("Articles dans des journaux"))
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
        div_conf.appendChild(document.createTextNode("Articles dans des conférences"))
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
        div_chap.appendChild(document.createTextNode("Chapitres dans des ouvrages"))
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