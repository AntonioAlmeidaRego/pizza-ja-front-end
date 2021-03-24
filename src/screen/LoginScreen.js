import React from "react";
import {FaPizzaSlice} from 'react-icons/fa'
import Header from "../lib/src/components/Header";
import Input from "../lib/src/components/Input";

export default function LoginScreen() {
    return (
        <>
            <Header className={""}>
                <section className="material-half-bg">
                    <div className="cover"/>
                </section>
                <section className="login-content">
                    <div className="logo">
                        <h1>Pizza Já <FaPizzaSlice /> </h1>
                    </div>
                    <div className="login-box">
                        <form className="login-form" action="index.html">
                            <h3 className="login-head"><i className="fa fa-lg fa-fw fa-user" />SIGN IN</h3>
                            <div className="form-group">
                                <label className="control-label">USERNAME</label>
                                <Input className="form-control" type="text" placeholder="Email" autoFocus />
                            </div>
                            <div className="form-group">
                                <label className="control-label">PASSWORD</label>
                                <Input className="form-control" type="password" placeholder="Password"/>
                            </div>
                            <div className="form-group">
                                <div className="utility">
                                    <div className="animated-checkbox">
                                        <label>
                                            <input type="checkbox" />
                                                <span className="label-text">Stay Signed in</span>
                                        </label>
                                    </div>
                                    <p className="semibold-text mb-2">
                                        <a href="#">Forgot Password?</a>
                                    </p>
                                </div>
                            </div>
                            <div className="form-group btn-container">
                                <button className="btn btn-primary btn-block"><i
                                    className="fa fa-sign-in fa-lg fa-fw"/>SIGN IN
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </Header>
        </>
    )
}
