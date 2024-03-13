import React from 'react'
import styles from './style'
import { Navbar, Hero , Business , Billing ,Client , CTA , Footer , CardDeal ,Stats , Testimonial} from './component'
export default function App() {
  return (
    <div className="bg-[#00040f] w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-[#00040f] ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-[#00040f] ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonial/>
        <Client />
        <CTA />
        <Footer />
        </div>
      </div>
    </div>
  )
}
