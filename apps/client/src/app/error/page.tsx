import Link from 'next/link';
import React from 'react';

interface SearchParams {
  [key: string]: string;
}

function Page({ searchParams }: { searchParams: SearchParams }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-red-600">에러 발생</h1>
        <p className="mt-2 text-gray-600">
          죄송합니다. 요청을 처리하는 데 문제가 발생했습니다.
        </p>
        <p className="mt-4 text-gray-500">
          에러 메시지: {searchParams.message || '알 수 없는 에러입니다.'}
        </p>
        <p className="flex justify-end mt-4">
          <Link
            href="/login"
            className="px-4 py-2 bg-adaptorsYellow text-white rounded"
          >
            홈으로 돌아가기
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Page;
