'use client'

import { InstagramEmbed } from 'react-social-media-embed'
import Heading from './Heading'

export default function SpeedCodeSection() {
  const URL = [
    'https://www.instagram.com/reel/Cg63e79rYaO/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==',
    'https://www.instagram.com/reel/CgldmdUNlvh/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==',
    'https://www.instagram.com/reel/ChtkC_hMYXI/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==',
    'https://www.instagram.com/reel/ChM78ELjI1D/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==',
    'https://www.instagram.com/reel/CgUEPG-sglW/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==',
  ]
  return (
    <div className=" mt-10">
      <Heading title="Speed Code 🚀" />
      <div className=" gap-4 mt-4 w-full flex overflow-x-scroll [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {URL.map((url, index) => (
          <div
            key={index}
            className=" scale-[0.8] rounded-lg -mx-[32.8px] -my-[86px]"
          >
            <InstagramEmbed url={url} width={328} />
          </div>
        ))}
      </div>
    </div>
  )
}
