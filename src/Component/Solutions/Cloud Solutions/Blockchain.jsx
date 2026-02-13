import React, { useState } from "react";
import ContactCard from "../../Contact/ContactCard";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const Blockchain = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const useCases = [
    {
      title: "1. Cryptocurrencies:",
      content:
        "The most well-known blockchain application is cryptocurrencies like Bitcoin and Ethereum. These digital currencies use blockchain technology to provide secure, decentralized, and transparent transactions.",
    },
    {
      title: "2. Supply Chain Management",
      content:
        "Blockchain can improve supply chain transparency by recording every step of a product’s journey, from manufacturing to distribution. This helps reduce fraud, counterfeiting, and ensures the authenticity of goods",
    },
    {
      title: "3. Healthcare:",
      content:
        "Blockchain can enhance healthcare systems by securely storing and sharing patient records, enabling interoperability between different providers, and ensuring data integrity and privacy.",
    },
    {
      title: "4. Identity Management:",
      content:
        "Blockchain can be used to create self-sovereign identities, where individuals have control over their personal information. This can simplify identity verification processes and reduce the risk of data breaches.",
    },
    {
      title: "5. Voting Systems:",
      content:
        "Blockchain-based voting platforms can enhance the security, transparency, and immutability of the voting process. It can prevent tampering with votes and ensure accurate and auditable results.",
    },
    {
      title: "6. Smart Contracts:",
      content:
        "Smart contracts are self-executing contracts with predefined rules encoded on the blockchain. They automatically enforce contract terms, eliminate intermediaries, and streamline business processes in areas such as finance, real estate, and supply chain management.",
    },
    {
      title: "7. Decentralized Finance (DeFi):",
      content:
        "Blockchain can improve supply chain transparency by recording every step of a product’s journey, from manufacturing to distribution. This helps reduce fraud, counterfeiting, and ensures the authenticity of goods",
    },
    {
      title: "8. Energy Trading:",
      content:
        "Blockchain can facilitate peer-to-peer energy trading, enabling individuals or organizations to buy and sell energy directly, bypassing traditional energy suppliers. This can increase efficiency, lower costs, and promote renewable energy adoption.",
    },
    {
      title: "9. Intellectual Property Management:",
      content:
        "Blockchain can be used to verify and track ownership, licensing, and usage rights of intellectual property, such as patents, copyrights, and trademarks. This helps prevent infringement and ensures proper compensation to creators.",
    },
    {
      title: "10. Gaming and Collectibles:",
      content:
        "Blockchain-based platforms allow the creation and trading of unique digital assets, such as in-game items, virtual real estate, and digital art. Blockchain ensures authenticity, provenance, and ownership of these assets.",
    },
  ];

  const Solutions = [
    {
      title: "1. Consulting Services:",
      content:
        "GlobalXperts offers consulting services to help businesses understand the potential applications of blockchain in their industry. They can assess the company’s existing processes and identify areas where blockchain technology can be integrated to improve efficiency, reduce costs, or enhance transparency.",
    },
    {
      title: "2. Custom Blockchain Development:",
      content:
        "GlobalXperts team develops customized blockchain solutions tailored to the specific needs of their clients. This involves designing and implementing private or permissioned blockchains that enable secure and transparent transactions within a specific network of participants.",
    },
    {
      title: "3. Smart Contract Development:",
      content:
        "GlobalXperts may specialize in creating smart contracts, self-executing agreements that automatically enforce the terms and conditions encoded within them. Smart contracts can streamline business processes, reduce the need for intermediaries, and ensure trust and efficiency in various transactions.",
    },
    {
      title: "4. Integration and Interoperability:",
      content:
        "GlobalXperts can assist businesses in integrating blockchain solutions into their existing systems and infrastructure. They may provide guidance on how to seamlessly connect blockchain networks with legacy systems, ensuring data consistency and interoperability.",
    },
    {
      title: "5. Security and Auditing:",
      content:
        "GlobalXperts has a focus on enhancing the security of blockchain implementations. They can help businesses implement robust security measures to protect against hacks, data breaches, or unauthorized access. Additionally, they may offer auditing services to verify the integrity of blockchain networks and transactions.",
    },
    {
      title: "6. Training and Education:",
      content:
        "GlobalXperts could offer training and educational programs to empower businesses with the knowledge and skills required to adopt and leverage blockchain technology. This involves workshops, seminars, or online courses tailored to different levels of expertise.",
    },
  ];

  return (
    <>
      <Navbar />
      <Helmet>
        <title>Blockchain Solutions</title>
        <meta name="description" content="Blockchain Solutions" />
      </Helmet>

      <div className=" bg-blueCustomColor  w-full">
        <div className="max-w-7xl mx-auto py-20 lg:h-[70vh] 2xl:h-[50vh]">
          <div className="h-auto  flex flex-col items-center lg:flex-row justify-betweenpx-6 lg:px-16">
            <div className="w-full  text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:mt-40 lg:text-5xl font-bold text-white mt-10 lg:mt-20 2xl:mt-20">
                Blockchain Technology
              </h1>
              <div className="px-20 md:px-0 flex flex-col sm:flex-row justify-center lg:justify-start mt-6 lg:mt-10 space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/contact-us"
                  className="bg-greenCustomColor2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="w-full text-center lg:text-left mt-10 lg:mt-20 order-3 lg:order-2 p-4">
              <p className="text-base lg:text-lg text-white max-w-xl mx-auto lg:mx-0 lg:mb-0 leading-relaxed">
                Need dependable support for your applications? Our 24/7 Managed
                Application Support guarantees peak performance across AWS,
                Azure, and Google Cloud, with tailored assistance and scalable
                pricing to enhance your operations and drive business growth!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 px-4 sm:px-6 lg:px-8 mt-16 max-w-7xl mx-auto">
        <div className="2xl:max-w-7xl  2xl:mx-auto flex flex-col lg:flex-row items-center justify-between">
          {/* Text Section */}
          <div className="text-center lg:text-left lg:w-1/2 lg:pr-8">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Blockchain Technology
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              VMware Cloud on AWS offers a compelling blend of familiar VMware
              tools and the vast potential of AWS cloud services. However,
              successfully managing this hybrid environment comes with its own
              set of operational challenges. Here’s a breakdown of some key
              hurdles you might encounter and strategies to navigate them:
            </p>
          </div>
          {/* Image Section */}
          <div className="relative mt-12 lg:mt-0 lg:w-1/2">
            <img
              className="w-full rounded-lg"
              src="https://main-website-images1.s3.ap-south-1.amazonaws.com/solutions/Cloud-Solutions/blockChain.jpeg"
              alt="A man working on a laptop in a server room."
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center">
              {/* Optional additional content */}
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-8 bg-white text-gray-800 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Powerful Features of Blockchain
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-0">
              Access to the shared ledger is permissioned
            </h3>
            <h1 className="border-2 border-l-0 border-blue-700 "></h1>
            <p className="text-gray-900 mt-8">
              Only authenticated parties get access to the ledger and
              permissions are configurable. The benefit is that ledger access
              can be controlled so that only parties that you want to access it
              can do so.
            </p>
            <p className="text-gray-900 mt-2">
              The shared ledger is replicated and distributed; every
              permissioned participant gets a copy of the same ledger. The
              benefit is the increased transparency of information.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-0">
              Immutable transaction chains
            </h3>
            <h1 className="border-2 border-l-0 border-blue-700 "></h1>

            <p className="text-gray-900 mt-8">
              Sets of transactions are grouped up into blocks and the blocks are
              then written to the ledger.
            </p>
            <p className="text-gray-900 mt-2">
              Each block also holds the hash value of the previous block,
              creating a linked chain of blocks that can’t be changed.
            </p>
            <p className="text-gray-900 mt-2">
              This enables assets to be traced back to their origin through
              every update stored in the transaction record and linked by the
              chain, thus the transactions are immutable.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">
              Transactions are encrypted
            </h3>
            <p className="text-gray-700">
              Only those parties with separately provided security certificates
              can un-encrypt transactions.
            </p>
            <p className="text-gray-700 mt-2">
              This means that transaction details remain secure and unreadable
              to all but the transaction’s explicit stakeholders.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">
              Network verified transaction
            </h3>
            <p className="text-gray-700">
              Participants in the business network agree that the shared ledger
              is the single source of truth or System of Record, which brings
              the benefit of fewer disputes about discrepancies in records of
              transaction details between parties.
            </p>
          </div>
        </div>
      </div>

      <div className="p-8 bg-white text-gray-800 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">
          Possible Blockchain Use Case Summary
        </h2>
        <p className="mb-6">
          There are numerous blockchain solutions being developed and
          implemented across various industries. GlobalXperts has internal
          resources and external partners that can tackle any of your Blockchain
          needs. Here are a few examples:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-4 cursor-pointer"
              onClick={() => toggleIndex(index)}
            >
              <div className="flex justify-between items-center">
                <h3
                  className={`text-lg font-semibold ${
                    openIndex === index ? "text-purple-600" : "text-gray-800"
                  }`}
                >
                  {useCase.title}
                </h3>
                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="mt-2 text-gray-700">{useCase.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className=" p-8 bg-white text-gray-800 max-w-7xl mx-auto mt-12">
        <h1 className="text-4xl font-bold text-black mb-4  text-center ">
          Customer Enablement
        </h1>
        <p className="mb-6 mt-8 text-xl font-semibold">
          GlobalXperts Blockchain Solutions aims to leverage the technology to
          enhance efficiency and competitiveness in the marketplace. Here are
          some ways a company might use Blockchain Solutions to achieve your
          goals:
        </p>
        <ol className="list-none list-inside space-y-4">
          {Solutions.map((Solutions, index) => (
            <li key={index} className="mt-8">
              <h2 className="text-lg font-semibold">{Solutions.title}</h2>
              <p className="text-gray-700">{Solutions.content}</p>
            </li>
          ))}
        </ol>
        <h1 className="text-xl font-bold text-black mb-4  text-center mt-12">
          By enlisting our company to provide blockchain solutions can help
          businesses become more efficient and competitive in the marketplace.
        </h1>
      </div>

      <div className="mt-8">
        <ContactCard />
      </div>
      <div className="mt-8">
        <Footer />
      </div>
    </>
  );
};

export default Blockchain;
