import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import VerdictBanner from '@/components/VerdictBanner'
import LogoMarquee from '../components/LogoMarquee'
import AmandaBanner from '@/components/AmandaBanner'
import SettlementsCarousel from '@/components/SettlementsCarousel'
import FeaturedOnTV from '@/components/FeaturedOnTV'

export default function Home() {
  return (
    <>
      <Header />
      <VerdictBanner />
      {/* <Navbar /> */}
      <Hero />
      <LogoMarquee />
      <AmandaBanner />
      <SettlementsCarousel />
      <FeaturedOnTV/>
    </>
  )
}