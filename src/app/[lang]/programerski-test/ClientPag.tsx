'use client';

import React from 'react';
interface ClientProps {
  content: any;
}
const ClientPag = ({ content }: ClientProps) => {
  console.log('KONT', content);
  return <div>ClientPag</div>;
};

export default ClientPag;
