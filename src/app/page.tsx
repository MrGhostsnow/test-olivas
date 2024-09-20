"use client";
import Head from "next/head";
import Header from "../app/components/Header";
import SEOSection from "../app/components/SEOSection";
import BlogSection from "../app/components/BlogSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import PerformaceSection from "./components/PerformaceSection";
import TopPage from "./components/TopPage";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Teste de Desenvolvimento Front-end | Olivas Digital</title>
        <meta
          name="description"
          content="Teste para Front-end utilizando Next.js e React"
        />
        <meta
          property="og:title"
          content="Teste de Desenvolvimento Front-end | Olivas Digital"
        />
        <meta
          property="og:description"
          content="Aumente sua performance com SEO!"
        />
        <meta property="og:type" content="website" />
      </Head>
      <Header />
      <main>
        <TopPage />
        <SEOSection />
        <PerformaceSection />
        <BlogSection />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
