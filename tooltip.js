class Tooltip extends HTMLElement {
    constructor() {
        super();
        this._tooltipContainer;
        console.log("It is working");

    }

    connectedCallback() {
        const tooltipIcon = document.createElement('span');
        tooltipIcon.textContent = '(?)';
        tooltipIcon.addEventListener('mouseenter', this._showTollTip.bind(this));
        tooltipIcon.addEventListener('mouseleave', this._hideTollTip.bind(this));
        this.appendChild(tooltipIcon);
    }

    _showTollTip() {
        this._tooltipContainer = document.createElement('div');
        this._tooltipContainer.textContent = 'This is tooltip';
        this.appendChild(this._tooltipContainer);
    }

    _hideTollTip() {
        this.removeChild(this._tooltipContainer);
    }
}

customElements.define('ns-tooltip', Tooltip);
