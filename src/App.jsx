import CARD from './assets/card'

const App=()=>{

  let data={
    features: [
      'Single User',
      '5GB Storage',
      'Unlimited Public Projects',
      'Community Access',
      'Unlimited Private Projects',
      'Dedicated Phone Support',
      'Free Subdomain',
      'Monthly Status Reports'
    ],
    cards: [
      {
        type: 'FREE',
        cost: '$ 0/month',
        features: [
          'Single User',
          '5GB Storage',
          'Unlimited Public Projects',
          'Community Access',
        ]
      },
      {
        type: 'PLUS',
        cost: '$ 9/month',
        features: [
          'Single User',
          '5GB Storage',
          'Unlimited Public Projects',
          'Community Access',
          'Unlimited Private Projects',
          'Dedicated Phone Support',
          'Free Subdomain',
        ]
      },
      {
        type: 'PRO',
        cost: '$ 49/month',
        features: [
          'Single User',
          '5GB Storage',
          'Unlimited Public Projects',
          'Community Access',
          'Unlimited Private Projects',
          'Dedicated Phone Support',
          'Free Subdomain',
          'Monthly Status Reports'
        ]
      }
    ]}

    return (
      <div className="container rounded-3 mt-5 p-4 bg-primary">
        
        <div className="row">

    {
              
                data.cards.map((card,index)=>{
                  
                  
                    return <div className="col-12 col-lg-4">
                        <CARD key={index} data={card} feature={data.features}/>
                  </div>
                })
              
              
           }   
            
           
  
        </div>
        
      </div>
  
    )

}

export default App;