export default class Issue {
    constructor(obj) {
        this.id = obj.node.id;
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