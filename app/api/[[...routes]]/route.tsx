/** @jsxImportSource frog/jsx */

import { Button, Frog } from 'frog'
import { devtools } from 'frog/dev'
// import { neynar } from 'frog/hubs'
import { handle } from 'frog/next'
import { serveStatic } from 'frog/serve-static'
import { url } from 'inspector'

const app = new Frog({
  assetsPath: '/',
  basePath: '/api',
  imageOptions: { width: 1200, height: 630 },
})

// Uncomment to use Edge Runtime
// export const runtime = 'edge'

app.frame('/', (c) => {

  return c.res({
    action: '/first',
    image: 'https://i.ibb.co/tZC1gxk/first-page.png',
    intents: [
      <Button>Begin</Button>,
      <Button.Link href="https://warpcast.com/mortyje">
        Follow me please</Button.Link>
    ],
  })
})

app.frame('/first', (c) => {

  return c.res({
    image: 'https://i.ibb.co/mqLbq05/first.png',
    intents: [
      <Button action='/second'>KONOSUBA -God's Blessing on this Wonderful World!</Button>,
      <Button action='/lose'>GIRLS BAND CRY</Button>,
      <Button action='/lose'>Date A Live</Button>,
    ],
  })
})

app.frame('/second', (c) => {

  return c.res({
    image: 'https://i.ibb.co/py3XNmf/second.png',
    intents: [
      <Button action='/lose'>Date A Live</Button>,
      <Button action='/third'>GIRLS BAND CRY</Button>,
      <Button action='/lose'>That Time I Got Reincarnated as a Slime</Button>,
    ],
  })
})

app.frame('/third', (c) => {

  return c.res({
    image: 'https://i.ibb.co/HhDJ2zK/third.png',
    intents: [
      <Button action='/lose'>Go! Go! Loser Ranger!</Button>,
      <Button action='/fourth'>Delicious in Dungeon</Button>,
      <Button action='/lose'>KAIJU No.8</Button>,
    ],
  })
})

app.frame('/fourth', (c) => {

  return c.res({
    image: 'https://i.ibb.co/7QC5L8Q/fourth.png',
    intents: [
      <Button action='/lose'>Sound! Euphonium</Button>,
      <Button action='/lose'>Jellyfish Can not Swim in the Night</Button>,
      <Button action='/fifth'>Spice and Wolf: Merchant Meets The Wise wolf</Button>,
    ],
  })
})

app.frame('/fifth', (c) => {

  return c.res({
    image: 'https://i.ibb.co/Q8sZbhC/fifth.png',
    intents: [
      <Button action='/lose'>Chillin' in Another World with Level 2 Super Cheat Powers</Button>,
      <Button action='/lose'>Mysterious Disappearances</Button>,
      <Button action='/win'>Mushoku Tensei: Jobless Reincarnation</Button>,
    ],
  })
})


app.frame('/win', (c) => {

  return c.res({
    image: 'https://i.ibb.co/JF05TQJ/win.png',
    intents: [
      <Button.Link href="https://warpcast.com/mortyje">
        Follow me please</Button.Link>
    ],
  })
})

app.frame('/lose', (c) => {

  return c.res({
    image: 'https://i.ibb.co/k1k0VJm/lose.png',
    intents: [
      <Button.Reset>Try again</Button.Reset>
    ],
  })
})

devtools(app, { serveStatic })

export const GET = handle(app)
export const POST = handle(app)
