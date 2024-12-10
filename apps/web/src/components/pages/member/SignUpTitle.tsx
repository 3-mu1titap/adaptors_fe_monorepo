import XIcon from '@repo/web/components/assets/icons/X';

export default function SignUpTitle() {
  return (
    <div className="space-y-2">
      <header className="w-full fixed top-7">
        <button className="fixed right-7">
          <XIcon />
        </button>
      </header>
      <h1 className="text-2xl font-bold tracking-tight">SIGN UP</h1>
      <p className="text-md text-gray-600">
        어댑터 서비스에 오신것을 환영합니다
      </p>
    </div>
  );
}
