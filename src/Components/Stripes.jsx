import React from 'react'
import Stripe from './Stripe'

const Stripes = () => {

    var data = [
        {url:"https://www.iconpacks.net/icons/2/free-behance-icon-2161-thumb.png" , number: 48},
        {url:"https://w7.pngwing.com/pngs/496/1001/png-transparent-fiverr-logo-freelancer-company-sales-gigs-miscellaneous-company-text.png" , number: 2},
        {url:"https://brandeps.com/logo-download/F/FWA-logo-vector-01.svg" , number: 11},
        {url:"https://www.iconpacks.net/icons/2/free-behance-icon-2161-thumb.png" , number: 48},
        {url:"https://w7.pngwing.com/pngs/496/1001/png-transparent-fiverr-logo-freelancer-company-sales-gigs-miscellaneous-company-text.png" , number: 2},
        {url:"https://brandeps.com/logo-download/F/FWA-logo-vector-01.svg" , number: 11},
    ]
  return (
    <div className=' flex items-center mt-6'  >
       {data.map((elem , index)=>(
        <Stripe key={index} val={elem} />
       ))}
    </div>
  )
}

export default Stripes
