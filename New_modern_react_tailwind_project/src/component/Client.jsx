import React, { useState } from 'react'
import { clients } from '../constants'
import styles from '../style'
const client = () => {
  const [active, SetActive] = useState('')
  return (

    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} w-full flex-wrap `}>
        {
          clients.map((client) => (
            <div key={client.id} className={`flex-1 sm:min-w-[192px] min-w-[120px] ${styles.flexCenter} relative`}>
              <img
                src={client.logo}
                alt="client-logo"
                className={`sm:w-[192px] w-[100px] object-contain opacity-50 hover:opacity-100`}
              />
              
            </div>
          ))
        }
      </div>
    </section>
  )
}




export default client
