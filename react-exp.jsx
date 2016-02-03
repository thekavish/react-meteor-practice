if (Meteor.isClient) {
    Avatar = React.createClass({
      render() {
        return (
          <div>
            <ProfilePic username={this.props.username} />
            <br/>
            <ProfileLink username={this.props.username} />
          </div>
        );
      }
    });

    var ProfilePic = React.createClass({
      render() {
        return (
          <img src={'https://graph.facebook.com/' + this.props.username + '/picture'} />
        );
      }
    });

    var ProfileLink = React.createClass({
      render() {
        return (
          <a href={'https://www.facebook.com/' + this.props.username}>{this.props.username}</a>
        );
      }
    });
    
    Meteor.startup(function() {
        ReactDOM.render(<Avatar username="thekavish" />, document.getElementById('composite-example') );
    });
}

if (Meteor.isServer) {
    Meteor.startup(function() {
        // code to run on server at startup
    });
}
