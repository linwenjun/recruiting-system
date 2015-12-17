var React = require('react');

var LoginInfo = React.createClass({

    getInitialState: function() {
        return {
            isLoginState: false
        }
    },

    toggleState: function() {
        var newState = !this.state.isLoginState;
        this.setState({isLoginState: newState});
    },

    render: function () {
        return (
            <div id="login-info" className="col-md-5 register-form-right">

                <div id="register-right" className="link">
                    {this.state.isLoginState ? '还没账号?' : '已有账号?'}
                    <a id="change-to-logon" href="javascript:void(0)" onClick={this.toggleState}>
                        {this.state.isLoginState ? '立即注册' : '立即登录'}
                    </a>
                </div>

                <div className="third-party">
                    <div className="title">合作方账号登录</div>
                    <ul className="third-party-entry">
                        <li className="qq"><a href="#"></a></li>
                        <li className="weibo"><a href="#"></a></li>
                        <li className="weixin"><a href="#"></a></li>
                        <li className="other"><a href="#"></a></li>
                    </ul>
                </div>
            </div>
        )
    }
});

module.exports = LoginInfo;


