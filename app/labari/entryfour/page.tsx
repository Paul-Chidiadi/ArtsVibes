import Image from "next/image";

export default function Labari() {
  return (
    <>
      <div id="top" className="w-full px-8 py-7 md:px-20 md:py-28 mt-12">
        <h1 className="w-full p-4 font-gothic text-3xl md:text-6xl text-black text-center">
          Being Nigerian
        </h1>

        <h4 className="w-full font-lato font-bold text-xl md:text-4xl text-black text-center mt-10">
          ABUBAKAR MARIYA BAGUDO
        </h4>

        <p className="w-full font-lato font-medium text-lg text-black text-left mt-10">
          I sit in a history class, my teacher teaches colonialism, imperialism
          and terrorism <br></br> Terrorist with names and skin color like mine,
          not so black,<br></br> yet still black It brings me back to the state
          of my country<br></br>
          The divide, across religion, ethnicity and class<br></br> My Igbo
          friend still laments about Biafra <br></br> My christian friend talks
          about terrorist attacks<br></br> He says it as though he's being
          targeted simply for not being Muslim <br></br> He says "Boko Haram"
          with so much disgust as though their actions describes all Muslims
          <br></br> <br></br> I wish I could tell him, that I too am a victim,
          that Muslims too are victims<br></br> In my hometown 30 people were
          burnt alive<br></br> That just like Deborah another Muslim was KILLED
          for blasphemy<br></br> A victim of jungle justice <br></br> I wonder
          if it's still terrorism if they attack people with names, faces and
          religion like theirs<br></br> <br></br> In my country we carry trauma
          like our birthright<br></br>
          Each religion finding blame<br></br> Each tribe pointing fingers at
          another<br></br>
          Intense divide, stereotypes and tribal wars<br></br> Hausas are Aboki,
          uneducated and almajiri's <br></br> Yorubas are extreme and loud
          <br></br> Igbos are cheats who love money<br></br> Arguing which is
          greater, Hausa, Yoruba or Igbo <br></br> <br></br> While doing so we
          forget that Nigeria is more than that<br></br> It's home to more than
          500 languages and 300 ethnic groups<br></br> And we're all connected,
          it's all the same <br></br>Stereotyping NIgerians is alot like trying
          to fit an ocean in a tea cup or <br></br> containing a wildfire in a
          single match or even trying to bottle up the brilliance of a rainbow
          <br></br>
          <br></br>
          To be Nigerian is to embrace a beautiful mosaic of diversity<br></br>
          where each piece contributes to the richness of our identity<br></br>A
          constant reminder of the heritage that runs through our veins
          <br></br> -ONE NIGERIA- is more than a chant and greater than a dream
          <br></br> It's a generation trying to bridge the gaps between words
          and emotions,<br></br>
          Attempting to capture the vastness of love in a single label -
          NIGERIAN-<br></br> Breaking down barriers like a flowing stream,
          fostering diversity and promoting unity <br></br> Tribes and religions
          intertwined, weaving a fabric that's one of a kind <br></br> <br></br>
          Each step we take, each action we choose, holding the power to shape
          the future <br></br> And contribute to the healing and growth of our
          nation<br></br>
          Years from now, when stories are shared of past struggles and how we
          repaired.<br></br> The tales of ethnic fights and intolerance will
          seem like distant echoes, lost in the expanse,<br></br> Generations to
          come will find it hard to believe, that such divisions and conflicts
          were once conceived,<br></br> For we will have built bridges, strong
          and true <br></br>In this future we envision, when generations hear of
          our past <br></br> They'll find it hard to believe, because it's no
          longer a reality <br></br>As we gaze ahead to the future, history
          casts its gaze upon us, and the present rests in our hands.<br></br>
        </p>

        <div className="w-full flex justify-start items-center gap-5 mt-12">
          <a href="#">
            <Image
              className="hover:w-12 cursor-pointer"
              src="/facebook.png"
              width={45}
              height={45}
              quality={100}
              alt="facebook"
            />
          </a>
          <a href="#">
            <Image
              className="hover:w-12 cursor-pointer"
              src="/linkedin.png"
              width={45}
              height={45}
              quality={100}
              alt="linkedin"
            />
          </a>
          <Image
            className="hover:w-12 cursor-pointer"
            src="/twitter.png"
            width={45}
            height={45}
            quality={100}
            alt="twitter"
          />
        </div>
      </div>
    </>
  );
}
