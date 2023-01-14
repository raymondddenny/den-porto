import Head from "next/head";
import IntroMe from "../components/IntroMe";
import Navbar from "../components/Navbar";
import { useState } from "react";
import Footer from "../components/Footer";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Denny Raymond Site</title>
        <meta name="description" content="Welcome to Denny Raymond's Side" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="dark:bg-[#141010] bg-[#EBE6E6] px-10  md:px-20 lg:40 ">
        <section className="min-h-screen ">
          <Navbar
            darkMode={darkMode}
            toggleDarkMode={() => setDarkMode(!darkMode)}
          />

          <IntroMe />
        </section>
        <Footer />
      </main>
    </div>
  );
}
