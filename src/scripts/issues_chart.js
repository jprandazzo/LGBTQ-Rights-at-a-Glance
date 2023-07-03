export default class Chart {
    constructor(obj) {
        this.obj = obj.node;
        this.name = obj.node.name;
        this.states = obj.node.states;
    //     this.ele.innerHTML = "<h1>It's Alive!!!</h1>";
    //     this.handleClick = this.handleClick.bind(this);

    //     this.ele.addEventListener("click", this.handleClick);
    }

    // handleClick() {
    //     this.ele.children[0].innerText = "Ouch!"
    // }
}