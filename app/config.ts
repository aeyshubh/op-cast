// use NODE_ENV to not have to change config based on where it's deployed
export const NEXT_PUBLIC_URL ='https://op-cast.vercel.app';
  process.env.NODE_ENV == 'development' ? 'http://localhost:3000' : 'https://op-cast.vercel.app/';
export const TOKEN_ADDRESS = '0xe0526c748C85b7a277E34FEfbfC94e9687140bD4';
