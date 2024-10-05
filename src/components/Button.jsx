function Button({ButtonName,handle}){
    
    return <>
        <div className="col-4 mt-2">
            <div className="card">
               
            <button className="btn btn-success" onClick={()=>handle(ButtonName)}>{ButtonName}</button>
            </div>
        </div>
     
    </>
}
export default Button