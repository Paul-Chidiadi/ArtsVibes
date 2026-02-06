"use client";

import { useState } from "react";
import Image from "next/image";
import EntryCard from "@/components/entrycard";
import { entry2023, entry2024, entry2025 } from "@/lib/data";

export default function Labari() {
  const [activeTab, setActiveTab] = useState("2025");

  return (
    <>
      <div id="top" className="bg-gray-50 font-lato mt-12">
        {/* Header Section */}
        <header className="bg-footer text-white text-center py-16">
          <h1 className="text-4xl md:text-5xl font-gothic">
            Labari Prize for Poetry 2025
          </h1>
          <p className="mt-4 text-lg md:text-xl italic">
            Theme:{" "}
            <span className="font-semibold">Who are we?</span>
          </p>
        </header>
      </div>

    

      <div className="bg-gray-50 font-lato  pb-10">
        {/* Hero Image Section */}
        <section className=" max-w-md mx-auto flex items-center justify-center  pt-10 px-6 lg:px-20">
          <div className="relative">
            <img
              src="who-we-are.jpeg"
              alt="Who are we?"
              className="rounded-lg shadow-lg"
            />
            <p className="text-sm text-smallColor mt-2 italic text-center">
              Photo: Who are we?
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
            This year, the <b>Labari Prize for Poetry</b> invites writers to reflect on the question <i>“Who are we?”</i> A call to explore the many layers of our shared and shifting identities as Northerners, Nigerians, and Africans living within a postcolonial reality.
            </p>
            <br />
            <p className="text-lg text-smallColor leading-8">
In asking <i>who we are</i>, we look beyond the surface of nationality, tribe, or religion. We turn our gaze inward, toward the histories that shape us, the languages that hold our memories, and the contradictions that define our becoming. The theme calls for poems that wrestle with belonging and estrangement, with the weight of inherited names, and the beauty of our evolving selves.
</p>
<br />
<p className="text-lg text-smallColor leading-8">
We encourage poets to think of identity not as a fixed answer but as a living question. In this space, poetry becomes both mirror and bridge: reflecting who we have been, and imagining who we might yet become.
</p>
          </section>

          {/* Judges Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-gothic text-faintBlack mb-4">
              Meet the Judges
            </h2>
            <p className="text-lg text-smallColor leading-8 mb-8">
              Our 2025 panel brings together poets, editors, and educators whose work shapes the contemporary literary landscape. Each judge offers a distinct perspective on the theme and the craft of poetry.
            </p>
            <div className="grid gap-8 md:grid-cols-3">
              <article className="bg-secondary/40 p-6 rounded-lg shadow-md">
                <Image
                  src="/judges/1.jpeg"
                  alt="Portrait of Hauwa Saleh Abubakar"
                  width={420}
                  height={550}
                  className="w-full h-64 object-cover object-[center_30%] rounded-md"
                />
                <h3 className="text-xl font-gothic text-faintBlack mt-6">
                  Hauwa Saleh Abubakar
                </h3>
                <p className="text-base text-smallColor leading-7 mt-4">
                Hauwa Saleh Abubakar is a Nigerian writer, poet and journalist. Her work has appeared in Lolwe, Ake Review, The Weight of Years: An Afroanthology of Creative Nonfiction, Agbowo , Punocracy and more. She has an upcoming poetry chapbook in the 2025 New Generation African Poetry Chapbook Series titled “Undone”
<br/><br/>Hauwa is the founder of an organic tea brand Maimah’s Cup of Wonders and is currently a journalist with HumAngle Media. She considers herself an accidental lawyer and aims to make people feel something with her works.
</p>  


                 
              </article>

              <article className="bg-secondary/40 p-6 rounded-lg shadow-md">
                <Image
                  src="/judges/2.jpeg"
                  alt="Portrait of Saddiq Dzukogi"
                  width={420}
                  height={550}
                  className="w-full h-64 object-cover object-[center_30%] rounded-md"
                />
                <h3 className="text-xl font-gothic text-faintBlack mt-6">
                  Saddiq Dzukogi
                </h3>
                <p className="text-base text-smallColor leading-7 mt-4">
                Saddiq Dzukogi is the author of <i>Your Crib, My Qibla</i>, selected by Carolyn Forché as winner of the 2021 Derek Walcott Prize for Poetry and the 2022 Julie Suk Award. He was also a finalist for the 2022 Nigeria Prize for Literature.  A recipient of numerous fellowships from the Nebraska Art Council, Mississippi Arts Commission, Cave Canem, PEN America, Obsidian Foundation UK, etc. His poetry is featured in various publications, including <i>POETRY, Ploughshares, Kenyon Review, Poetry London, Guernica,Georgia Review, Gulf Coast, Cincinnati Review and Best American Experimental Writing</i>, among others. His latest book is the epic poem, <i>Bakandamiya: An Elegy</i> (University of Nebraska Press, 2025). He lives in Lincoln Nebraska where he is an Assistant Professor of English.
                </p>
          
              </article>

              <article className="bg-secondary/40 p-6 rounded-lg shadow-md">
                <Image
                  src="/judges/3.jpeg"
                  alt="Portrait of Ridwan Fasasi, SWAN I"
                  width={420}
                  height={550}
                  className="w-full h-64 object-cover object-[center_30%] rounded-md"
                />
                <h3 className="text-xl font-gothic text-faintBlack mt-6">
                  Ridwan Fasasi, SWAN I
                </h3>
                <p className="text-base text-smallColor leading-7 mt-4">
                Ridwan Fasasi, SWAN I, is a Nigerian editor, writer, and art curator of Yoruba Descent. A Pushcart Prize and Best of the Nominee whose works have appeared on ANMLY Lit, Chestnut Review, Frontier Poetry, Euonia Review, Akpata, Lucent Dreaming, Strange Horizon, Hindsight Creative, among others. He is the winner of the 2024 Labari Prize for Poetry. His works have been shortlisted for the SprinNg Annual Poetry Contest, Gbemisola Adeoti Poetry Prize, Lucky Jefferson Poetry & Prose Contest, Splendor of Dawn Poetry Contest, SOBAF Poetry Slam, and also longlisted for the 2024 Akachi Prize for Literature. He is currently the Editor-in-Chief of Voaliterature, a reader at Anomalous Press, and works as a reviewer at D’lit Review. Find him on Twitter (sorry X) <a href="https://x.com/Ibn_Yushau44" target="_blank" className="text-primary underline">@Ibn_Yushau44</a>.
                </p>
              </article>
            </div>
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
                  Submissions must be original and unpublished. Works that have appeared in personal blogs or small publications are acceptable but must not have been submitted for other prizes.
                </li>
                <li>
                  Submit your poems in PDF or Word Document format. Each poem should be typed, double-spaced, and include the title (but not the poet’s name to ensure anonymity).
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-faintBlack mt-6">
                Theme:
              </h3>
              <ul className="list-disc list-inside text-smallColor mt-2">
                <li>
                  The 2025 theme is Who are we? Poems must reflect or engage with the theme in creative and meaningful ways.
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-faintBlack mt-6">
                Submission Period:
              </h3>
              <p className="text-smallColor mt-2">
                Submissions open on <strong>2nd November, 2025</strong> and close on <strong>15th December, 2025</strong>. Late entries will not be accepted.
              </p>

              <h3 className="text-xl font-semibold text-faintBlack mt-6">
                How to Submit:
              </h3>
              <ul className="list-disc list-inside text-smallColor mt-2">
                <li>
                  Submit your poem as a Word document or PDF to{" "}
                  <a
                    href="mailto:artsxvibes@gmail.com"
                    className="text-primary underline"
                  >
                    artsxvibes@gmail.com
                  </a>
                  .
                </li>
                <li>
                  Use the subject line: “Labari Prize for Poetry 2025 – [Your Name]”.
                </li>
                <li>Please do not include your name in the body of your work.</li>
                <li>Include a brief biography in the body of your email.</li>
              </ul>
            </div>
          </section>

          {/* Prize Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-gothic text-faintBlack mb-4">
              Prize and Recognition
            </h2>
            <p className="text-lg text-smallColor">
              Prize:{" "}
              <span className="font-semibold">N250,000 (winner takes all)</span>
            </p>
            <p className="text-lg text-smallColor mt-2">
              Shortlisted poets will have their work featured on our website.
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
              <li>Hauwa Saleh Abubakar</li>
              <li>Saddiq Dzukogi</li>
              <li>Ridwan Fasasi, SWAN I</li>
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
            <p className="text-lg text-smallColor mt-2">We look forward to reading your work!</p>
          </section>
        </main>
      </div>


      <div className="w-full  px-8 py-7 md:px-20 md:pb-28">
        {/* Tabs Section */}
        <div className="w-full px-1 py-7 md:px-20 md:pb-28">
          <div className="flex justify-center space-x-6 mb-8">
            <button
              onClick={() => setActiveTab("2025")}
              className={`px-5 md:px-6 py-2 font-gothic text-xs md:text-lg rounded ${
                activeTab === "2025"
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              2025
            </button>
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
              <div className="flex flex-wrap gap-8 w-full justify-evenly items-start py-12">
                {entry2024 &&
                  entry2024.map((item) => {
                    return (
                      <EntryCard
                        key={item.id}
                        isWinner={item.isWinner}
                        author={item.author}
                        bio={item.bio}
                        title={item.title}
                        year={2024}
                        id={item.id}
                        image={item.image}
                      />
                    );
                  })}
              </div>
            </div>
          )}

          {/* Shortlisted Entries 2025 */}
          {activeTab === "2025" && (
            <div>
              <h1 className="w-full p-4 font-gothic text-3xl md:text-6xl text-black text-center">
                Shortlisted Entries 2025
              </h1>
              <div className="flex flex-wrap gap-8 w-full justify-evenly items-start py-12">
                {entry2025 &&
                  entry2025.map((item) => {
                    return (
                      <EntryCard
                        key={item.id}
                        isWinner={item.isWinner}
                        author={item.author}
                        bio={item.bio}
                        title={item.title}
                        year={2025}
                        id={item.id}
                        image={item.image}
                      />
                    );
                  })}
              </div>
            </div>
          )}
        </div>
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
