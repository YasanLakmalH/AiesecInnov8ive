import React from 'react'
import { options } from '../api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const Page = async () => {
    const session = await getServerSession(options);

    if(!session){
        redirect('/api/auth/signin?callbackUrl=/dashboard');
    }
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard</p>
    </div>
  )
}

export default Page;
