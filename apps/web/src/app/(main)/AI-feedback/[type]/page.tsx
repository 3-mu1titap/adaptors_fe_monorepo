import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@repo/ui/components/ui/pagenation';
import { CommonLayout } from '@repo/web/components/common/commomLayout';
const categories = [
  { id: 'COVER_LETTER', name: '자기소개서' },
  { id: 'RESUME', name: '이력서' },
  { id: 'PORTFOLIO', name: '포트폴리오' },
];

export default function Page({ params }: { params: { type: string } }) {
  return (
    <CommonLayout
      type="main"
      className="mt-[7rem] px-4 sm:px-28 md:px-20 xl:px-44"
    >
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </CommonLayout>
  );
}
