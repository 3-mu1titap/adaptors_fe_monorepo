import FindIdForm from '@repo/web/components/form/FindIdForm';
import AuthFrame from '@repo/web/components/pages/member/AuthFrame';
import Links from '@repo/web/components/pages/member/Links';
import SignInTitle from '@repo/web/components/pages/member/SignInTitle';

export default function page() {
  return (
    <main className="relative h-[100vh] w-[100vw] bg-[#F9F9F9] ">
      <AuthFrame style="top-[20%]">
        <SignInTitle title="아이디 찾기" />
        <FindIdForm />
        <Links currentPage={'/findId'} />
      </AuthFrame>
    </main>
  );
}
