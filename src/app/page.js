import AccordionInfo from '@/components/AccordionInfo'
import Hero from '@/components/Hero'
import TabRegister from '@/components/TabRegister'

export const metadata = {
  alternates: {
    canonical: '/',
  },
}

export default function Home() {
  return (
    <div className="bg-[var(--atlas-paper)]">
      <Hero />
      <AccordionInfo />
      <TabRegister />
    </div>
  )
}
