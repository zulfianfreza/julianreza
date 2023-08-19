'use client'
import Container from '@/components/Container'
import Heading from '@/components/Heading'
import { MY_STACK } from '@/lib/constants/stack'
import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

export default function Page() {
  return (
    <Container className=" mt-10">
      <div className="">
        <Heading title="My Ninja Way 🥷" />
        <div className=" flex flex-col gap-y-4 mt-4">
          <div className="">
            <div className=" flex justify-between items-start">
              <div className=" flex-1">
                <h4 className=" text-gray-800 dark:text-gray-100 font-medium text-lg">
                  Bachelor of Informatics Engineering
                </h4>
                <h4 className=" text-gray-500 dark:text-gray-400">
                  Universitas Komputer Indonesia, Bandung
                </h4>
              </div>
              <p className=" text-gray-800 dark:text-gray-50">2018 - 2022</p>
            </div>
            <p className=" text-gray-500 dark:text-gray-400">
              Cumulative GPA: 3.33/4.00
            </p>
            <p className=" text-gray-500 dark:text-gray-400">
              Thesis: Health Monitoring Application by Utilizing an
              Android-Based Smartwatch
            </p>
          </div>
          <div className="">
            <div className=" flex justify-between items-center">
              <div className=" flex-1">
                <h4 className=" text-gray-800 dark:text-gray-100 font-medium text-lg">
                  Software Engineering
                </h4>
                <h4 className=" text-gray-500 dark:text-gray-400">
                  SMKN 4 Padalarang, Bandung
                </h4>
              </div>
              <p className=" text-gray-800 dark:text-gray-50">2015 - 2018</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <Heading title="Work Experience" />
        <div className=" mt-4">
          <div className="">
            <div className=" flex justify-between items-start">
              <h1 className=" font-medium text-lg text-gray-800 dark:text-gray-100 flex-1">
                Dinas Perhubungan Provinsi Jawa Barat
              </h1>
              <p className=" text-gray-800 dark:text-gray-50">
                Sept 2021 - Dec 2021
              </p>
            </div>
            <article className="">
              <ul className=" list-disc ml-8 text-gray-500 dark:text-gray-400">
                <li>
                  Responsible for recapitulation of ANDALALIN (Traffic Impact
                  Analysis) data
                </li>
                <li>
                  Creating an ANDALALIN Licensing Service Information System
                  website.
                </li>
              </ul>
            </article>
          </div>
          <div className="">
            <div className=" flex justify-between items-center">
              <h1 className=" font-medium text-lg text-gray-800 dark:text-gray-100 flex-1">
                PT. KONSEP DOT NET
              </h1>
              <p className=" text-gray-800 dark:text-gray-50">
                Jan 2017 - Apr 2017
              </p>
            </div>
            <article className="">
              <ul className=" list-disc ml-8 text-gray-500 dark:text-gray-400">
                <li>
                  Perform slicing of designs that have been provided using HTML,
                  CSS, and Javascript.
                </li>
                <li>Write an article related to technology.</li>
                <li>
                  Become a facilitator in the KLA (Child Friendly City)
                  application launching event organized by KPPPA (Ministry of
                  Women&apos;s Empowerment and Child Protection)
                </li>
              </ul>
            </article>
          </div>
        </div>
      </div>
      <div className=" mt-10">
        <Heading
          title="My Stack"
          subtitle="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid illo vel nobis deleniti totam saepe quasi dolore iste, eos vitae?"
        />
        <div className=" flex flex-wrap gap-2 mt-4">
          {MY_STACK.map((stack, index) => (
            <div
              key={index}
              className=" px-4 py-1 border dark:border-gray-700 rounded-sm dark:bg-gray-800 text-sm dark:text-gray-100 bg-gray-100 text-gray-800"
            >
              {stack}
            </div>
          ))}
        </div>
        <div className=" mt-10">
          <Heading title="Interest" />
          <div className=" flex flex-wrap gap-2 mt-4">
            {['Golang', 'GraphQL', 'React Native', 'ASP.NET'].map(
              (stack, index) => (
                <div
                  key={index}
                  className=" px-4 py-1 dark:bg-gray-800 border dark:border-gray-700 rounded-sm text-sm dark:text-gray-100 bg-gray-100 text-gray-800"
                >
                  {stack}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </Container>
  )
}
