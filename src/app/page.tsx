import Link from "next/link";
import { FC } from "react";

export default function Home() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-between bg-[url(/abstract-05-adjusted.png)] bg-cover bg-no-repeat pt-10 text-white">
      <div className="mt-14 flex flex-col items-center justify-center space-y-9">
        <h3 className="text-3xl ">Artificium</h3>
        <div className="text-center text-8xl font-bold leading-[150px]">
          <h1>Empowering your </h1>
          <h1 className="bg-gradient-to-r from-green-300 from-50% via-blue-500 to-dayBlue-500 bg-clip-text text-transparent ">
            digital journey
          </h1>
        </div>
        <div className="group mt-11 rounded-full bg-black backdrop-blur-md transition hover:bg-gradient-to-tr hover:from-blue-300 hover:to-green-300">
          <button className="space-y-0 bg-gradient-to-tr from-blue-300 to-green-300 bg-clip-text px-6 py-4 font-semibold uppercase text-transparent transition group-hover:bg-transparent group-hover:text-black">
            get started
          </button>
        </div>
      </div>
      <div className="from-27% mt-96 flex w-full flex-col items-center justify-center bg-gradient-to-r from-transparent via-black/60  to-transparent backdrop-blur-md">
        <div className="text-center text-4xl font-bold leading-[60px]">
          <h2 className="mt-28">
            <span className="bg-gradient-to-r from-teal-300 from-75% to-blue-400  bg-clip-text text-transparent">
              AI-powered
            </span>{" "}
            creativity
          </h2>
          <h2>at your fingertips</h2>
        </div>

        <div className="mx-28 my-16 grid grid-cols-3 grid-rows-2 gap-10">
          <DescriptionBlock
            title="All-in-one-workspace"
            description="Manage all your projects and content in one place"
          />
          <DescriptionBlock
            title="AI generated creations"
            description="Quickly create high-quality images and documents with AI technology"
          />
          <DescriptionBlock
            title="Customization options"
            description="Customize your creations with different styles, colors and formats"
          />
          <DescriptionBlock
            title="Easy sharing and download"
            description="Share your work on social media or download it for offline use"
          />
          <DescriptionBlock
            title="Pre-made templates and prompts"
            description="Access a library of templates and prompts to jumpstart your creativity"
          />
          <DescriptionBlock
            title="Real-time collaboration"
            description="Collaborate with others by working together in real-time"
          />
        </div>
      </div>
    </section>
  );
}

interface DescriptionBlockProps {
  title: string;
  description: string;
}

const DescriptionBlock: FC<DescriptionBlockProps> = ({
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-start space-y-4">
      <h4 className="text-md font-semibold ">{title}</h4>
      <p className="bg-gradient-to-bl from-teal-100 from-75% to-blue-400 bg-clip-text text-transparent">
        {description}
      </p>
    </div>
  );
};
