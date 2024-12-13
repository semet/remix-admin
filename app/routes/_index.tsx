import { Header, HeroSection } from '~/layouts/landing'

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <HeroSection />
      <div className="h-[300vh]"></div>
    </div>
  )
}

export default Home
