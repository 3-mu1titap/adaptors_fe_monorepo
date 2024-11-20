import Link from 'next/link';
export default function SignInTitle({ title }: { title: string }) {
  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
      <p className="text-md text-gray-600">
        계정을 가지고 있지 않으신가요?
        <Link
          href="/join"
          className="text-md ml-1 font-semibold hover:underline"
        >
          Sign Up
        </Link>
      </p>
    </div>
  );
}
