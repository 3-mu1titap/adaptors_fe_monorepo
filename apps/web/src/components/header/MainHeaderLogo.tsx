'use client';
import AdaptorsLogoIcon from '@components/assets/icons/AdaptorsLogo';
import { CustomToolTip } from '@repo/ui/components/ui/custom/index';
import Link from 'next/link';

function MainHeaderLogo() {
  return (
    <CustomToolTip text="Adaptors Logo">
      <Link href="/home">
        <AdaptorsLogoIcon className="w-[120px] md:w-[130px] lg:w-[150px]" />
        <h1 className="sr-only">Adaptors</h1>
      </Link>
    </CustomToolTip>
  );
}
export default MainHeaderLogo;
