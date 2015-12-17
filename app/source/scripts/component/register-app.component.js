var React = require('react');
var ReactDom = require('react-dom');

var RegisterForm = require('./register-form.component');
var LoginForm = require('./login-form.component');
var LoginInfo = require('./login-info.component');

var RegisterApp = React.createClass({
    render: function() {
        return (
            <div className="row">
                <RegisterForm />
                <LoginForm />
                <LoginInfo />
            </div>
        )
    }
});

module.exports = RegisterApp;