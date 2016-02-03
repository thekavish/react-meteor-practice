if (Meteor.isClient) {
    App = React.createClass({
        render() {
            return ( 
                <div className="ui container">
                <p>Hello, <input type="text" placeholder="Your name here" />!It is {this.props.date.toTimeString()}</p>
                </div>
            );
        }
    });

    Meteor.startup(function() {
        setInterval(function() {
            ReactDOM.render(
                <App date={new Date()} />,document.getElementById('render-target')
            );
        }, 1000);
    });
}

if (Meteor.isServer) {
    Meteor.startup(function() {
        // code to run on server at startup
    });
}
