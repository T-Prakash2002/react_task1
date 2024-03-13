
const CARD=(props)=>{

    return(
        <div className="card rounded-4">
            <div className="card-header text-center">
                <p>{props.data.type}</p>
                <h1>{props.data.cost}</h1>
            </div>
            <div className="card-body text-nowrap p-5">

            props.feature.map((generaldata){
                  props.data.features.map((carddata)=>{
                   if(generaldata==carddata){
                       symbol="✔";console.log(symbol)
                   }else{
                       symbol="✘";
                  }

                  
                 })
              });
                

                {/* <h5>{props.data.features[0]}</h5>
                <h5>{props.data.features[1]}</h5>
                <h5>{props.data.features[2]}</h5>
                <h5>{props.data.features[3]}</h5>
                <h5>{props.data.features[4]}</h5>
                <h5>{props.data.features[5]}</h5>
                <h5>{props.data.features[6]}</h5>
                <h5>{props.data.features[7]}</h5> */}


            </div>
        </div>
    )

}

export default CARD;