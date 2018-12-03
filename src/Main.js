import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Example from './Example.js';

class Main extends Component {
      constructor(props){
        super(props)
          this.state = {
            username: 'Coolboy55',
            password: 'BusinessWolf'
          }

      }
        
        changeUserName(newUserName){
          this.setState({username: 'newUserName'})
        }




      render(){
        return(

              <div>

                  Hi

                  <Example
                    theUserName = {this.state.username}
                    thePassword = {this.state.password}
                    changeUserNameInParentComponent = {this.changeUserName.bind(this)} >
                    you bind the prop to the function, pass this into the ().
                    </Example>

              </div>
        )
      }




xport default App;