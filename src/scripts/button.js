import List from "./list"

export default class Button {
    constructor(obj, text, displayStatus) {
        this.obj = obj;
        this.obj.innerHTML = `${text}`;
        this.obj.setAttribute('class',displayStatus)
        this.obj.style.display = "inline"
        this.handleClick = this.handleClick.bind(this);
        this.obj.addEventListener("click", this.handleClick);
    }

    greyOut() {
        this.obj.removeEventListener("click",this.handleClick)
        this.obj.setAttribute('class','greyedOut')
    }

    setActive() {
        this.obj.addEventListener("click", this.handleClick);
        this.obj.setAttribute('class','normal')
    }

    handleClick() {
        const issues_list = new List(document.getElementById("issues_list"), 'block')
        this.greyOut();
        myChart.style.display = 'none'
        document.querySelectorAll('path').forEach(state => state.style.fill = '#f9f9f9')
    }

}
