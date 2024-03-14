import { Button } from "bootstrap";

function text(x,y){
    return (x.features.includes(y)?
    <h5 className="pt-3"><b>&#x2713;</b>  {y}</h5>
    :<h5 className="text-muted pt-3"><b>&#x2717;</b> {y}</h5>)
}

const CARD=(props)=>{

    

    return(
        <div className="card rounded-4 p-4">
            <div className="card-header text-center">
                <p className="text-muted"><strong>{props.data.type}</strong></p>
                <h2>{props.data.cost}</h2>
            </div>
            <div className="card-body text-nowrap p-4">
                {
                props.feature.map((feature,index)=>{

                    return (
                        text(props.data,feature)
                            
                        );
                        
                })

                }
                <div className="card-footer">
                    <button className="btn btn-primary w-100 rounded-5 h-50" type="button">Button</button>
                </div>
                
                
            </div>
        </div>
    )




}

export default CARD;