/**
 * Created by seal on 2/11/18.
 */

import React from 'react'
import User from 'service/user-service.jsx'

const _user = new User()

import MUtil from 'util/mm.jsx'

const _mm = new MUtil()

import './index.scss'

export default class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            redirect: _mm.getUrlParam('redirect') || '/'
        }
    }
    componentWillMount() {
        document.title = '登录 - SEALSHOP ADMIN'
    }
    onInputChange(e) {
        let inputValue = e.target.value
        let inputName = e.target.name
        this.setState({
            [inputName]: inputValue
        })
    }
    onInputKeyUp(e) {
        if (e.keyCode === 13) {
            this.onSubmit()
        }
    }
    onSubmit(e) {
        let loginInfo = {
            username: this.state.username,
            password: this.state.password
        },
            checkResult = _user.checkLoginInfo(loginInfo)
        //验证通过
        if (checkResult.status === true) {
            _user.login(loginInfo).then((res) => {
                _mm.setStorage('userInfo', res)
                this.props.history.push(this.state.redirect)
            }, (errMsg) => {
                _mm.errorTips(errMsg)
            })
        }
        //验证失败
        else {
            _mm.errorTips(checkResult.msg)
        }
    }
    render() {
        return (
                <div className="col-md-4 col-md-offset-4">
                    <div className="panel panel-default login-panel">
                        <div className="panel-heading">欢迎登录 - SEALSHOP管理系统</div>
                        <div className="panel-body">
                            <div>
                                <div className="form-group">
                                    <input type="text"
                                           name="username"
                                           className="form-control"
                                           placeholder="admin"
                                           onKeyUp={e => this.onInputKeyUp(e)}
                                           onChange={e => this.onInputChange(e)}
                                    />
                                </div>
                                <div className="form-group">
                                    <input type="password"
                                           name="password"
                                           className="form-control"
                                           placeholder="admin"
                                           onKeyUp={e => this.onInputKeyUp(e)}
                                           onChange={e => this.onInputChange(e)}
                                    />
                                </div>
                                <button className="btn btn-lg btn-primary btn-block"
                                        onClick={e => this.onSubmit(e)}
                                >登录</button>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}