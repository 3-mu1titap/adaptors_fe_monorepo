import { useEffect, useState } from 'react';
import {
  addTagList,
  getTagList,
  Tag,
} from '../../../actions/profile/hashtagData';
import useUserStore from '../../../store/uuidStore';
import JoinStepButton from '../../ui/Button/JoinStepButton';
import CheckboxButton from '../../ui/checkbox/CheckBox';

export default function HashTag({
  handleButton,
}: {
  handleButton: () => void;
}) {
  const [tagData, setTagData] = useState<Tag[]>([]); // 태그 데이터를 저장할 상태
  const [selectedValues, setSelectedValues] = useState<number[]>([]); // 선택된 값의 배열
  const [currentPage, setCurrentPage] = useState(0); // 현재 페이지 상태 추가
  const { uuid } = useUserStore();

  // tagData를 10개씩 나누는 함수
  const chunkArray = (arr: Tag[], size: number): Tag[][] => {
    const chunks: Tag[][] = [];
    for (let i = 0; i < arr?.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  useEffect(() => {
    const getHashTagData = async () => {
      const data = await getTagList();
      setTagData(data); // 태그 데이터를 가져와서 상태에 저장
    };
    getHashTagData();
  }, []);

  const chunks = chunkArray(tagData, 10); // 10개씩 나누어 페이지 처리

  // 이전 페이지로 이동
  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0)); // 첫 페이지보다 작게 가지 않도록
  };

  // 다음 페이지로 이동
  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, chunks.length - 1)); // 마지막 페이지보다 커지지 않도록
  };

  const postHashtag = async () => {
    const selectedTags = selectedValues.map((hashtagId) => ({
      hashtagId,
    }));

    const data = await addTagList(uuid, selectedTags);
    if (data) {
      handleButton();
    }
  };

  return (
    <section className="py-2 space-y-1 h-full flex flex-col justify-between">
      <span>
        <h2 className="text-2xl font-bold">관심 키워드를 선택해주세요</h2>
        <h3 className="text-slate-500 text-lg mt-1 mb-8">*최대 5개</h3>

        {/* 현재 페이지에 해당하는 태그들을 전달 */}
        <div className="h-72 mb-4 overflow-y-scroll">
          {tagData.length > 0 && (
            <CheckboxButton
              name="hobbies"
              options={tagData} // 현재 페이지의 태그들을 전달
              selectedValues={selectedValues}
              onChange={setSelectedValues}
            />
          )}
        </div>
      </span>
      <p
        className={`error text-center ${selectedValues.length == 0 ? 'visible mt-3' : 'invisible'}`}
      >
        해시태그를 1개 이상 선택해 주세요
      </p>
      <JoinStepButton onClick={postHashtag} text="완료하기" />
    </section>
  );
}
