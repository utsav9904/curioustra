import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-200">
                        <div className="p-6 text-gray-600 dark:text-gray-100">
                            Welcome Admin
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
