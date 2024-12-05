'use client';
import AdaptorsLogoIcon from '@components/assets/icons/AdaptorsLogo';
import { Tooltip } from '@components/ui/ToollTip/ToolTip';
import Link from 'next/link';
function MainHeaderLogo() {
  return (
    <Tooltip text="Adaptors Logo">
      <Link href="/home">
        <AdaptorsLogoIcon className="w-[120px] md:w-[130px] lg:w-[150px]" />
        <h1 className="sr-only">Adaptors</h1>
      </Link>
    </Tooltip>
  );
}
export default MainHeaderLogo;
