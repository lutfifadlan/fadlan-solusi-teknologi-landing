import Head from 'next/head';

export default function Home() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      <Head>
        <title>PT Fadlan Solusi Teknologi</title>
        <meta name="description" content="PT Fadlan Solusi Teknologi - Building technology solutions for the future." />
      </Head>

      <header className="bg-gray-800 text-white py-6 shadow-md">
        <div className="container mx-auto flex justify-center items-center px-6">
          <h1 className="text-3xl font-bold">PT Fadlan Solusi Teknologi</h1>
        </div>
      </header>

      <main className="container mx-auto p-6">
        <section className="my-3 text-center">
          <h2 className="text-3xl font-bold text-white">About the Founder</h2>
          <p className="mt-4 text-lg text-gray-300">
            Hi, I&apos;m Mochamad Lutfi Fadlan, the founder of PT Fadlan Solusi Teknologi. With almost 8 years of experience as a software engineer and 6 years as a tech leader, I have built and managed complex applications and engineering teams. My journey includes significant contributions at Xendit and Vida, where I led projects that handled millions of transactions and scaled engineering teams effectively.
          </p>
        </section>

        <section className="my-12 text-center bg-gray-800 shadow-lg rounded-lg p-6">
          <h2 className="text-3xl font-bold text-white">Latest Application</h2>
          <div className="mt-4">
            <a href="https://goldofolio.vercel.app/" target="_blank" className="hover:underline text-xl">
              Goldofolio - An Antam Gold Portfolio Tracker
            </a>
            <p className="mt-2 text-lg text-gray-300">
              Goldofolio helps users track their physical gold portfolios effortlessly. It offers an intuitive dashboard to visualize and manage their gold investments.
            </p>
          </div>
        </section>

        <section className="my-12 text-center">
          <h2 className="text-3xl font-bold text-white">Experience</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 shadow-md rounded-md">
              <h3 className="text-xl font-semibold text-white">Engineering Manager - Vida</h3>
              <p className="text-gray-300">Developed, maintained, & scaled digital signature, digital stamp, and sign platform products. Led team’s roadmap delivery
              along with managing engineers & QA and solving clients issues & escalations. Contributed to 20% of company’s revenue</p>
            </div>
            <div className="bg-gray-800 p-6 shadow-md rounded-md">
              <h3 className="text-xl font-semibold text-white">Staff Software Engineer - Cashboard</h3>
              <p className="text-gray-300">Automated finance reporting from multiple accounting sources for customers. Designed, built, and deployed backend web application & infrastructure from scratch</p>
            </div>
            <div className="bg-gray-800 p-6 shadow-md rounded-md">
              <h3 className="text-xl font-semibold text-white">Engineering Manager - Xendit</h3>
              <p className="text-gray-300">Managed payments team which offered reliable & scalable services to power Xendit’s cash & bank-based money-in (Virtual
Account and Retail Outlet) and served hundred of customers with total millions of transactions count and hundreds of
millions dollars transactions volume. Achieved all time high TPV. Contributed to 40% of company’s revenue</p>
            </div>
            <div className="bg-gray-800 p-6 shadow-md rounded-md">
              <h3 className="text-xl font-semibold text-white">Technical Lead - Xendit</h3>
              <p className="text-gray-300">Led Billing team to designed & built billing system from the ground up, enabled product fees management, automated
              monthly billing statement generation for customers, and automated monthly transaction reports for investors. Enabled merchant to rotate and manage API keys independently from the merchant dashboard</p>
            </div>
          </div>
        </section>

        <section className="my-12 text-center">
          <h2 className="text-3xl font-bold text-white">Contact</h2>
          <div className="mt-4">
            <p className="text-lg text-gray-300">Mochamad Lutfi Fadlan</p>
            <p className="text-lg text-gray-300">+6282117494258</p>
            <p className="text-lg text-gray-300">mochamadlutfifadlan@gmail.com</p>
            <p className="text-lg text-gray-300">Bavaria Residence 10/8, Babakan, Tangerang, Banten, Indonesia</p>
            <p className="text-lg">
              <a href="https://www.linkedin.com/in/lutfifadlan/" target="_blank" className="hover:underline">
                LinkedIn Profile
              </a>
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-6 text-center shadow-md">
        <p>&copy; 2024 PT Fadlan Solusi Teknologi. All rights reserved.</p>
      </footer>
    </div>
  );
}
