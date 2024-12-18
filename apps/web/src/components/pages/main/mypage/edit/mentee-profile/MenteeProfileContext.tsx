import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@repo/ui/components/ui/card';
import {
  MenteeInfo,
  MenteeProfileInfo,
} from '@repo/web/components/types/mentee/MenteeType';
import FitImage from '@repo/web/components/ui/image/fit-image';
import { Briefcase, Calendar, Mail, Phone, User, Users } from 'lucide-react';

export default function MenteeProfileContent({
  profileImageUrl,
  memberRequestDto,
  menteeProfileRequestDto,
}: {
  profileImageUrl: string;
  memberRequestDto: MenteeInfo;
  menteeProfileRequestDto: MenteeProfileInfo;
}) {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center mb-8">
          <div className="w-48 h-48 overflow-hidden">
            <FitImage
              className="w-full h-auto overflow-hidden rounded-full border-4 border-white"
              src={profileImageUrl}
              alt={memberRequestDto.name}
            />
          </div>

          <h2 className="text-3xl font-bold">{memberRequestDto.name}</h2>
          <p className="text-gray-600">@{memberRequestDto.nickName}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Information</CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-gray-500" />
                <span className="">
                  <span className="text-lg font-bold">Email:</span>{' '}
                  {memberRequestDto.email}
                </span>
              </div>

              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-gray-500" />
                <span>
                  <span className="text-lg font-bold">Phone:</span>{' '}
                  {memberRequestDto.phoneNumber}
                </span>
              </div>

              <div className="flex items-center">
                <User className="w-5 h-5 mr-2 text-gray-500" />
                <span>
                  <span className="text-lg font-bold">Account ID:</span>{' '}
                  {memberRequestDto.accountId}
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="flex flex-col space-y-1">
            <CardHeader className="font-semibold mb-2">
              <CardTitle className="text-2xl">Profile</CardTitle>
            </CardHeader>

            <CardContent>
              {menteeProfileRequestDto ? (
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-gray-500" />
                    <span>나이: {menteeProfileRequestDto.age}세</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 mr-2 text-gray-500" />
                    <span>성별: {menteeProfileRequestDto.gender}</span>
                  </div>

                  <div className="flex items-center">
                    <Briefcase className="w-5 h-5 mr-2 text-gray-500" />
                    <span>학력: {menteeProfileRequestDto.educationLevel}</span>
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="w-5 h-5 mr-2 text-gray-500" />
                    <span>직종: {menteeProfileRequestDto.jobType}</span>
                  </div>

                  <div className="flex items-center">
                    <Briefcase className="w-5 h-5 mr-2 text-gray-500" />
                    <span>
                      지원횟수: {menteeProfileRequestDto.jobApplicationCount}
                    </span>
                  </div>
                </div>
              ) : (
                <p>현재 등록된 프로필 정보가 없습니다.</p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
