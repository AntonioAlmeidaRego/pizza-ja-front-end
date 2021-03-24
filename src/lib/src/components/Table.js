import React, {useState, useEffect} from "react";
import {AiOutlineArrowUp, AiOutlineArrowDown} from 'react-icons/ai';
import Text from "./Text";
import Left from "./Left";
import Input from "./Input";
import Row from "./Row";

export default function Table({bodys, headers, footers, className, empty, autoEditionTable}){
    const [values, setValues] = useState([]);
    const [body, setBody] = useState(bodys);
    const [array, setArray] = useState([]);

    function creatHeader() {
        const tr = React.createElement("tr", null, []);

        for(let i = 0; i < headers.length; i++){
            const th = React.createElement("th", {key: headers[i].key !== undefined ? headers[i].key : Math.fround(1 + Math.random() % 1000) }, [<Row key={Math.fround(1 + Math.random() % 1000)}>
                <Text upper value={headers[i].value}/>
                <AiOutlineArrowUp onClick={onOrderCresc} />
                <AiOutlineArrowDown />
            </Row>])
            tr.props.children.push(th);
        }
        return tr;
    }

    useEffect(()=>{
        body.map(array =>
            push(array)
        )
    }, []);

    function push(array) {
        const arrayAux = [];
        for(let i = 0; i < array.length; i++){
            arrayAux.push(array[i]);
        }
        values.push(arrayAux);
        setValues(values);
    }

    function creatBody(array) {
        const tr = React.createElement("tr", {key: Math.fround(1 + Math.random() % 1000)}, []);
        for(let i = 0; i < array.length; i++){
           const td = React.createElement("td", {key: array[i].key !== undefined ? array[i].key : Math.fround(1 + Math.random() % 1000),
               onKeyUp: event =>  keyUp(event, array[i].value, tr, td), onClick: autoEditionTable !== undefined ? event => autoEdition(event, tr, td, array[i], i) : null}, <Text key={i} value={array[i].value} />);
           tr.props.children.push(td);
        }
        return tr;
    }

    function autoEdition(event, tr, td, value, col) {
        const tbody = document.getElementById("tbody").children;
        for(let i = 0; i < tbody.length; i++){
            if(event.target.parentElement === tbody.item(i)){
                value = values[i][col].value;
            }else{
                if(event.target.parentElement.parentElement === tbody.item(i)){
                    value = values[i][col].value;
                }
            }
        }
        if(!isNotRepetion(array, value)){
            array.push(value);
            const input = document.createElement("input");
            input.value = value;
            input.setAttribute('class', 'form-control');
            event.target.innerHTML = "";
            event.target.appendChild(input);
        }
    }

    function keyUp(event, value, tr, td) {
        if(event.key.toString().toUpperCase() === "enter".toUpperCase()){
            const tbody = document.getElementById("tbody").children;
            const p = event.target.parentElement;
            const valueOF = p.children.item(0).value;
            p.children.item(0).remove();
            p.innerText = valueOF;
            const children = tr.props.children;
            const arrayChidren = [];
            let j = 0;
            let k = 0;
            for(let i = 0; i < tbody.length; i++){
                if(p.parentElement === tbody.item(i)){
                    k = i;
                    break;
                }else{
                    if(p.parentElement.parentElement === tbody.item(i)){
                       k = i;
                       break;
                    }
                }
            }
            for(let i = 0; i < children.length; i++){
                if(td === children[i]){
                    j = i;
                    setBody(body);
                    arrayChidren.push({value: valueOF});
                }else{
                    arrayChidren.push({value: children[i].props.children.props.text});
                }
                array.splice(i, 1);
            }
            values[k][j] = {value: valueOF};
            setArray(array);
            body[k] = arrayChidren;
            setBody(body);
            setValues(values);
            console.log(values[k]);
        }
    }

    function isNotRepetion(array, item) {
        if(array.length === 0){
            return false;
        }
        for(let i = 0; i < array.length; i++){
            if(array[i] === item){
                return true;
            }
        }
        return false;
    }

    function onCreatSearch(val) {
        const arrayAux = [];
        for(let i = 0; i < values.length; i++){
            for(let j = 0; j < values[i].length; j++){
                if(values[i][j].value.substring(0, val.length).toUpperCase() === val.toString().toUpperCase()){
                    if(!isNotRepetion(arrayAux, values[i])){
                        arrayAux.push(values[i])
                    }
                }
            }
        }
        setBody(arrayAux);
    }

    function onOrderCresc(event){
        let j = 0;
        const theads = document.getElementById("thead");
        for(let i = 0; i < theads.children.item(0).children.length; i++){
            if(theads.children.item(0).children.item(i) === event.target.parentElement.parentElement){
                j = i;
                break;
            }
        }

    }

    return(
        <>
            <Left>
                <div><Input type={'text'} getValue={onCreatSearch} iconClose placeholder="Buscar" className="form-control"/></div>
            </Left>
            <table className={className}>
                <thead id={"thead"}>
                    {creatHeader()}
                </thead>
                <tbody id={"tbody"}>
                    {Array.isArray(body) &&
                    [
                        body.length > 0 &&
                        body.map(array =>
                            creatBody(array)
                        ),
                        body.length === 0 &&
                        (
                            <tr key={Math.fround(1 + Math.random() % 1000)}>
                                <td>{empty}</td>
                            </tr>
                        )
                    ]
                    }
                    {!Array.isArray(body) &&
                        console.error("informe um Array no atributo bodys")
                    }
                </tbody>
            </table>
        </>
    )
}
