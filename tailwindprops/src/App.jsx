import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TeamMember from './components/TeamMember';

function App() {
  const member1 =
  {
    name: 'Alex Morgan',
    role: 'CEO & Founder',
    description: 'Visionary leader with 15+ years of experience in tech innovation.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    linkedin: '#',
    twitter: '#',
    email: 'alex@example.com',
  }
  const member2 =
  {
    name: 'John Doe',
    role: 'CTO',
    description: 'Tech guru and full stack expert.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    linkedin: '#',
    twitter: '#',
    email: 'john@example.com',
  }

  return (
    <>
      <h1>Our Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-8">
        <TeamMember name="Riya"
          role="CEO & Founder"
          description="15+ years of experience in tech innovation."
          image="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          linkedin="#"
          twitter="#"
          email="alex@example.com" />
        <TeamMember name="Ritika"
          role="Software Developer"
          description=" 10+ years of experience in tech innovation."
          image="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
          " linkedin="#"
          twitter="#"
          email="alex@example.com" />
        <TeamMember name="Priya"
          role="Manager"
          description=" 12+ years of experience in tech innovation."
          image="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          linkedin="#"
          twitter="#"
          email="alex@example.com" />

      </div>
    </>
  );
}

export default App;
