import React, {useState} from "react";
import {FaPizzaSlice} from 'react-icons/fa'
import {VscSignIn} from 'react-icons/vsc'
import Header from "../lib/src/components/Header";
import Input from "../lib/src/components/Input";
import Text from "../lib/src/components/Text";

export default function LoginScreen() {
    const [action, setAction] = useState(false)

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
                                <label className="control-label text-uppercase">Email</label>
                                <Input getValue={() => {}} right onAction={action} className="form-control" type="text" placeholder="Email" autoFocus />
                            </div>
                            <div className="form-group">
                                <label className="control-label text-uppercase">Senha</label>
                                <Input className="form-control" type="password" placeholder="Password"/>
                            </div>
                            <div className="form-group btn-container">
                                <button className="btn btn-primary btn-block">
                                    <VscSignIn size={30} />Entrar
                                </button>
                            </div>
                            <br />
                            <div className="form-group">
                                <div className="utility">
                                    <label>
                                        <a href="#" className="label-text">Cadastrar-se?</a>
                                    </label>
                                    <Text value="ou"/>
                                    <p className="semibold-text mb-2">
                                        <a href="#">Esqueceu a senha?</a>
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </Header>
        </>
    )
}
