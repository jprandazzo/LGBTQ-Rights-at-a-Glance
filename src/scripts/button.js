import List from "./list"

export default class Button {
    constructor(obj, text, displayStatus) {
        this.obj = obj;
        this.obj.innerHTML = `${text}`;
        this.obj.setAttribute('class',displayStatus)
        // debugger
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
        // let state_issues_list = new List(document.getElementById('state_issues_list'),"block")
        const issues_list = new List(document.getElementById("issues_list"), 'block')
        // state_issues_list.toggleHide()
        this.greyOut();
        myChart.style.display = 'none'
        document.querySelectorAll('path').forEach(state => state.style.fill = '#f9f9f9')

        
        //     debugger
        //     let state_issues_list = document.querySelector('state_issues_list')
        //     while (state_issues_list.obj.firstChild) {
        //         this.obj.removeChild(state_issues_list.obj.firstChild)
        //     }
        //   }
    }
        // let state_issues_list = document.getElementById('state_issues_list')

}