import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      action: 'tx',
      label: 'Base -> OP',
      target: `${NEXT_PUBLIC_URL}/api/tx`,
      postUrl: `${NEXT_PUBLIC_URL}/api/tx-success`,
    },
    {
      action: 'tx',
      label: 'OP -> Base',
      target: `${NEXT_PUBLIC_URL}/api/tx`,
      postUrl: `${NEXT_PUBLIC_URL}/api/tx-success`,
    },
    {
      action: 'link',
      label: '👀',
      target: `https://axelarscan.io/transfers/search`,
    },

  ],
  input:{
   text:'Enter token Address: Amount',
  },
  image: {
    src: `${NEXT_PUBLIC_URL}/smooth.PNG`,
    aspectRatio: '1:1',
  },
  postUrl: `https://www.youtube.com/watch?v=mGkrbzJZCoE`,
});

export const metadata: Metadata = {
  title: 'Interchain Express',
  description: 'Move tokens Interchain',
openGraph: {
    title: 'Move token Interchain',
    description: 'Move token Interchain',
    images: [`${NEXT_PUBLIC_URL}/smooth.PNG`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Move token Interchain</h1>
    </>
  );
}
