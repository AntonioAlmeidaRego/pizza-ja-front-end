import React, {useState, useEffect} from "react";
import { FiAlertTriangle, FiCheckCircle} from "react-icons/fi";
import {MdVisibility, MdVisibilityOff} from 'react-icons/md';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import Item from "./Item";
import Right from "./Right";
import AddIconField from "./AddIconField";
import Left from "./Left";
import Row from "./Row";


export default function Input({type, value, right, left, top, bottom, required, onAction, className, iconClose, placeholder, getValue, nameRequired}) {
    // useState
    const [getRequired, setRequired] = useState(false);
    const [secure, setSecure] = useState(type === 'password' ? true : false);
    const [typeInput, setType] = useState(type)
    const [iconVisible, setIconVisible] = useState(false);
    const [val, setVal] = useState(value);

    // useEffect
    useEffect( ()=>{
        if(getValue !== undefined && val !== undefined){
            getValue(val);
        }
    }, [val]);

    useEffect(()=>{
        if(onAction !== undefined){
            if(onAction.value){
                if(val === ""){
                    setRequired(true)
                }else{
                    setRequired(false);
                }
            }
        }
    }, [onAction])


    function onChangeInput(e){
        setIconVisible(true)
        setVal(e.target.value);
        if(val !== ""){
            setRequired(false);
        }else{
            setRequired(true)
        }
    }

    function onFocusInput() {
        if(val === ""){
            setRequired(true)
        }else{
            setRequired(false);
        }
    }

   function onStyles(){
        if(getRequired){
            return {borderColor:  '#ff5555',
                paddingRight: right ? '100px' : null,
                paddingLeft: left ? '112px' : null,
                borderWidth: 2,
            }
        }
        else if(!getRequired && val !== ""){
            return {borderColor: 'rgb(102,186,139)',
                paddingRight: right ? '100px' : null,
                paddingLeft: left ? '112px' : null,
                borderWidth: 2,
            }
        }

    }

    function onClose() {
        setIconVisible(false);
        setVal("");
    }

    function onType(value) {
        setType(value);
    }


    return (
        <Item>
            <input
                className={className !== undefined ? className : "form-control"}
                style={required !== undefined ? onStyles() : null}
                type={typeInput}
                required={required}
                onFocus={onFocusInput}
                onKeyUp={onChangeInput}
                onChange={onChangeInput}
                placeholder={placeholder}
                value={val}
            />
            {(required !== undefined) && (!getRequired && right && val !== "") &&(
                <Right>
                    <AddIconField right>
                        <Row>
                            <FiCheckCircle style={{color: 'rgb(102,186,139)', marginTop: 5,}}/>
                            <div style={{paddingLeft: 5}}></div>
                            <p style={{color: 'rgb(102,186,139)'}}>Preenchido</p>
                        </Row>
                    </AddIconField>
                </Right>
            )}
            {(required !== undefined) && (!getRequired && left && val !== "") &&(
                <Left>
                    <AddIconField left>
                        <Row>
                            <FiCheckCircle style={{color: 'rgb(102,186,139)', marginTop: 5,}}/>
                            <div style={{paddingLeft: 5}}></div>
                            <p style={{color: 'rgb(102,186,139)'}}>Preenchido</p>
                        </Row>
                    </AddIconField>
                </Left>
            )}
            {(required !== undefined) && (!getRequired && bottom && val !== "") &&(
                <>
                    <Left>
                        <AddIconField bottom>
                            <Row>
                                <FiCheckCircle style={{color: 'rgb(102,186,139)', marginTop: 5,}}/>
                                <div style={{paddingLeft: 5}}></div>
                                <p style={{color: 'rgb(102,186,139)'}}>Preenchido</p>
                            </Row>
                        </AddIconField>
                    </Left>
                    <br />
                </>
            )}
            {(required !== undefined) && (getRequired && right) &&(
                <Right>
                    <AddIconField right>
                        <Row>
                            <FiAlertTriangle style={{color: '#ff5555', marginTop: 5,}}/>
                            <div style={{paddingLeft: 5}}></div>
                            <p style={{color: '#ff5555'}}>{nameRequired !== undefined ? nameRequired : 'Obrigatório!'}</p>
                        </Row>
                    </AddIconField>
                </Right>
            )}
            {(required !== undefined) && (getRequired && left) &&(
                <Left>
                    <AddIconField left>
                        <Row>
                            <FiAlertTriangle style={{color: '#ff5555', marginTop: 5,}}/>
                            <div style={{paddingLeft: 5}}></div>
                            <p style={{color: '#ff5555'}}>{nameRequired !== undefined ? nameRequired : 'Obrigatório!'}</p>
                        </Row>
                    </AddIconField>
                </Left>
            )}
            {(required !== undefined) && (getRequired && top) &&(
                <Left>
                    <AddIconField top>
                        <Row>
                            <FiAlertTriangle style={{color: '#ff5555', marginTop: 5,}}/>
                            <div style={{paddingLeft: 5}}></div>
                            <p style={{color: '#ff5555'}}>{nameRequired !== undefined ? nameRequired : 'Obrigatório!'}</p>
                        </Row>
                    </AddIconField>
                </Left>
            )}
            {(required !== undefined) && (getRequired && bottom) &&(
                <>
                    <Left>
                        <AddIconField bottom>
                            <Row>
                                <FiAlertTriangle style={{color: '#ff5555', marginTop: 5,}}/>
                                <div style={{paddingLeft: 5}}></div>
                                <p style={{color: '#ff5555'}}>{nameRequired !== undefined ? nameRequired : 'Obrigatório!'}</p>
                            </Row>
                        </AddIconField>
                    </Left>
                    <br />
                </>
            )}
            {iconClose !== undefined && iconVisible &&(
                <>
                    <Right>
                        <AddIconField right>
                            <AiOutlineCloseCircle onClick={ () => onClose()} style={{color: '#686767',}}/>
                        </AddIconField>
                    </Right>
                </>
            )}
            {secure && (
                <Right>
                    <AddIconField right>
                        <Row>
                            {typeInput === "password" && (
                                <>
                                    <MdVisibilityOff onClick={() => setType("text")} style={{color: '#686767', marginTop: 5,}}/>
                                    &nbsp;
                                </>
                            )}
                            {typeInput === "text" &&(
                                <>
                                    <MdVisibility onClick={() => setType("password")} style={{color: '#686767', marginTop: 5,}}/>
                                    &nbsp;
                                </>
                            )}
                        </Row>
                    </AddIconField>
                </Right>
            )}
        </Item>
    )
}
