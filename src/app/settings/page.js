'use client'
// Import necessary modules
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import SideBar from '../components/sidebar';

function Settings() {
  const router = useRouter();

  async function deleteAll() {
    try {
      const reqbody = {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ type: 'all' }),
      };
      const response = await fetch(`/api/deletedata`, reqbody);
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  }

  // Sample user profile information (replace with actual user data)
  const userProfile = {
    fullName: 'Jack Toronto',
    email: 'jack@example.com',
    avatar: 'https://source.unsplash.com/random/100x100',
  };

  // Placeholder function for sign out logic
  const signOut = () => {
    // Implement your sign-out logic here
    // For example, clear authentication token, cookies, etc.
    console.log('Signing out...');
    // Redirect to the sign-in page after sign-out
    router.push('/signin');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <SideBar />

      <div className="flex-1 min-h-screen container p-6 mx-auto sm:p-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
          <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Settings</h3>
          </div>

          <div className="px-4 py-5 divide-y divide-gray-200">
            {/* User Profile Section */}
            <div className="px-4 sm:px-0">
              <h3 className="text-base font-semibold leading-7 text-gray-900">User Profile</h3>
            </div>
            <div className="mt-6 border-t border-gray-100">
              <dl className="divide-y divide-gray-100">
                {/* Full Name */}
                <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Full Name</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{userProfile.fullName}</dd>
                </div>

                {/* Email */}
                <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Email</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{userProfile.email}</dd>
                </div>

                {/* Avatar */}
                <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Avatar</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <img src={userProfile.avatar} alt="Avatar" className="w-10 h-10 rounded-full" />
                  </dd>
                </div>
              </dl>
            </div>

             {/* Delete Invoices Section */}
             <div className="px-4 py-5 sm:px-0">
              <h3 className="text-base font-semibold leading-7 text-gray-900">Delete Invoices</h3>
              <button
                className="mt-1 text-sm leading-6 text-red-600 hover:text-red-700 focus:outline-none focus:underline sm:mt-0"
                onClick={deleteAll}
              >
                Delete All
              </button>
            </div>

            {/* Sign Out Section */}
            <div className="px-4 py-5 sm:px-0">
              <h3 className="text-base font-semibold leading-7 text-gray-900">Sign Out</h3>
              <button
                className="mt-1 text-sm leading-6 text-red-600 hover:text-red-700 focus:outline-none focus:underline sm:mt-0"
                onClick={signOut}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
