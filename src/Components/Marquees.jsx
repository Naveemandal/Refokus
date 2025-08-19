import React from 'react'
import Marquee from './Marquee'

const Marquees = () => {
  var marquee = [
  [
  "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/yahoo.svg",
  "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/spotify.svg",
  "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/netflix.svg",
  "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/google.svg",
  "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/amazon.svg",
  "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/microsoft.svg",
  "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg",
  "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/apple.svg",
  "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/webflow.svg",
  "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg",
  "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/figma.svg",
  "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/slack.svg",
  "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/airbnb.svg",
  "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/adobe.svg",
  "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/atlassian.svg",
  "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/spotify.svg",
      "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/yahoo.svg",
      "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/netflix.svg",
      "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/spotify.svg"
],

       [
  "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/yahoo.svg",
  "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/spotify.svg",
  "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/netflix.svg",
  "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/google.svg",
  "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/amazon.svg",
  "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/microsoft.svg",
  "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg",
  "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/apple.svg",
  "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/webflow.svg",
  "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg",
  "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/figma.svg",
  "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/slack.svg",
  "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/airbnb.svg",
  "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/adobe.svg",
  "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/atlassian.svg",
  "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/spotify.svg",
      "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/yahoo.svg",
      "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/netflix.svg",
      "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/spotify.svg"
],

  ]
  return (
    <div className='py-20 w-full relative overflow-hidden bg-zinc-900' >
      {marquee.map((item, index) => <Marquee  key={index} direction={index === 0 ? "left" : "right"} imgurl={item} />)}
    </div>
  )
}

export default Marquees