import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Calculator = () => {

    const [a, setA] = useState('');
    const [b, setB] = useState('');
    const [results, setResults] = useState('0');

    let html = (
        <strong>{results}</strong>
    )

    const handleChangeA = (e) => {
        setA(e.target.value);
    }

    const handleChangeB = (e) => {
        setB(e.target.value);
    }

    const cong = () => {
        let result = parseInt(a) + parseInt(b);
        setResults(result);
    }

    const tru = () => {
        let result = parseInt(a) - parseInt(b);
        setResults(result);
    }

    const nhan = () => {
        let result = parseInt(a) * parseInt(b);
        setResults(result);
    }

    const chia = () => {
        if (parseInt(b) !== 0) {
            let result = parseInt(a) / parseInt(b);
        setResults(result);
        } else {
            setResults('Error! Chia cho 0!')
        }
        
    }

    return (
        <div className="row" style={{backgroundColor: 'gray'}}>
            <div className='col-3'></div>
            <form className='col-6' style={{backgroundColor: 'green'}}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">a</label>
                    <input type="number" name="a" onKeyUp={(e) => handleChangeA(e)} className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">b</label>
                    <input type="number" name="b" onKeyUp={(e) => handleChangeB(e)} className="form-control"/>
                </div>
                <button className="btn btn-primary" onClick={() => cong()}>+</button>
                <button className="btn btn-primary" onClick={() => tru()}>-</button>
                <button className="btn btn-primary" onClick={() => nhan()}>x</button>
                <button className="btn btn-primary" onClick={() => chia()}>/</button>
                <p>Result: {html}</p>
            </form>
            <div className='col-3'></div>
        </div>
    )
}

export default Calculator;