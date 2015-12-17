var React = global.React = require('react');

var LoginForm = React.createClass({
    render: function () {
        return (
            <div id="logon" className="col-md-7 logon-form-container">
                <h4 className="welcome">欢迎登陆思沃学院</h4>
                <div className="lose" name="login-failed">用户名或密码错误</div>
                <form action="">
                    <div className="form-group">
                        <input className="form-control" type="text" placeholder="请输入邮箱" name="phone-email"/>
                        <div className="lose" name="lose-phone-email">请输入邮箱</div>
                        <div className="lose" name="wrong-phone-email">请输入正确的形式</div>
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="password" placeholder="请输入密码" name="login-password"/>
                        <div className="lose" name="lose-login-password">请输入密码</div>
                        <div className="lose" name="wrong-login-password">密码错误</div>
                    </div>
                    <button type="button" id="login-btn" className="btn btn-lg btn-block btn-primary">登陆</button>
                </form>
            </div>
        )
    }
});

module.exports = LoginForm;