import { MainLayout } from '../components/layouts/MainLayout';
import Link from 'next/link';

export default function PageNotFound() {
  return (
    <div className="text-center">
      <h1 className="mb-4">404 - Page Not Found</h1>
      <Link href="/">
        <a className="cursor-pointer rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600">
          Go back home
        </a>
      </Link>
    </div>
  );
}

PageNotFound.layout = MainLayout;
