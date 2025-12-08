"use client"
import React, { useRef } from 'react'
import Mid from './(components)/mid';
import Testimonials from './(components)/Testimonials';
import KeyBenefits from './(components)/KeyBenefits';
import Last from './(components)/Last';
import Hero from './(components)/Hero';
import Sessions from './(components)/Session';


function Page() {
  const joinRef = useRef<HTMLElement>(null!)
  return (
    <div className='-mt-4 md:-mt-8'>
      <Hero targetJoinNow={joinRef} />

      <Sessions ref={joinRef} />

      {/* Our Interviewers Section & Steps to Register section */}
      <Mid />

      {/* Key Benefits */}
      <KeyBenefits />

      {/* Testimonials */}
      <Testimonials/>

      {/* Call to Action */}
      <Last targetJoinNow={joinRef} />
    </div>
  );
}

export default Page;