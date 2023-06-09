function createElement(tagName, attributes = {}){
    const element = document.createElement(tagName)
    for (const [attribute, value] of Object.entries(attributes)){
        element.setAttribute(attribute, value)
    }
    return element
}

function getLastPublications(){
    const main_div = document.getElementById("last-publications")

    const headers = {Accept: 'application/json'}
    fetch("./JSON/last-pub.json", headers)
        .then((response) => response.json())
        .then((json) => {
            
            const publications = json["publications"]
            for (let i=0; i<4 ; i++){
                const div = createElement('div')
                const a = createElement('a',{href : publications[i]["link"], target : "_blank", class : "publication-title"})
                a.appendChild(createElement('i',{class : "fa fa-book"}))
                a.appendChild(document.createTextNode(" " + publications[i]["title"]))
                //console.log(publications[i]["title"])
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

getLastPublications()