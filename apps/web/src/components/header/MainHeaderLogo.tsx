'use client';
import { CustomToolTip } from '@repo/ui/components/ui/custom/index';
import AdaptorsLogoIcon from '@repo/web/components/assets/icons/AdaptorsLogo';
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
