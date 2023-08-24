import React from 'react'
import './Hello.css'

class Hello extends React.Component {
    render () { 
        return ( 
        <div className= 'f1 tc'>
        <h1>Hello World</h1>
        <h1>{this.props.greeting}</h1>
        </div>
        )
    }
}
export default Hello;