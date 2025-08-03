"use client";

import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { projectInfo } from "@/lib/projectDetails";
import { skills } from "@/lib/skill";
import Image from "next/image";
import Link from "next/link";
import { BsTwitter } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import profileImage from "./../public/dp.jpg";
import { RoughNotation } from "react-rough-notation";
import { useState } from "react";

const Page = () => {
  const [showAnnotation, setShowAnnotation] = useState(false);
  const [show, setShow] = useState(false);

  const readMore = () => {
    setShow((prev) => !prev);
  };
  return (
    <>
      <div className="flex flex-col lg:flex-row w-full">
        <div className="lg:sticky lg:top-0 lg:h-screen lg:flex-none">
          <main className="flex flex-col gap-6 items-center sm:items-start pl-0 sm:px-14 md:pl-20 grow">
            <div
              className="pt-16"
              onMouseEnter={() => setShowAnnotation(true)}
              onMouseLeave={() => setShowAnnotation(false)}
            >
              <RoughNotation
                type="circle"
                show={showAnnotation}
                color="#f59e0b"
                strokeWidth={1}
                animationDuration={1200}
                padding={30}
                iterations={3}
                multiline={false}
              >
                <Image
                  src={profileImage}
                  alt="profile-image"
                  height={56}
                  width={250}
                  priority
                  className="rounded-xl hover:-rotate-3 transition-all duration-300 grayscale-75 hover:grayscale-0"
                />
              </RoughNotation>
            </div>
            <h1 className="text-3xl xl:text-4xl font-bold font-fair">
              Subhajit Sarkar
            </h1>
            <ol className="list-inside text-sm text-center sm:text-left font-popy tracking-widest">
              <li className="mb-2">
                i work on all things{" "}
                <RoughNotation
                  type="highlight"
                  show={true}
                  color="#f59e0b"
                  padding={2}
                >
                  <span className="relative text-black">software</span>
                </RoughNotation>{" "}
                with
                <br className="block md:hidden" /> fun
              </li>
              <li className="mb-2">truly love working on web</li>
            </ol>
            <div className="flex gap-2.5 pb-2">
              <Link
                href="https://github.com/subhajitsarkar-dev"
                target="_blank"
              >
                <Button color="default" size="icon" className="cursor-pointer">
                  <FaGithub size={28} className="" />
                </Button>
              </Link>
              <Link href="https://x.com/sarkar50664" target="_blank">
                <Button color="default" size="icon" className="cursor-pointer">
                  <BsTwitter size={28} className="text-white dark:text-black" />
                </Button>
              </Link>
              <Link href="mailto:subhajitsarkar.dev@gmail.com" target="_blank">
                <Button color="default" size="icon" className="cursor-pointer">
                  <SiGmail size={28} className="text-white dark:text-black" />
                </Button>
              </Link>
              <Link
                href="https://linkedin.com/in/subhajitsarkar-dev"
                target="_blank"
              >
                <Button color="default" size="icon" className="cursor-pointer">
                  <FaLinkedinIn
                    size={28}
                    className="text-white dark:text-black"
                  />
                </Button>
              </Link>
            </div>
          </main>
        </div>

        <div className="grow lg:h-screen overflow-auto">
          <section className="px-6 py-4 lg:my-8 xl:my-10">
            <section className="pr-4 mb-8">
              <div
                className={`text-base text-left md:text-justify mb-2 font-popy font-thin ${
                  show === true ? `line-clamp-none` : `line-clamp-4`
                }`}
              >
                Hellow, I&#39;m Subhajit Sarkar — a passionate frontend
                developer with a strong foundation in modern web technologies
                like <span className="font-semibold">React.js</span>,{" "}
                <span className="font-semibold">Next.js</span> and so one. My
                goal is to build a fast, flexible, mobile-first website that
                clearly communicates with visitors. I&#39;m currently focused on
                honing my skills through real-world projects and sharing my
                knowledge with others.
                <p className="pt-2">
                  I began my web development journey in june 2023. Initially,
                  bugs and errors were frustrating for me, but with time and
                  consistent effort, I overcame those challenges. This journey
                  has strengthened my problem-solving skills and improved my way
                  of thinking as a developer.
                </p>
              </div>
              <button
                className="text-blue-400 cursor-pointer"
                onClick={readMore}
              >
                {show ? "read less" : "read more"}
              </button>
            </section>
            <section className="flex flex-wrap gap-2 mb-8 font-popy">
              {skills.map((skill, index) => (
                <div
                  className="border px-2.5 py-0.5 rounded-full font-normal text-sm cursor-pointer flex items-center gap-2 duration-200 hover:bg-gray-100"
                  key={index}
                >
                  <span className={`transition-colors duration-200 `}>
                    <skill.icon size={16} />
                  </span>
                  {skill.name}
                </div>
              ))}
            </section>
            <section>
              <div className="grid lg:grid-cols-2 gap-4 sm:grid-cols-1">
                {projectInfo.map((info) => (
                  <ProjectCard data={info} key={info.id} />
                ))}
              </div>
            </section>
          </section>
        </div>
      </div>
    </>
  );
};

export default Page;
