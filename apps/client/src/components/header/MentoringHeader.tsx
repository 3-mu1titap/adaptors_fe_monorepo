import UserProfile from '@repo/ui/components/ui/custom/UserProfile';

export default function MentoringHeader() {
  return (
    <header className="fixed top-0 left-0 w-full py-6 px-10 border-b-[1px] border-[#F3F3F3] bg-white z-[10]">
      <div className="flex justify-end items-center">
        <UserProfile size={40} />
      </div>
    </header>
  );
}
