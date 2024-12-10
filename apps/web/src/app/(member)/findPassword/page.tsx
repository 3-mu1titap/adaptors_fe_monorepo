import FindPasswordForm from '@repo/web/components/form/FindPasswordForm';
import AuthFrame from '@repo/web/components/pages/member/AuthFrame';
import Links from '@repo/web/components/pages/member/Links';
import SignInTitle from '@repo/web/components/pages/member/SignInTitle';

export default function page() {
  return (
    <main className="relative h-[100vh] w-[100vw] bg-[#F9F9F9]">
      <AuthFrame style="top-[20%]">
        <SignInTitle title="비밀번호 재설정" />
        <FindPasswordForm />
        <Links currentPage={'/findPassword'} />
      </AuthFrame>
    </main>
  );
}
