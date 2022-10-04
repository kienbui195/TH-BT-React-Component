let AlertComponent = (props) => {
    return (
        <div className='alert alert-danger' role='alert'>
            <strong>Warning! </strong>{props.alert}
        </div>
    )
}

export default AlertComponent;