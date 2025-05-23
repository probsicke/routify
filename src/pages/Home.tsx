import Hero from '../components/Hero/Hero'
import Frame from '../components/Frame/Frame'
import { FeatureSection } from '../components/Features/FeatureSection';
import { Pricing } from '../components/Pricing/Pricing'
import { Footer } from '../components/Footer/Footer'

export const Home: React.FC = () => (
  <>
    <Hero />
    <Frame src="/public/weekview.png" />
    <FeatureSection />
    <Pricing />
    <Footer />
  </>
)
