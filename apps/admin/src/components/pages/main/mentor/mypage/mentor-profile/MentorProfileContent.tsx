import {
  MemberInfo,
  MentorProfileInfo,
} from '@repo/admin/components/types/main/mentor/mentorTypes';
import FitImage from '@repo/admin/components/ui/image/fit-image';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@repo/ui/components/ui/card';
import { Mail, Phone, User, Briefcase, Calendar, Users } from 'lucide-react';

export default function MentorProfileContent({
  profileImageUrl,
  memberRequestDto,
  mentorProfileRequestDto,
}: {
  profileImageUrl: string;
  memberRequestDto: MemberInfo;
  mentorProfileRequestDto: MentorProfileInfo;
}) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center mb-8">
        <div className="w-48 h-48 mb-4 overflow-hidden">
          <FitImage
            className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
            src={profileImageUrl}
            alt={memberRequestDto.name}
          />
        </div>
        <h2 className="text-3xl font-bold text-gray-800">
          {memberRequestDto.name}
        </h2>
        <p className="text-xl text-gray-600">@{memberRequestDto.nickName}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">연락처 정보</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-2 text-gray-500" />
              <span>{memberRequestDto.email}</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-2 text-gray-500" />
              <span>{memberRequestDto.phoneNumber}</span>
            </div>
            <div className="flex items-center">
              <User className="w-5 h-5 mr-2 text-gray-500" />
              <span>계정 ID: {memberRequestDto.accountId}</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">멘토 프로필</CardTitle>
          </CardHeader>
          <CardContent>
            {mentorProfileRequestDto ? (
              <div className="space-y-4">
                <div className="flex items-center">
                  <Briefcase className="w-5 h-5 mr-2 text-gray-500" />
                  <span>분야: {mentorProfileRequestDto.mentoringField}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-gray-500" />
                  <span>나이: {mentorProfileRequestDto.age}세</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-2 text-gray-500" />
                  <span>성별: {mentorProfileRequestDto.gender}</span>
                </div>
                <div className="flex items-center">
                  <Briefcase className="w-5 h-5 mr-2 text-gray-500" />
                  <span>경력: {mentorProfileRequestDto.jobExperience}</span>
                </div>
              </div>
            ) : (
              <p className="text-gray-500 italic">등록된 소개가 없습니다.</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
