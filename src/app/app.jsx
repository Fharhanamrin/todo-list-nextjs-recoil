'use client';
import React from 'react'
import { RecoilRoot } from 'recoil'

function MyApp({children}) {
  return (
    
    <RecoilRoot>
        {children}
    </RecoilRoot>
  )
}

export default MyApp