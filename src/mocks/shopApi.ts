import { rest } from 'msw';

const FOLLOWERS = [
  {
    id: 'mario',
    name: 'Mario',
    avatar: 'https://www.gravatar.com/avatar/1?d=monsterid&f=y'
  },
  {
    id: 'donkeykong68',
    name: 'DK',
    avatar: 'https://www.gravatar.com/avatar/324?d=monsterid&f=y'
  },
  {
    id: 'luigi',
    name: 'Luigi',
    avatar: 'https://www.gravatar.com/avatar/293?d=monsterid&f=y'
  },
  {
    id: 'lovepeach',
    name: 'Peach',
    avatar: 'https://www.gravatar.com/avatar/442?d=monsterid&f=y'
  },
  {
    id: 'yoshiegg',
    name: 'Yoshi',
    avatar: 'https://www.gravatar.com/avatar/580?d=monsterid&f=y'
  }
];

const MENU_LIST = [
  {
    id: 1,
    name: 'Home'
  },
  {
    id: 2,
    name: 'Follower'
  },
  {
    id: 3,
    name: 'Board'
  }
];

const BOARD = [
  {
    id: '1',
    writer: 'Mario',
    title: 'How to date Peach and Mario 🥰',
    content: `MUST be publicly available (e.g. cannot be on an intranet, on a local development machine, behind HTTP Auth or some other firewall etc). Default images are passed through a security scan to avoid malicious content.
MUST be accessible via HTTP or HTTPS on the standard ports, 80 and 443, respectively.
MUST have a recognizable image extension (jpg, jpeg, gif, png, heic)
MUST NOT include a querystring (if it does, it will be ignored)`
  },
  {
    id: '2',
    writer: 'DK',
    title: 'How to get to Koopa Castle 🏰',
    content: `The Super Mario Bros. Movie may focus on the titular Italian plumbers, but it also features the character that started it all – Donkey Kong. If it weren't for him, Mario wouldn’t be where he is today without the trouble caused by Cranky Kong in the 1981 arcade game.`
  },
  {
    id: '3',
    writer: 'peach',
    title: 'Mario and Luigi, who is stronger 💪'
  },
  {
    id: '4',
    writer: 'Mario',
    title: "What if we fry Yoshi's eggs? 🍳",
    content:
      "The ultimate retro game, Super Mario Bros. is up there as one of the best of all time, and its success spawned a franchise that is still going strong all these decades later. Mario is arguably the most mainstream video game franchise of all time, in the sense that even people who have never touched a controller are likely to know about Nintendo's legendary mascot."
  },
  {
    id: '5',
    writer: 'Luigi',
    title: 'Is Peach actually enjoying being kidnapped? 👸',
    content: `Coins are a surprisingly old feature in the Mario Kart franchise. Initially appearing in the SNES-exclusive Super Mario Kart all the way back in 1992, they made a sudden reappearance in Mario Kart 7 for the Nintendo 3DS, and then continued to be found in the sequels of Mario Kart 8 and Mario Kart 8 Deluxe, too.`
  }
];

export const handlers = [
  rest.get('/followers', (req, res, ctx) => {
    //   throw new Error('Something went wrong');
    return res(
      ctx.status(200),
      ctx.delay(700),
      ctx.json({
        success: true,
        errorMessage: null,
        data: FOLLOWERS
      })
      //   ctx.json({
      //     success: false,
      //     errorMessage: '알수없는 에러입니다.',
      //     data: null
      //   })
    );
  }),
  rest.get('/menulist', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(500),
      ctx.json({
        success: true,
        errorMessage: null,
        data: MENU_LIST
      })
    );
  }),
  rest.get('/board', (req, res, ctx) => {
    //   return res(ctx.status(404), ctx.json({ success: true, errorMessage: 'Data not found', data: null }));
    return res(ctx.status(200), ctx.delay(300), ctx.json({ success: true, errorMessage: null, data: BOARD }));
  })
];
