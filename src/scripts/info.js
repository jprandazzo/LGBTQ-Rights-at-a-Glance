export default class Info {
    constructor(ele) {
        this.ele = ele
        this.ele.style.fontFamily = 'sans-serif';
        this.ele.innerHTML = `<span class='close' id='close1'>X</span><br><p>Thank you for visiting this page! This is a chart showing the status of LGBTQ+ rights throughout the US.
        My goal is to bring awareness to the challenges (and triumphs) queer people have achieved, and will continue to achieve...
        to facilitate open discussions and set the groundwork for further action. All data comes from the HRC.
        </p>
        
        <p><b><u>Instructions</b></u>:</p>
        
        <p>A list of 11 issues is on the right. Click on any issue to see how states score on that particular issue.
        States are color-coded according to their score:
        <ul>
            <li>Red: <0</li>
            <li>Grey: 0 (no data on that issue in that state)</li>
            <li>Light Green: 1-2</li>
            <li>Dark Green: >2</li>
        </ul>
        </p>
        
        <p>To see a state's scores on all issues, click on that state. The issues will pop up in a bar chart on the right.
        The bar charts use the same color-coding system (no bar will appear if the score is 0, i.e. if there is no info
            in that state on that issue).
        
        Click "Clear Selection" to clear and start over at any point.
        </p>
        
        <p>Please visit my links at the top-right to see more about me!<br>
            ~ Joe
        </p>
        
        <span class='close' id='close2'>Continue to Map</span>`

        this.handleClick = this.handleClick.bind(this);
        [...new Set(document.getElementsByClassName("close"))].forEach(el =>el.addEventListener("click", this.handleClick));
    }

    handleClick() {this.ele.setAttribute('class','hidden')}
}


