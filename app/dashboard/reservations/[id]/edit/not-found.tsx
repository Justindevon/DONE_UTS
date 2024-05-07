import Link from 'next/link';
import { FaceFrownIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';

export default function NotFound() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10">
                <div className="text-center">
                    <div className="flex items-center justify-center">
                        <ExclamationCircleIcon className="h-12 w-auto text-red-500" />
                        <h2 className="ml-2 text-xl font-semibold text-gray-900">404 Page Not Found</h2>
                    </div>
                    <p>Sorry, the page you are looking for could not be found.</p>
                    <Link
                        href="/dashboard/reservations" 
                        className="mt-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-800 focus:outline-none focus:ring-indigo focus:border-indigo active:bg-indigo active:text-white transition duration=150 ease-in-out"
                    >
                        Go Back to Home
                    </Link>
                </div>
            </div>
        </main>
    );
}