'use client';

import NavbarCategoryies from './NavbarCategoryies';
import Funnel from '../../common/Funnel/Funnel';
import useFunnel from '../../common/Funnel/useFunnel';
import HomeLayout from '../main/home';
const steps = ['Home', 'Category', 'MentoringPush', 'Feedback', 'Search'];
function NavbarLayout() {
  const { level, step, onSelectStep } = useFunnel({ steps });
  return (
    <main className="flex-col w-full h-[78px]">
      <NavbarCategoryies level={level} onSelectStep={onSelectStep} />
      <div className="flex flex-col">
        <Funnel step={step}>
          <Funnel.Step name="Home">
            <HomeLayout />
          </Funnel.Step>
          <Funnel.Step name="Category">
            <div>3</div>
          </Funnel.Step>
          <Funnel.Step name="MentoringPush">
            <div>3</div>
          </Funnel.Step>
          <Funnel.Step name="Feedback">
            <div>4</div>
          </Funnel.Step>
          <Funnel.Step name="Search">
            <div>5</div>
          </Funnel.Step>
        </Funnel>
      </div>
    </main>
  );
}

export default NavbarLayout;
