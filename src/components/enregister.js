import React,{Component} from 'react';
 class Enregistrer extends Component{
    render(){
        return(
            <div className="wrapper">
                <div className="form-wrapper">
                    <h1>Enregistrer</h1>
                    <form onSubmit={this.handleSubmit} noValidate>
                        <div className="firstName">
                            <label htmlFor="firstName">Prénom</label>
                            <input
                             type="text" 
                            className="" 
                            placeholder="Prénom" 
                            name="firstName" novalidate
                             onChange={this.handleChange}/>
                        </div>
                        <div className="lastName">
                            <label htmlFor="lastName">Nom</label>
                            <input
                             type="text" 
                            className="" 
                            placeholder="Nom" 
                            name="lastName" novalidate
                             onChange={this.handleChange}/>
                        <div className="email">
                            <label htmlFor="email">Email</label>
                            <input
                             type="email" 
                            className="" 
                            placeholder="Email" 
                            name="email" novalidate
                             onChange={this.handleChange}/>
                        </div>
                        <div className="password">
                            <label htmlFor="password">Mot de passe</label>
                            <input className=""
                             type="password" 
                            className="" 
                            placeholder="Password" 
                            name="password" novalidate
                             onChange={this.handleChange}/>
                        </div>
                        <div className="loginOk">
                            <button type="submit">Login</button>
                            <small>J'ai un compte?</small>
                        </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
export default Enregistrer;