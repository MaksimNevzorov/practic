import { Component } from "./Component/Component.js";
import './Button.js'

export class App extends Component {
    constructor() {
        super();
        this.state = {
            count: 1,
            desc: "qwe",
        }
    }
        
    increaseCount(){
        this.setState((state) =>{
            return {
                ...state,
                count: this.state.count + 1,
            }
        })
    }
    
    decreaseCount(){
        this.setState((state) =>{
            return {
                ...state,
                count: this.state.count - 1,
            }
        })
    }    
    
    componentDidMount(){
        this.addEventListener('increase', this.increaseCount)
        this.addEventListener('decrease', this.decreaseCount)
    }    
    
    componentWillUnmount(){
        this.removeEventListener('increase', this.increaseCount)
        this.removeEventListener('decrease', this.decreaseCount)
    }
    
    static get observedAttributes () {
        return ['title-content']
    }
    
    
    render() {
        return `
        <my-button eventtype="increase" content="+"></my-button>
        <span>${this.state.count}</span>
        <my-button eventtype="decrease" content="-"></my-button>
        `
    }
}

customElements.define('my-app', App)