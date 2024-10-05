function Calculation({item})
{
    return <>
    <div className="contian">
        <div className="row d-flex justify-content-center">
            <div className="col-12" >
                <div className="card border-3 border-danger" style={{height:"100px"}}>
                    <div className="card-body fs-2 fw-bold">
                    {item}
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
}
export default Calculation