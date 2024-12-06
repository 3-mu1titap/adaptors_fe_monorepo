'use client';
import AdaptorsLogoIcon from '@components/assets/icons/AdaptorsLogo';
import { CustomTooltip } from '@repo/ui/components/ui/custom/CustomToolTip';
import Link from 'next/link';
function MainHeaderLogo() {
  return (
    <CustomTooltip text="Adaptors Logo">
      <Link href="/home">
        <AdaptorsLogoIcon className="w-[120px] md:w-[130px] lg:w-[150px]" />
        <h1 className="sr-only">Adaptors</h1>
      </Link>
    </CustomTooltip>
  );
}
export default MainHeaderLogo;
