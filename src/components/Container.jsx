import Calculation from "./Calculation"
import ButtonAriea from "./ButtonAriea"
function Container({Btn,item,handle}){
    return <>
   <div className="container">
    <div className="row d-flex justify-content-center mt-5">
        <div className="col-sm-12 col-lg-4 col-md-6" >
            <div className="card border-4 border-success shadow-lg p-3 mb-5 bg-white rounded">
                <div className="card-body">
                    <Calculation item={item}></Calculation>
                    <ButtonAriea Btn={Btn} handle={handle}></ButtonAriea>
                </div>
            </div>
        </div>
    </div>
</div>

    </>
}
export default Container