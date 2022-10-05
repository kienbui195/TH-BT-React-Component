import React, { useState } from 'react';

const Calculator = () => {
    
    const [value, setValue] = useState({
        a: '',
        b: ''
    });

    let [results, setResults] = useState('');

    let html = (
        <strong>{results}</strong>
    )

    const handleChange = (e) => {
        setValue({ ...value,[e.target.name]: e.target.value })
        
        // if (field === 'a') {
        //     setValue({...value, a:e.target.value});
        // } else {
        //     setValue({...value, b:e.target.value});
        // }
    }
    console.log(value);
    const result = (ope) => {
        let res = eval(value.a + ope + value.b);
        setResults(res);
    }

    return (
        <div className="row" style={{backgroundColor: 'gray'}}>
            <div className='col-3'></div>
            <div className='col-6' style={{backgroundColor: 'green'}}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">a</label>
                    <input type="number" name="a" onKeyUp={(e) => handleChange(e)}  className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">b</label>
                    <input type="number" name="b" onKeyUp={(e) => handleChange(e)}   className="form-control"/>
                </div>
                <button className="btn btn-primary" onClick={() => result('+')}>+</button>
                <button className="btn btn-primary" onClick={() => result('-')}>-</button>
                <button className="btn btn-primary" onClick={() => result('*')}>x</button>
                <button className="btn btn-primary" onClick={() => result('/')}>/</button>
                <p>Result: {html}</p>
            </div>
            <div className='col-3'></div>
        </div>
    )
}

export default Calculator;