import React from 'react'
import styles from '../style'
import {stats} from "../constants"
const Stats = () => 
  (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {
        stats.map((stat) =>(
          <div key={stat.id} className={`flex-1 flex flex-row justify-start item-center m-3`}>
            <h4 className='font-poppins font-semibold xs:text-[40px] text-[30px] text-white xs:text-leading-[53px] text-leading-[43px]'>{stat.value}</h4>
            <p className='font-poppins font-normal xs:text-[20px] text-[15px] text-white text-gradient uppercase ml-3 xs:text-leading-[26px] text-leading-[21px]'>{stat.title}</p>
          </div>
        ))
      }
    </section>
  )


export default Stats
