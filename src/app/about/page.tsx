import Container from '@/components/Container'
import Heading from '@/components/Heading'
import React from 'react'

export default function Page() {
  return (
    <Container className=" mt-10">
      <div className="">
        <Heading title="My Ninja Way 🥷" />
        <div className=" flex flex-col gap-y-4 mt-4">
          <div className="">
            <p className=" text-gray-800">2015 - 2018</p>
            <h4 className=" text-gray-800 font-semibold text-lg">
              SMKN 4 Padalarang (Software Engineering)
            </h4>
            <p className=" text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ab
              velit repudiandae illum, iste temporibus.
            </p>
          </div>
          <div className="">
            <p className=" text-gray-800">2018 - 2022</p>
            <h4 className=" text-gray-800 font-semibold text-lg">
              Universitas Komputer Indonesia (Informatics Engineering)
            </h4>
            <p className=" text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
              odit obcaecati aliquam optio officia ullam a eligendi,
              exercitationem quis facere vel? Nihil fugiat voluptates ab!
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}
