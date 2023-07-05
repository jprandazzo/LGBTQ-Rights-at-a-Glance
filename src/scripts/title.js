class Title {
    constructor(ele) {
        this.ele = ele;
        this.ele.innerHTML = "<h1>LGBTQ+ Issues Across the US</h1>";
        this.ele.style.width = 'auto';
        this.ele.style.height = '100px';
        this.ele.style.display = 'flex';
        this.ele.style.justifyContent = 'space-around';
        this.ele.style.padding = '0 0 30 0'
        this.ele.style.textAlign = 'center'
        this.ele.style.fontSize = '26'
        // this.handleClick = this.handleClick.bind(this);

        // this.ele.addEventListener("click", this.handleClick);
    }

    // handleClick() {
    //     this.ele.children[0].innerText = "Ouch!"
    // }
}

export default Title;