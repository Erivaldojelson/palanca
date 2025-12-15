import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <section className="container text-center my-5">
        <h1 className="luxury-title">Surpreenda-se</h1>
        <p className="luxury-text">
          Na coleção Nosso & Palanca, tradição e sofisticação encontram-se.
        </p>
      </section>
      <Products />
      <Footer />
    </>
  );
}
