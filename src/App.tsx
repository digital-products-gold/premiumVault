import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { ProductShowcase } from './components/ProductShowcase';
import { ComparisonSection } from './components/ComparisonSection';
import { SuccessStories } from './components/SuccessStories';
import { BonusProducts } from './components/BonusProducts';
import { PricingSection } from './components/PricingSection';
import { SalesChannels } from './components/SalesChannels';
import { InfiniteScroll } from './components/InfiniteScroll';

import { FinalCTA } from './components/FinalCTA';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

function App() {
    return (
        <div className="min-h-screen bg-[#030712] text-white">
            <Header />
            <main>
                <Hero />
                <ProductShowcase />
                <ProblemSolution />
                <ComparisonSection />
                <SuccessStories />
                <BonusProducts />
                <PricingSection />
                <SalesChannels />
                <InfiniteScroll />

                <FinalCTA />
                <FAQ />
                <Footer />
            </main>
        </div>
    )
}

export default App
