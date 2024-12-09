import UserProfile from '@repo/ui/components/ui/custom/UserProfile';
import AdaptorsLogoIcon from '../assets/icons/AdaptorsLogo';
import {
  BellDot,
  CreditCard,
  Keyboard,
  Settings,
  User,
  Wallet2Icon,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@repo/ui/components/ui/dropdown';
import { DropdownMenuShortcut } from '@repo/ui/components/ui/dropdown';
import { CustomToolTip } from '@repo/ui/components/ui/custom/index';

const initialUserData = [
  {
    userUuid: '389d459sssc8f21',
    menteeImageUrl: 'https://picsum.photos/200/200?random=14',
  },
  {
    userUuid: '389d45sd9c8f21',
    menteeImageUrl: 'https://picsum.photos/200/200?random=23',
  },
  {
    userUuid: '389d459c8f21',
    menteeImageUrl: 'https://picsum.photos/200/200?random=56',
  },
  {
    userUuid: '389d459dsc8f21',
    menteeImageUrl: 'https://picsum.photos/200/200?random=78',
  },
];

export default function MentoringHeader() {
  return (
    <header className="fixed top-0 left-0 w-full py-6 px-4 lg:px-10 border-b-[1px] border-[#F3F3F3] bg-white z-[10]">
      <div className="flex justify-between items-center">
        <AdaptorsLogoIcon className="w-[140px] mt-0 flex items-center gap-2" />
        <div className="flex justify-center items-center gap-2">
          {/* <CustomReviewerItem
            initialUserData={initialUserData}
            className="flex lg:!hidden"
            userCount={30}
            reviewCount={293938}
          /> */}
          <CustomToolTip text="Wallet 400321">
            <div className="flex items-center gap-1 relative">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-adaptorsYellow z-10">
                <Wallet2Icon className="w-5 h-5 text-black" />
              </div>
              <p className="hidden md:!block text-sm pl-3 pr-8 py-1 bg-black text-white rounded-md absolute right-4">
                400321
              </p>
            </div>
          </CustomToolTip>
          <CustomToolTip text="Notifications">
            <div className="flex items-center gap-1 relative">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-50 border-slate-200 border-[1px]">
                <BellDot className="w-5 h-5 text-black" />
              </div>
              <p className="text-sm w-3 h-3 rounded-full bg-adaptorsYellow animate-caret-blink top-[0] absolute right-0"></p>
            </div>
          </CustomToolTip>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <UserProfile size={40} />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <User />
                  <span>Profile</span>
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CreditCard />
                  <span>Billing</span>
                  <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings />
                  <span>Settings</span>
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Keyboard />
                  <span>Keyboard shortcuts</span>
                  <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
