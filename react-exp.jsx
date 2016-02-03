if (Meteor.isClient) {
    LikeButton = React.createClass({
        getInitialState() {
            return {liked: true};
        },
        handleClick(event) {
            this.setState({liked: !this.state.liked});
        },
        render() {
            var text = this.state.liked ? 'liked' : 'haven\'t liked';
            return ( <p onClick={this.handleClick}> You {text} this. Click to toggle. < /p> );
        }
    });

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
                <App date={new Date()} />,document.getElementById('render-target'));}, 1000);
        ReactDOM.render(
            <LikeButton /> ,document.getElementById('like-example')
        );
    });
}

if (Meteor.isServer) {
    Meteor.startup(function() {
        // code to run on server at startup
    });
}
