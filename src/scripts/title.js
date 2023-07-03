class Title {
    constructor(ele) {
        this.ele = ele;
        this.ele.innerHTML = "<h1>Status of LGBTQ+ <br>Issues by State</h1>";
        this.ele.style.width = '500px';
        this.ele.style.height = '200px';
        this.ele.style.display = 'flex';
        this.ele.style.margin = '0 auto';
        this.ele.style.textAlign = 'center'
        this.ele.style.fontSize = '30'
        this.handleClick = this.handleClick.bind(this);

        this.ele.addEventListener("click", this.handleClick);
    }

    handleClick() {
        this.ele.children[0].innerText = "Ouch!"
    }
}

export default Title;