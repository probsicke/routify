import Hero from '../components/Hero/Hero'
import Frame from '../components/Frame/Frame'
import { FeatureSection } from '../components/Features/FeatureSection';
import { PlanSection } from '../components/PlanSection/PlanSection'
import { Footer } from '../components/Footer/Footer'

export const Home: React.FC = () => (
  <>
    <Hero />
    <Frame src="/public/weekview.png" />
    <FeatureSection />
    <PlanSection />
    <Footer />
  </>
)
