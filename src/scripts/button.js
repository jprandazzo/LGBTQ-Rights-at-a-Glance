import List from "./list"

export default class Button {
    constructor(obj, text, displayStatus) {
        this.obj = obj;
        this.obj.innerHTML = `<button>${text}</button>`;
        this.obj.style.display = displayStatus
        // debugger
        // this.obj.style.display = "none"
        this.handleClick = this.handleClick.bind(this);
        this.obj.addEventListener("click", this.handleClick);
    }

    toggleHide(){
        if (this.obj.style.display === "none") {
          this.obj.style.display = "block";
        } else {
          this.obj.style.display = "none";
        }
    }

    handleClick() {
        let state_issues_list = new List(document.getElementById('state_issues_list'),"block")
        const issues_list = new List(document.getElementById("issues_list"), 'block')
        state_issues_list.toggleHide()
        back_button.style.display = 'none'

        
        //     debugger
        //     let state_issues_list = document.querySelector('state_issues_list')
        //     while (state_issues_list.obj.firstChild) {
        //         this.obj.removeChild(state_issues_list.obj.firstChild)
        //     }
        //   }
    }
        // let state_issues_list = document.getElementById('state_issues_list')

}