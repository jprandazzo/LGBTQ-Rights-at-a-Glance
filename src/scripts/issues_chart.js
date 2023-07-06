export default class Chart {
    constructor(obj) {
        this.obj = obj.node;
        this.name = obj.node.name;
        this.states = obj.node.states;
}
