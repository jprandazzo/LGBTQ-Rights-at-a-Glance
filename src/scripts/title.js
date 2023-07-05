import List from './list'
class Title {
    constructor(ele) {
        this.ele = ele;
        this.ele.innerHTML = "<h1>LGBTQ+ Issues Across the US</h1>";
        this.ele.style.width = 'auto';
        this.ele.style.height = '100px';
        // this.ele.style.display = 'flex';
        // this.ele.style.justifyContent = 'space-around';
        this.ele.style.padding = '0 0 30 0'
        this.ele.style.textAlign = 'center'
        this.ele.style.fontSize = '26'

        let instructions = document.createElement('span')
        instructions.setAttribute('id','instructions')
        instructions.innerHTML = 'i'
        instructions.style.cssFloat = 'right'

        this.ele.appendChild(instructions)
        
        // let links = new List(document.createElement('ul'), 'inline')
        
        // let instructions = document.createElement('li')
        // instructions.setAttribute('id','instructions')
        // let node = document.createTextNode('i')
        // instructions.appendChild(node)
        // links.obj.appendChild(instructions)
        
        // let github = document.createElement('li')
        // github.setAttribute('id','github')
        // node = document.createTextNode('github')
        // github.appendChild(node)
        // links.obj.appendChild(github)

        // let linkedin = document.createElement('li')
        // linkedin.setAttribute('id','linkedin')
        // node = document.createTextNode('linkedin')
        // linkedin.appendChild(node)
        // links.obj.appendChild(linkedin)

        // this.ele.appendChild(links.obj)
    }

}

export default Title;