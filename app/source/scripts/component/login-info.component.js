var React = require('react');

var LoginInfo = React.createClass({

    toggleState: function() {
        this.props.onStateChange();
    },

    render: function () {
        return (
            <div id="login-info" className="col-md-5 register-form-right">
                <div id="register-right" className="link">
                    {this.props.isLoginState ? '还没账号?' : '已有账号?'}
                    <a id="change-to-logon" href="javascript:void(0)" onClick={this.toggleState}>
                        {this.props.isLoginState ? '立即注册' : '立即登录'}
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


