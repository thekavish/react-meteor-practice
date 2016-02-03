if (Meteor.isClient) {
    App = React.createClass({
        render() {
            return ( 
                <div className="ui container">
                    <h3>Welcome, {this.props.name}!</h3>
                    <h4>Your email address is {this.props.email}</h4>
                </div>
            );
        }
    });
    Meteor.startup(function() {
        ReactDOM.render( <App name='Kavish' email='kavish619@gmail.com'/> , document.getElementById("render-target"));
    });
}

if (Meteor.isServer) {
    Meteor.startup(function() {
        // code to run on server at startup
    });
}
