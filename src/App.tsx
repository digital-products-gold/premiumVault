import React, { Suspense } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';

// Lazy load below-the-fold components
const ProductShowcase = React.lazy(() => import('./components/ProductShowcase').then(module => ({ default: module.ProductShowcase })));
const ProblemSolution = React.lazy(() => import('./components/ProblemSolution').then(module => ({ default: module.ProblemSolution })));
const ViralGrowthSection = React.lazy(() => import('./components/ViralGrowthSection').then(module => ({ default: module.ViralGrowthSection })));
const ViralReelsCarousel = React.lazy(() => import('./components/ViralReelsCarousel').then(module => ({ default: module.ViralReelsCarousel })));
const CoursesSection = React.lazy(() => import('./components/CoursesSection').then(module => ({ default: module.CoursesSection })));
const ProductVarietySection = React.lazy(() => import('./components/ProductVarietySection').then(module => ({ default: module.ProductVarietySection })));
const ComparisonSection = React.lazy(() => import('./components/ComparisonSection').then(module => ({ default: module.ComparisonSection })));
const SuccessStories = React.lazy(() => import('./components/SuccessStories').then(module => ({ default: module.SuccessStories })));
const BonusProducts = React.lazy(() => import('./components/BonusProducts').then(module => ({ default: module.BonusProducts })));
const PricingSection = React.lazy(() => import('./components/PricingSection').then(module => ({ default: module.PricingSection })));
const ComparisonTable = React.lazy(() => import('./components/ComparisonTable').then(module => ({ default: module.ComparisonTable })));
const SalesChannels = React.lazy(() => import('./components/SalesChannels').then(module => ({ default: module.SalesChannels })));
const InfiniteScroll = React.lazy(() => import('./components/InfiniteScroll').then(module => ({ default: module.InfiniteScroll })));
const FAQ = React.lazy(() => import('./components/FAQ').then(module => ({ default: module.FAQ })));
const Footer = React.lazy(() => import('./components/Footer').then(module => ({ default: module.Footer })));

function App() {
    return (
        <div className="min-h-screen bg-[#020617] text-white">
            <Header />
            <main>
                <Hero />
                <Suspense fallback={<div className="min-h-screen bg-[#030712]" />}>
                    <ProductShowcase />
                    <ProblemSolution />
                    <ComparisonSection />
                    <SuccessStories />
                    <ViralGrowthSection />
                    <ViralReelsCarousel />
                    <CoursesSection />
                    <ProductVarietySection />
                    <BonusProducts />
                    <PricingSection />
                    <ComparisonTable />
                    <SalesChannels />
                    <InfiniteScroll />
                    <FAQ />
                    <Footer />
                </Suspense>
            </main>
        </div>
    )
}

export default App
