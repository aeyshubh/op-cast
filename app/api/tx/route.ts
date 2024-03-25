

import { FrameRequest,getFrameHtmlResponse } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';
import { encodeFunctionData, parseEther,encodePacked, stringToBytes  } from 'viem';
import { avalanche,baseSepolia,avalancheFuji, optimismSepolia,base, optimism } from 'viem/chains';
import interchainToken from '../../_contracts/interchainToken';
import { getFarcasterUserAddress } from '@coinbase/onchainkit/farcaster';
 import type { FrameTransactionResponse } from '@coinbase/onchainkit/frame';
import {TOKEN_ADDRESS,NEXT_PUBLIC_URL} from '../../config';
import { getFrameMessage } from 'frames.js';
async function getResponse(req: NextRequest): Promise<NextResponse | Response> {
  const body = await req.json();
  const message = await getFrameMessage(body);

console.log("Message : "+JSON.stringify(message));

  console.log("Body : "+JSON.stringify(body));
  let contractAddress = body.untrustedData.inputText.split(":")[0];
  let amount = body.untrustedData.inputText.split(":")[1];
  console.log("Contract Address : "+contractAddress);
  console.log("Amount : "+amount);

  const text = message.inputText || '';
  let state = {
    page: 0,
  };
  try {
    state = JSON.parse(decodeURIComponent(message.state as string));
  } catch (e) {
    console.error(e);
  }

  if(body.untrustedData.buttonIndex ==1){
    let result = encodePacked(['address'], [message.connectedAddress as any])
    const data = encodeFunctionData({
      abi: interchainToken,
      functionName: 'interchainTransfer',
      args: ["optimism",result,parseEther(amount),'0x'],
    });
  
    const txData: FrameTransactionResponse = {
      chainId: `eip155:${base.id}`, // Remember Base Sepolia might not work on Warpcast yet
      method: 'eth_sendTransaction',
      params: {
        abi: [],
        data,
        to: contractAddress,
        value: parseEther('0.0003').toString(), //
      },
    };
    return NextResponse.json(txData);
  }else{
    let result = encodePacked(['address'], [message.connectedAddress as any])

    const data = encodeFunctionData({
      abi: interchainToken,
      functionName: 'interchainTransfer',
      args: ["base",result,parseEther(amount),'0x'],
    });
  
    const txData: FrameTransactionResponse = {
      chainId: `eip155:${optimism.id}`, // Remember Base Sepolia might not work on Warpcast yet
      method: 'eth_sendTransaction',
      params: {
        abi: [],
        data,
        to: contractAddress,
        value: parseEther('0.0003').toString(), // 0.00004 ETH
      },
    };
    return NextResponse.json(txData);
  }

}

export async function POST(req: NextRequest): Promise<Response> {
  console.log("Request : "+JSON.stringify(req));
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
