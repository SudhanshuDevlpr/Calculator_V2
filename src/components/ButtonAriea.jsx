import Button from "./Button"
function ButtonAriea({Btn,handle}){
    return <>
     <div className="contian">
        <div className="row d-flex justify-content-center mt-2">
            <div className="col-12" >
                <div className="card border-3 border-danger" style={{height:"320px"}}>
                    <div className="card-body">
                    <div className="container">
                    <div className="row d-flex justify-content-center mt-2">
                    {
                        Btn.map((item)=>(
                            <Button ButtonName={item} handle={handle}></Button>
                        ))
                    }
                     </div>
                     </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
}
export default ButtonAriea