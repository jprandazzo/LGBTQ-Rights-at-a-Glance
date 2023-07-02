export default class List {
    constructor(obj, displayStatus) {
        this.obj = obj;

        this.obj.style.display = displayStatus
    //     this.ele.innerHTML = "<h1>It's Alive!!!</h1>";
    //     this.handleClick = this.handleClick.bind(this);

    //     this.ele.addEventListener("click", this.handleClick);
    }
    toggleHide(){
        if (this.style.display === "none") {
          this.style.display = "block";
        } else {
          this.style.display = "none";
        }
    }
}