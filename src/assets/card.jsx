const CARD=(props)=>{

    return(
        <div className="card rounded-4 p-4">
            <div className="card-header text-center">
                <p className="text-muted"><strong>{props.data.type}</strong></p>
                <h2>{props.data.cost}</h2>
            </div>

            <div className="card-body text-nowrap">
                
                {
                props.feature.map((feature)=>{

                
                    return (

                        (props.data.features.includes(feature)?
                        <li className="pt-3"><b>&#x2713;</b>  {feature}</li>
                        :<li className="text-muted pt-3"><b>&#x2717;</b> {feature}</li>)
                                     
                        );
                    
                })
                }
                 </div>
            
            <div className="card-footer">
                    <button className="btn btn-primary w-100 rounded-5 h-50" type="button">Button</button>
                </div>
        </div>
    )




}

export default CARD;