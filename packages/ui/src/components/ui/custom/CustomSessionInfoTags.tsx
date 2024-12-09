import { ChartColumn, File, User } from 'lucide-react';
export interface SessionInfo {
  id: number;
  infoName: string;
  infoValue: number;
  icon: JSX.Element;
}
const DefaultSessionInfo = [
  {
    id: 1,
    infoName: 'Session',
    infoValue: 8,
    icon: <File size={12} className="text-blue-500" />,
  },
  {
    id: 2,
    infoName: 'Students',
    infoValue: 68,
    icon: <User size={12} className="text-blue-500" />,
  },
  {
    id: 3,
    infoName: 'beginner',
    infoValue: 0,
    icon: <ChartColumn size={12} className="text-blue-500" />,
  },
];
function CustomSessionInfoTags({
  SessionInfoProps,
}: {
  SessionInfoProps?: SessionInfo[];
}) {
  const SessionInfo = SessionInfoProps ? SessionInfoProps : DefaultSessionInfo;
  return (
    <div className="flex items-center justify-start gap-3">
      {SessionInfo.map((info) => (
        <CustomInfo key={info.id} info={info} />
      ))}
    </div>
  );
}
export default CustomSessionInfoTags;
export const CustomInfo = ({ info }: { info: SessionInfo }) => {
  return (
    <>
      <div className="w-5 h-5 bg-slate-200 rounded-sm flex items-center justify-center">
        {info.icon}
      </div>
      <p className="text-md">
        {info.infoName} {info.infoValue}
      </p>
    </>
  );
};
