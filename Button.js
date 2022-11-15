import { Component } from "./Component/Component.js";

export class Button extends Component {
    
    onClick() {
        this.dispatch(this.props.eventtype)
    }
    
    componentDidMount() {
        this.addEventListener('click', this.onClick)
    }
    
    componentWillUnmount() {
        this.removeEventListener('click', this.onClick)
    }
    
    static get observedAttributes () {
        return ['eventtype', 'content']
    }
    
    render() {
        return `
        <button type="button" class="btn btn-info">${this.props.content}</button>
        `
    }
}

customElements.define('my-button', Button)