"use client"
import { useSession } from '@/lib/auth-client';
import Image from 'next/image';
import React from 'react';

const Profile = () => {
  const {data:session,isPending} =useSession()
  const user=session?.user
  console.log(user);
  return (
    <div className='bg-white p-2 rounded-xl flex gap-2'>
      {/* image */}
    <div>
        <Image
          src={session?.user?.image || "/default-avatar.png"}
          alt='user avater image'
          width={50}
          height={50}
        />
    </div>
    {/* content */}
    <div className='text-black'>
      <h1>{user?.name}</h1>
    </div>
    </div>
  );
};

export default Profile;