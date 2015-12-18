var React = global.React = require('react');
var $ = require('jquery');
var request = require('superagent');

function isTelephone(str) {
    var reg = /^1[3|4|5|8][0-9]\d{4,8}$/;
    return reg.test(str) && str.toString().length === 11;
}

var RegisterForm = React.createClass({

    getInitialState: function() {
        return {
            error : ''
        }
    },

    validate: function(event) {
        var error;
        var value = event.target.value;

        if (value === '') {
            error = '请输入手机号';
        } else if (!isTelephone(value)) {
            error = '请输入正确手机号';
        } else {
            error = '';
        }

        this.setState({error: error});

        if (error === '') {
            request.get('/register/validate-mobile-phone')
              .set('Content-Type', 'application/json')
              .query({
                  mobilePhone: value
              })
              .end((err, req) => {
                  if(req.body.status === 200) {
                      error = '该手机号已被注册';
                      this.setState({error: error});
                  }
              });
        }
    },

    render: function () {

        var classString = "col-md-7 logon-form-container" + (this.props.isLoginState ? ' hide' : '');

        return (
            <div id="register" className={classString}>
                <h4 className="welcome">欢迎注册思沃学院</h4>

                <form action="">
                    <div className="form-group">
                        <input className="form-control" type="text" placeholder="请输入手机号" name="mobile-phone" onBlur={this.validate}
                               data-is-mobile-phone-exist="true"/>

                        <div className={"lose" + (this.state.error === '' ? ' hide' : '')}>{this.state.error}</div>
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" placeholder="请输入邮箱" name="email"/>

                        <div className="lose" name="lose-email">请输入邮箱</div>
                        <div className="lose" name="wrong-email">请输入正确邮箱</div>
                        <div className="lose" name="exist-email">该邮箱已被注册</div>
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="password" placeholder="请输入8~16位密码" name="password"
                               id="register-password"/>

                        <div className="lose" name="lose-password">请输入密码</div>
                        <div className="lose" name="wrong-password">请输入8-16位密码</div>
                        <ul className="passport-safely">
                            <li name="danger">弱</li>
                            <li name="general">中</li>
                            <li name="safe">强</li>
                            <li className="toggle">显示密码</li>
                        </ul>
                    </div>

                    <div className="checkbox">
                        <label>
                            <input type="checkbox" className="agree-check"/> 同意
                        </label>
                        <a id="agreement" data-toggle="modal" data-target="#agreementModal">协议</a>
                    </div>


                    <button type="button" id="register-btn" className="btn btn-lg btn-block btn-primary">注册</button>
                </form>
            </div>
        )
    }
});

module.exports = RegisterForm;