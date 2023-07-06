import List from './list'
class Title {
    constructor(ele) {
        this.ele = ele;
        this.ele.innerHTML = "<h1>LGBTQ+ Rights Across the US</h1><br><br><p>No Pride For Some of Us Without Liberation For All of Us</h3>";
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

        let github = document.createElement('div')
        github.setAttribute('id','github')
        github.innerHTML = '<a href="https://github.com/jprandazzo" target="_blank"><img src="../src/styles/github-mark.svg"></a>'
        github.style.cssFloat = 'right'

        this.ele.appendChild(github)

        let linkedin = document.createElement('div')
        linkedin.setAttribute('id','linkedin')
        linkedin.innerHTML = '<a href="https://linkedin.com/in/jprandazzo" target="_blank"><img src="../src/styles/LI2.png"></a>'
        linkedin.style.cssFloat = 'right'

        this.ele.appendChild(linkedin)
    }

}

export default Title;