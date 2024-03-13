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
    <div className="container rounded-3 p-5 m-5 bg-secondary h-100">
      
      <div className="row">

          <div className="col-12 mt-4 col-lg-4"><CARD data={ data.cards[0] } feature={data.features}/></div>
{/* 
          <div className="col-12 mt-4 col-lg-4"><CARD data={ data.cards[1]} feature={data.features}/></div>
          <div className="col-12 mt-4  col-lg-4"><CARD data={ data.cards[2]} feature={data.features}/></div> */}

      </div>
      
    </div>

  );


}

export default App;