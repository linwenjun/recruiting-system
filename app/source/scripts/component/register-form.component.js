var React = global.React = require('react');
var $ = require('jquery');
var request = require('superagent');
var validate = require("validate.js");

var containers = {
    email: {
        presence: {message: "^请输入邮箱"},
        email: {message: "^请输入正确邮箱"}
    },
    mobilePhone: {
        presence: {message: '^请输入手机号'},
        format: {
            pattern: /^1[3|4|5|8][0-9]\d{8}$/,
            message: '^请输入正确的手机号'
        }
    }
};

var asyncContainersFunc = {
    email: function() {},
    mobilePhone: function (value, done) {
        return request
            .get('/register/validate-mobile-phone')
            .set('Content-Type', 'application/json')
            .query({
                mobilePhone: value
            })
            .end((err, req) => {
                var error = "";
                if (req.body.status === 200) {
                    error = '该手机号已被注册';
                }
                done({mobilePhoneError: error});
            });
    }
};

function getError(validateInfo, field) {
    if (validateInfo && validateInfo[field] && validateInfo[field].length > 0) {
        return validateInfo[field][0];
    }
    return ""
}

var RegisterForm = React.createClass({

        getInitialState: function () {
            return {
                mobilePhoneError: '',
                emailError: ''
            }
        },

        validate: function (event) {
            var target = event.target;
            var value = target.value;
            var name = target.name;

            var valObj = {};
            valObj[name] = value;

            var result = validate(valObj, containers);
            var error = getError(result, name);
            var stateObj = {};
            stateObj[name + 'Error'] = error;

            this.setState(stateObj);

            if('' === error) {
                asyncContainersFunc[name](value, (stateObj) => {
                    this.setState(stateObj);
                })
            }
        },

        render: function () {

            var classString = "col-md-7 logon-form-container" + (this.props.isLoginState ? ' hide' : '');

            return (
                <div id="register" className={classString}>
                    <h4 className="welcome">欢迎注册思沃学院</h4>

                    <form action="">
                        <div className="form-group">
                            <input className="form-control" type="text" placeholder="请输入手机号" name="mobilePhone"
                                   onBlur={this.validate} />

                            <div
                                className={"lose" + (this.state.mobilePhoneError === '' ? ' hide' : '')}>{this.state.mobilePhoneError}</div>
                        </div>

                        <div className="form-group">
                            <input className="form-control" type="text" placeholder="请输入邮箱" name="email"
                                   onBlur={this.validate}/>
                            <div
                                className={"lose" + (this.state.emailError === '' ? ' hide' : '')}>{this.state.emailError}</div>
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
    })
    ;

module.exports = RegisterForm;