import List from "./list"

export default class Button {
    constructor(obj, text) {
        this.obj = obj;
        this.obj.innerHTML = `<button>${text}</button>`;
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
        // document.querySelectorAll('path').forEach(state =>{
        //     if (state.style.display === 'none') {
        //         state.style.display = ''
        //     } else {
        //         state.style.display = 'none'
        //     }
        //     debugger
        //     console.log('click')
        // });

        // state_issues_list.clearList()
        
        //     debugger
        //     let state_issues_list = document.querySelector('state_issues_list')
        //     while (state_issues_list.obj.firstChild) {
        //         this.obj.removeChild(state_issues_list.obj.firstChild)
        //     }
        //   }
    }
        // let state_issues_list = document.getElementById('state_issues_list')

}