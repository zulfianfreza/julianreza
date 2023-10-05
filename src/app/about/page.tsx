'use client'
import Container from '@/components/Container'
import Heading from '@/components/Heading'
import { MY_STACK } from '@/lib/constants/stack'

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
                <h4 className=" text-gray-500 dark:text-gray-400 text-sm">
                  Universitas Komputer Indonesia, Bandung
                </h4>
              </div>
              <p className=" text-gray-800 dark:text-gray-50 text-sm mt-1">
                2018 - 2022
              </p>
            </div>
            <p className=" text-gray-500 dark:text-gray-400 text-sm">
              Cumulative GPA: 3.38/4.00
            </p>
            <p className=" text-gray-500 dark:text-gray-400 text-sm">
              Thesis: Health Monitoring Application by Utilizing an
              Android-Based Smartwatch
            </p>
          </div>
          <div className="">
            <div className=" flex justify-between items-start">
              <div className=" flex-1">
                <h4 className=" text-gray-800 dark:text-gray-100 font-medium text-lg">
                  Software Engineering
                </h4>
                <h4 className=" text-gray-500 dark:text-gray-400 text-sm">
                  SMKN 4 Padalarang, Bandung
                </h4>
              </div>
              <p className=" text-gray-800 dark:text-gray-50 text-sm mt-1">
                2015 - 2018
              </p>
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
              <p className=" text-gray-800 dark:text-gray-50 text-sm mt-1">
                Oct 2021 - Dec 2021
              </p>
            </div>
            <article className=" text-sm">
              <ul className=" list-disc ml-8 text-gray-500 dark:text-gray-400">
                <li>
                  Manage data archives and ensure the completeness and
                  regularity of stored data related to ANDALALIN (Traffic Impact
                  Analysis) data.
                </li>
                <li>
                  Designing, and developing ANDALALIN Licensing Service
                  Information System website, and ensuring maximum accessibility
                  for license applicants.
                </li>
                <li>
                  Collaborating with relevant stakeholders to understand
                  business needs and requirements, and integrating relevant
                  features into the website.
                </li>
              </ul>
            </article>
          </div>
          <div className="">
            <div className=" flex justify-between items-start">
              <h1 className=" font-medium text-lg text-gray-800 dark:text-gray-100 flex-1">
                PT. Konsep Dot Net
              </h1>
              <p className=" text-gray-800 dark:text-gray-50 text-sm mt-1">
                Jan 2017 - Apr 2017
              </p>
            </div>
            <article className=" text-sm">
              <ul className=" list-disc ml-8 text-gray-500 dark:text-gray-400">
                <li>
                  Slicing UI design into a website using HTML,CSS, Javascript
                  and implementing responsive design.
                </li>
                <li>
                  Create articles related to technology by following SEO
                  guidelines
                </li>
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
        <Heading title="My Stack" />
        <div className=" flex flex-wrap gap-2 mt-4">
          {MY_STACK.map((stack, index) => (
            <div
              key={index}
              className=" px-4 py-1 border dark:border-gray-700 rounded-[4px] dark:bg-gray-800 text-sm dark:text-gray-100 bg-gray-100 text-gray-800"
            >
              {stack}
            </div>
          ))}
        </div>
        <div className=" mt-10">
          <Heading title="Interest" />
          <div className=" flex flex-wrap gap-2 mt-4">
            {['GraphQL', 'React Native', 'ASP.NET'].map((stack, index) => (
              <div
                key={index}
                className=" px-4 py-1 dark:bg-gray-800 border dark:border-gray-700 rounded-[4px] text-sm dark:text-gray-100 bg-gray-100 text-gray-800"
              >
                {stack}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}
