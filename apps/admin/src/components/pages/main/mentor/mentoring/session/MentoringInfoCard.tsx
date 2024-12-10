import Image from 'next/image';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@repo/ui/components/ui/card';
import { Badge } from '@repo/ui/components/ui/badge';
import { MentoringCategoryDataType } from '@repo/client/components/types/main/mentor/mentoringTypes';
import FitImage from '@repo/client/components/ui/image/fit-image';

interface MentoringInfoProps {
  name: string;
  description: string;
  detail: string;
  thumbnailUrl: string;
  mentoringCategoryList: MentoringCategoryDataType[];
}

export default function MentoringInfoCard({
  name,
  description,
  detail,
  thumbnailUrl,
  mentoringCategoryList,
}: MentoringInfoProps) {
  return (
    <Card className="w-full mb-8 overflow-hidden min-w-[380px]">
      <div className="">
        <div className="relative h-128 overflow-hidden">
          <FitImage src={thumbnailUrl} alt={name} />
        </div>
        <div className=" p-6">
          <CardHeader>
            <CardTitle className="text-3xl font-bold mb-2">{name}</CardTitle>
            <p className="text-lg text-gray-600 mb-4">{description}</p>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">{detail}</p>
            <div className="flex flex-wrap gap-2">
              {mentoringCategoryList &&
                mentoringCategoryList.map((category) => (
                  <Badge key={category.topCategoryName} variant="secondary">
                    {category.topCategoryName}
                  </Badge>
                ))}
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}
