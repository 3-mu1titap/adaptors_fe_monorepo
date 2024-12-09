import { CustomToolTip } from './index';

function UserCount({
  size,
  className,
  count,
}: {
  size?: number;
  className?: string;
  count?: number;
}) {
  const defaultSize = size || 40;
  const defaultCount = count || 0;
  return (
    <CustomToolTip text={'profile'}>
      <div
        className={`rounded-full bg-blue-200 overflow-hidden cursor-pointer flex justify-center items-center text-sm text-blue-700 font-extrabold ${className}`}
        style={{
          width: `${defaultSize}px`,
          height: `${defaultSize}px`,
        }}
      >
        +{defaultCount}
      </div>
    </CustomToolTip>
  );
}

export default UserCount;
