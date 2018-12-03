import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Example extends Component {

    constructor(props){
      // takes from the prior constructor and does whatever it does.
        super(props)
        
          console.log(props)

          this.state =  {theSecretWord: "Coolboy55"}
          // above in every super
    }




    render(){
        return(
            <div>
                <h1> Welcome </h1>

                <p>
                      this is example component
                </p>

              <p>
                this is thing in state: {this.state.theSecretWord}
              </p>

              <button onClick = { this.props.changeUserNameInParentComponent('uncoolBoy78')} } >
              {/* get used to above syntax, {()=>{this.aboveFunction()}} */}
                click me to change to coolgirl77
              </button>
{/* // you can run a function from another component. */}
{/* // most time component gets props usually, is NOT in current file. what other component am I rendering the current component in? go child to parent. in this case, example is the CHILD of main the PARENT. */}
{/* //PROPS WILL ALWAYS be in the parent component of a child component. */}

            </div>
        )

    }

}


// lifecycle methods = render is part of lifecycle. every component there is a render function. it runs twice.
// order: componentWillMount then
          // then render
          // then componentDidMount
          // componentDidMount using the most.

// everytime props or state change - anytime state changes, render and then run DidMount again.

// component does not manage its own props, DOES manage its own state.







export default Example;