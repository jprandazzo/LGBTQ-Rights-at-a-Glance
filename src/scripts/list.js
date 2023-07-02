export default class List {
    constructor(obj, displayStatus) {
        this.obj = obj;

        this.obj.style.display = displayStatus
    //     this.ele.innerHTML = "<h1>It's Alive!!!</h1>";
        this.clearList = this.clearList.bind(this);

    //     this.ele.addEventListener("click", this.handleClick);
    }
    toggleHide(){
        if (this.obj.style.display === "none") {
          this.obj.style.display = "block";
        } else {
          this.obj.style.display = "none";
        }
    }

    appendChild(childNode) {
      this.obj.appendChild(childNode)
    }

    clearList() {
      while (this.obj.firstChild) {
          this.obj.removeChild(this.obj.firstChild)
      }
    }
}