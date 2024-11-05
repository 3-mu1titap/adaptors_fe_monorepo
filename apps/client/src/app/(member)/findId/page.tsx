import FindIdForm from '../../../components/form/FindIdForm';
import AuthFrame from '../../../components/pages/auth/AuthFrame';
import Links from '../../../components/pages/auth/Links';

export default function page() {
  return (
    <main className="relative h-[100vh] w-[100vw] bg-[url('/assets/images/authBackground.svg')] bg-cover bg-center bg-no-repeat bg-fixed ">
      <AuthFrame title="아이디 찾기" style="top-[20%]">
        <FindIdForm />
        <Links currentPage={'/findId'} />
      </AuthFrame>
    </main>
  );
}
