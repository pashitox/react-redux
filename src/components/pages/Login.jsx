import React, { Component } from 'react'




export default class Login extends Component {

  constructor(props) {
    super(props);
    this.app = React.createRef();
  }


 // onClick() {
    
 // this.app.Current.login()

 //esto va dentro del render
 //<button onClick={this.props.onLogIn('Hello world from the child component!')}>Click</button>
      
  //}




	render() {
    console.log(this.props)
		return (
			<article className="Main-container">
				<h1>Sección Login 1</h1>
        <form onSubmit={(event) => {
          event.preventDefault();
        }}>
          <input type="email" placeholder="Email" ref={ email => this.email = email }  />
          <input type="password" placeholder="Password" ref={ password => this.password = password } />
         
          
          
       
         



        </form>

        
			</article>
		)
	}
}


















