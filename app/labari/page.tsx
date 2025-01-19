"use client";

import { useState } from "react";
import Image from "next/image";
import EntryCard from "@/components/entrycard";

export default function Labari() {
  const [activeTab, setActiveTab] = useState("2024");

  return (
    <>
      <div id="top" className="bg-gray-50 font-lato mt-12">
        {/* Header Section */}
        <header className="bg-footer text-white text-center py-16">
          <h1 className="text-4xl md:text-5xl font-gothic">
            Labari Prize for Poetry 2024
          </h1>
          <p className="mt-4 text-lg md:text-xl italic">
            Theme:{" "}
            <span className="font-semibold">Mindscapes of the North</span>
          </p>
        </header>
      </div>

      <div className="w-full px-8 py-7 md:px-20 md:pb-28">
        {/* Tabs Section */}
        <div className="w-full px-8 py-7 md:px-20 md:pb-28">
          <div className="flex justify-center space-x-6 mb-8">
            <button
              onClick={() => setActiveTab("2024")}
              className={`px-5 md:px-6 py-2 font-gothic text-xs md:text-lg rounded ${
                activeTab === "2024"
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              2024
            </button>
            <button
              onClick={() => setActiveTab("2023")}
              className={`px-5 md:px-6 py-2 font-gothic text-xs md:text-lg rounded ${
                activeTab === "2023"
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              2023
            </button>
          </div>

          {/* Shortlisted Entries 2023 */}
          {activeTab === "2023" && (
            <div>
              <h1 className="w-full p-4 font-gothic text-3xl md:text-6xl text-black text-center">
                Shortlisted Entries 2023
              </h1>
              <div className="w-full flex items-center justify-center py-12">
                <a href="/labari/entry?year=2023&id=1">
                  <Image
                    className="w-full md:w-96"
                    src="/Frame 38556.png"
                    width={660}
                    height={430}
                    quality={100}
                    alt="line-image"
                  />
                </a>
              </div>
              <div className="flex flex-wrap gap-8 w-full justify-evenly items-start py-12">
                <a href="/labari/entry?year=2023&id=2">
                  <Image
                    className="w-full md:w-96"
                    src="/Frame 38555.png"
                    width={660}
                    height={430}
                    quality={100}
                    alt="line-image"
                  />
                </a>
                <a href="/labari/entry?year=2023&id=3">
                  <Image
                    className="w-full md:w-96"
                    src="/Frame 38557.png"
                    width={660}
                    height={430}
                    quality={100}
                    alt="line-image"
                  />
                </a>
                <a href="/labari/entry?year=2023&id=4">
                  <Image
                    className="w-full md:w-96"
                    src="/Frame 38554.png"
                    width={660}
                    height={430}
                    quality={100}
                    alt="line-image"
                  />
                </a>
                <a href="/labari/entry?year=2023&id=5">
                  <Image
                    className="w-full md:w-96"
                    src="/Frame 38558.png"
                    width={660}
                    height={430}
                    quality={100}
                    alt="line-image"
                  />
                </a>
              </div>
            </div>
          )}

          {/* Shortlisted Entries 2024 */}
          {activeTab === "2024" && (
            <div>
              <h1 className="w-full p-4 font-gothic text-3xl md:text-6xl text-black text-center">
                Shortlisted Entries 2024
              </h1>
              <div className="w-full flex items-center justify-center py-12">
                <EntryCard
                  isWinner={true}
                  author={"Ridwan Fasai"}
                  title={"A small act of kindness"}
                  year={2024}
                  id={1}
                  image={"/avatar.png"}
                />
              </div>
              <div className="flex flex-wrap gap-8 w-full justify-evenly items-start py-12">
                <EntryCard
                  isWinner={false}
                  author={"Timi Sanni"}
                  title={
                    "An interview with a survivor of the Zamfara bomb blast"
                  }
                  year={2024}
                  id={2}
                  image={"/avatar.png"}
                />
                <EntryCard
                  isWinner={false}
                  author={"Adamu Yahuza Abdullahi"}
                  title={"Blood Sonnet"}
                  year={2024}
                  id={3}
                  image={"/avatar.png"}
                />
                <EntryCard
                  isWinner={false}
                  author={"Pacella Chukwuma Eke"}
                  title={"Hawking Grace"}
                  year={2024}
                  id={4}
                  image={"/avatar.png"}
                />
                <EntryCard
                  isWinner={false}
                  author={"Abdulbaseet Yusuff"}
                  title={"Mutunci"}
                  year={2024}
                  id={5}
                  image={"/avatar.png"}
                />
                <EntryCard
                  isWinner={false}
                  author={"Musa Abduljallal"}
                  title={"Pandemonium"}
                  year={2024}
                  id={6}
                  image={"/avatar.png"}
                />
                <EntryCard
                  isWinner={false}
                  author={"Shafaatu Mohammed"}
                  title={"The Glowing Sun of the North"}
                  year={2024}
                  id={7}
                  image={"/avatar.png"}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="bg-gray-50 font-lato mt-12">
        {/* Hero Image Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 px-6 lg:px-20">
          <div className="relative">
            <img
              src="submit.jpeg"
              alt="Poetry visual"
              className="rounded-lg shadow-lg"
            />
            <p className="text-sm text-smallColor mt-2 italic text-center">
              Photo: Northern Landscape
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-3xl font-gothic text-faintBlack text-center">
              Judges
            </h2>
            <div className="flex items-center justify-center gap-4 mt-6">
              <p className="rounded-full shadow-md bg-notify w-[20px] h-[20px]"></p>
              <p className="rounded-full shadow-md bg-primary w-[20px] h-[20px]"></p>
              <p className="rounded-full shadow-md bg-smallColor w-[20px] h-[20px]"></p>
              <p className="rounded-full shadow-md bg-footer w-[20px] h-[20px]"></p>
            </div>
            <p className="text-sm text-smallColor mt-4 text-center">
              Zaynab Iliyasu Bobi, Moyosola Olowokure, and Abdul Razaq
            </p>
          </div>
          <div className="relative">
            <img
              src="submit-1.jpeg"
              alt="Poetry visual"
              className="rounded-lg shadow-lg"
            />
            <p className="text-sm text-smallColor mt-2 italic text-center">
              Photo: Judges
            </p>
          </div>
        </section>

        {/* Content Section */}
        <main className="px-6 lg:px-20 mt-16">
          {/* Theme Overview */}
          <section className="mb-12">
            <h2 className="text-2xl font-gothic text-faintBlack mb-4">
              Theme Overview
            </h2>
            <p className="text-lg text-smallColor leading-8">
              We’re calling on Arewa poets or poets curious about northern
              Nigeria and its rich tapestry of culture. Amidst the backdrop of
              pervasive insecurity, inflation, and pressing social issues in
              northern Nigeria and the country at large, this theme explores
              three contexts — psychological, creative, and cultural.
            </p>
            <p className="mt-4 text-lg text-smallColor leading-8">
              <span className="font-semibold">"Mindscapes of the North"</span>{" "}
              invites us to reveal the complex layers of thoughts, emotions, and
              lived experiences of Arewa. It encourages poets to explore the
              collective cultural identity shaped by shared beliefs,
              experiences, and ideologies.
            </p>
          </section>

          {/* Submission Guidelines */}
          <section className="mb-12">
            <h2 className="text-2xl font-gothic text-faintBlack mb-4">
              Submission Guidelines
            </h2>
            <div className="bg-secondary p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-faintBlack">
                Eligibility:
              </h3>
              <ul className="list-disc list-inside text-smallColor mt-2">
                <li>Open to poets of Nigerian and African descent.</li>
                <li>Submissions can be in English or Hausa.</li>
                <li>
                  Both emerging and established poets are encouraged to apply.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-faintBlack mt-6">
                Submission Details:
              </h3>
              <ul className="list-disc list-inside text-smallColor mt-2">
                <li>Each poet may submit up to 1 poem.</li>
                <li>
                  Submissions must be original and unpublished. Works that have
                  appeared in personal blogs or small publications are
                  acceptable but must not have been submitted for other prizes.
                </li>
                <li>
                  Submit your poems in PDF or Word Document format. Each poem
                  should be typed, double-spaced, and include the title (but not
                  the poet’s name to ensure anonymity).
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-faintBlack mt-6">
                Theme:
              </h3>
              <ul className="list-disc list-inside text-smallColor mt-2">
                <li>
                  The 2024 theme is Mindscapes of the North. Poems must reflect
                  or engage with the theme in creative and meaningful ways.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-faintBlack mt-6">
                Submission Period:
              </h3>
              <p className="text-smallColor mt-2">
                Submissions open on <strong>20th November, 2024</strong> and
                close on <strong>20th December, 2024</strong>. Late entries will
                not be accepted.
              </p>

              <h3 className="text-xl font-semibold text-faintBlack mt-6">
                How to Submit:
              </h3>
              <p className="text-smallColor mt-2">
                Submit your work to{" "}
                <a
                  href="mailto:artsxvibes@gmail.com"
                  className="text-primary underline"
                >
                  artsxvibes@gmail.com
                </a>
                . Include your name, contact information, and a brief biography
                (max 100 words) in the body of the email.
              </p>
            </div>
          </section>

          {/* Prize Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-gothic text-faintBlack mb-4">
              Prize and Recognition
            </h2>
            <p className="text-lg text-smallColor">
              Prize:{" "}
              <span className="font-semibold">N200,000 (winner takes all)</span>
            </p>
            <p className="text-lg text-smallColor mt-2">
              Shortlisted poets will have their work featured on our platforms.
            </p>
          </section>

          {/* Judging Process */}
          <section className="mb-12">
            <h2 className="text-2xl font-gothic text-faintBlack mb-4">
              Judging Process
            </h2>
            <p className="text-lg text-smallColor">
              Submissions will be judged anonymously by a panel of esteemed
              poets and literary professionals:
            </p>
            <ul className="list-disc list-inside text-smallColor mt-4">
              <li>Zaynab Iliyasu Bobi</li>
              <li>Moyosola Olowokure</li>
              <li>Abdul Razaq</li>
            </ul>
            <p className="text-lg text-smallColor">
              Entries will be evaluated based on originality, thematic
              relevance, creativity, and technical excellence.
            </p>
            <p className="text-lg text-smallColor">
              The judges’ decisions are final and binding.
            </p>
          </section>

          {/* Terms and Conditions */}
          <section className="mb-12">
            <h2 className="text-2xl font-gothic text-faintBlack mb-4">
              Terms and Conditions
            </h2>
            <ul className="list-disc list-inside text-smallColor">
              <li>
                By submitting, the poet agrees that their work is original and
                not under consideration for any other prize during the
                submission period.
              </li>
              <li>
                Copyright remains with the poet. However, Labari Prize reserves
                the right to publish winning and shortlisted poems in its
                official anthology, website, or promotional materials, with
                proper credit given to the poet.
              </li>
              <li>
                Labari Prize is not responsible for plagiarism claims. Any work
                found to be plagiarized will be disqualified, and prizes will be
                revoked.
              </li>
              <li>
                The Labari Prize may cancel or modify the competition in
                exceptional circumstances, with notice provided to participants.
              </li>
            </ul>
          </section>
        </main>
      </div>

      <div className="w-full flex items-start justify-end py-5 pr-11 md:py-10 md:pr-24">
        <a href="#top">
          <Image
            className="cursor-pointer w-10 md:w-14"
            src="/Frame 179.png"
            width={56}
            height={56}
            quality={100}
            alt="top-image"
          />
        </a>
      </div>
    </>
  );
}
