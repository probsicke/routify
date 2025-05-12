import Hero from '../components/Hero/Hero'
import { Features } from '../components/Features/Features'
import { Pricing } from '../components/Pricing/Pricing'
import { Footer } from '../components/Footer/Footer'

export const Home: React.FC = () => (
  <>
    <Hero />
    <Features />
    <Pricing />
    <Footer />
  </>
)
