import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (<>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="description" content="You can play here rock-paper-scisor game. A time pass place for you to play your one of the favoutite childhood game in a digital format." />
      <meta name="keywords" content="stone game, rock-paper-scisor, rock-paper-scisor game, stone-paper-scissor game, stone paper scissor game, rock paper scissor game" />
      <meta name="author" content="Innovation" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name='robots' content="all" />
      <title>Rock, Paper and Scissors</title>
    </Head>
    <Component {...pageProps} />
  </>)
}

export default MyApp
