/* eslint-disable react/jsx-no-comment-textnodes */
import Image from 'next/image';
import type { NextPage } from 'next';
import { Layout } from '../components/layout';
import { Header } from '../components/header/Header';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useRef } from 'react';
import { useIsomorphicLayoutEffect } from '../lib/helpers/useIsomorphicLayoutEffect';
import { Terminal } from '../components/terminal/Terminal';
import { ExperienceItem } from '../components/experience/ExperienceItem';
// import { ProjectItem } from '../components/project/ProjectItem';
// import { useState } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Home: NextPage = () => {
  /* State */
  const main = useRef<HTMLDivElement>(null);
  useIsomorphicLayoutEffect(() => {
    // For animating the first terminal
    const ctx = gsap.context(() => {
      gsap.from('.hello', {
        opacity: 0,
        y: 40,
        duration: 1,
        smoothOrigin: true,
        delay: 1.5,
      });
      gsap.set('.card', { transformStyle: 'preserve-3d', perspective: 1000 });
      const q = gsap.utils.selector('.skills');
      const front = q('.front');
      const back = q('.back');
      gsap.set(back, { rotationX: -180 });

      // For flipping card
      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.skills',
            start: 'top top',
            scrub: true,
            pin: true,
          },
          smoothChildTiming: true,
        })
        .to(front, { duration: 1, rotationX: 180 })
        .to(back, { duration: 1, rotationX: 0 }, 0)
        .to('.skills', { z: 50 }, 0)
        .to('.skills', { z: 0 }, 0.5);

      // For pinning projects
      gsap.utils.toArray('.experience').forEach((experience, i) => {
        ScrollTrigger.create({
          trigger: experience as gsap.DOMTarget,
          start: 'top top',
          end: i == 3 ? 'top top' : 'bottom 64px',
          pin: true,
          pinSpacing: false,
        });
      });
    }, main);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Layout className="flex min-h-screen flex-col items-center justify-center bg-dark">
        <Header
          title="Full Stack Dev"
          commentStyle
          description="I'm a Senior full stack developer with a passion for building intuitive and performant applications."
        />
        <div ref={main} className="flex w-full flex-col items-center">
          <div className="hello mb-10 flex h-80 w-80 justify-center">
            <Image
              src="/assets/haroon.jpeg"
              className="rounded-full"
              objectFit="cover"
              height={3088}
              width={2316}
              priority
              alt="Haroon Jawad"
            />
          </div>
          <div className="flex justify-center">
            <div className="hello max-w-4xl p-7">
              <h1 className="x:text-[28px] text-[26px] font-bold text-white md:text-[40px] lg:text-[52px]">
                Hi, I&apos;m Haroon Jawad <span className="wave">👋</span>
              </h1>
              <h4 className="mb-5 flex flex-row items-center justify-start text-lg italic text-white">
                <div className="flex h-full items-center">
                  <Image src="/assets/pin.png" height={20} width={20} alt="" />
                </div>
                <div className="opacity-70">Islamabad, Pakistan</div>
              </h4>
              <Terminal
                className="rounded-xl bg-light p-5 text-green-500"
                bodyClassName="code-font text-base pt-5 text-left xs:text-lg md:text-[24px]"
                variant="dark"
              >
                <div>/*</div>As a highly motivated and versatile programmer, I bring a unique
                combination of technical expertise and creative problem-solving skills to every
                project I take on. Whether I&apos;m coding for work, school, or just for fun, I
                approach every challenge with a passion for learning and a drive to constantly
                improve. I find fulfillment in exploring new and innovative ways to tackle problems
                and I take pride in getting to the heart of how things work.
                <div>*/</div>
              </Terminal>
            </div>
          </div>
          <div className="skills h-screen w-full max-w-4xl pt-[140px] pb-20">
            <div className="z-10 text-center text-2xl font-medium text-white md:text-3xl">
              I can do
            </div>
            <div className="card relative h-full w-full">
              <div className="backface-hidden front absolute inset-0 m-7">
                <div className="h-full rounded-xl bg-white p-5">
                  <div className="mb-3 flex flex-row gap-3">
                    <div className="h-[14px] w-[14px] cursor-pointer rounded-full bg-[#FF5F56] transition duration-200 ease-linear hover:opacity-70"></div>
                    <div className="h-[14px] w-[14px] cursor-pointer rounded-full bg-[#FFBD2E] transition duration-200 ease-linear hover:opacity-70"></div>
                    <div className="h-[14px] w-[14px] cursor-pointer rounded-full bg-[#27C93F] transition duration-200 ease-linear hover:opacity-70"></div>
                  </div>
                  <div className="border-b-2 border-gray-200 pt-2"></div>
                  <div className="flex h-full flex-col items-center justify-center gap-10 pb-7">
                    <h1 className="w-full pt-2 text-center text-4xl font-bold">Front End</h1>
                    <div className="pb-text-base max-w-lg pt-5 text-center font-medium xs:text-lg md:text-[24px]">
                      I have over 3 years of professional experience in developing a diverse range
                      of applications, I possess the ability to swiftly construct and design user
                      interfaces that are both purposeful and captivating, while also being
                      optimized for performance.
                    </div>
                  </div>
                </div>
              </div>
              <div className="backface-hidden back absolute inset-0 m-7">
                <div className="h-full rounded-xl bg-light p-5 text-white">
                  <div className="mb-3 flex flex-row gap-3">
                    <div className="h-[14px] w-[14px] cursor-pointer rounded-full bg-[#FF5F56] transition duration-200 ease-linear  hover:opacity-70"></div>
                    <div className="hver:opacity-70 h-[14px] w-[14px] cursor-pointer rounded-full bg-[#FFBD2E] transition duration-200 ease-linear hover:opacity-70"></div>
                    <div className="h-[14px] w-[14px] cursor-pointer rounded-full bg-[#27C93F] transition duration-200 ease-linear hover:opacity-70"></div>
                  </div>
                  <div className="border-b-2 border-dark pt-2"></div>
                  <div className="flex h-full flex-col items-center justify-center gap-10 pb-7">
                    <h1 className="w-full text-center text-4xl font-bold">Back End</h1>
                    <div className="pb-text-base max-w-lg pt-5 text-center xs:text-lg md:text-[24px]">
                      As a seasoned developer proficient in Node.js backends, I possess the ability
                      to adeptly leverage serverless or hosted backends in tandem with either
                      relational or non-relational databases, to effectively construct and deliver
                      robust RESTful APIs. In addition, I am well-versed in optimizing testing and
                      deployment pipelines for applications through the utilization of Docker and
                      GitHub Actions.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-[100vh] text-center font-medium">
            <h3 className="text-4xl font-bold text-white">Experience</h3>
          </div>
          <ExperienceItem
            src="/assets/logo-jslytics.svg"
            title="Jslytics"
            width={195}
            height={43.2}
            href="https://www.jslytics.com/"
            headerText="Responsibilities:"
            underlined
            gradientColour="#5258ec"
            role="Lead Web Developer"
            childWrapperClass="flex justify-center px-10"
            date="September 2022 - Present"
          >
            <ul className="flex max-w-md list-disc flex-col gap-5 pt-2 text-base sm:text-lg">
              <li> Server-side tagging with GTM</li>
              <li> Building Custom JavaScript variables for GTM</li>
              <li>
                {' '}
                Integrating production applications to different analytics/marketing solutions like
                Hubspot/Zapier
              </li>
              <li>
                {' '}
                Building Custom JavaScript tracking scripts to better analyze, capture and process
                user data
              </li>
            </ul>
          </ExperienceItem>
          <ExperienceItem
            src="/assets/atentiv.webp"
            title="Atentiv LLC"
            width={130.8}
            height={34.8}
            href="https://www.atentiv.com"
            underlined
            imageBg="bg-[#1c2f59]"
            headerText="Areas I impacted:"
            childWrapperClass="flex justify-center px-10"
            gradientColour="#1c2f59"
            role="Full-Stack Engineer"
            date="May - August 2022"
          >
            <ul className="flex max-w-md list-disc flex-col gap-5 pt-2 text-base sm:text-lg">
              <li>Built and managed the patient Management portal for Atentiv LLC.</li>
              <li>
                Technologies used - React, Redux, Next.js, Node.js, Nest.js, TypeORM, PostgreSQL.
              </li>
              <li>
                Implemented User facing features for different roles ranging from patient,
                caregiver, physician, admin.
              </li>
              <li>
                Visualized Data with Beautiful,interactive charts acting as reusable React
                components using D3 modules
              </li>
            </ul>
          </ExperienceItem>

          <div className="mt-16 text-3xl font-bold text-white">Reach out to me!</div>
          <div className="mb-72 max-w-sm text-center text-lg text-white">
            My inbox is{' '}
            <span className="text-lg font-medium underline underline-offset-8">always</span> open
            whether you have a question or just want to say hi 😎
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
