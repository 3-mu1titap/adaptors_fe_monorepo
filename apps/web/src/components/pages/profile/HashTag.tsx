import { useEffect, useState } from 'react';
import {
  addTagList,
  getTagList,
  Tag,
} from '../../../actions/profile/hashtagData';
import useUserStore from '../../../store/uuidStore';

import NextButton from '@components/ui/Button/NextButton';
import CheckboxButton from '../../ui/checkbox/CheckBox';

export default function HashTag({
  handleButton,
}: {
  handleButton: () => void;
}) {
  const [tagData, setTagData] = useState<Tag[]>([]);
  const [selectedValues, setSelectedValues] = useState<number[]>([]);
  const { uuid } = useUserStore();
  useEffect(() => {
    const getHashTagData = async () => {
      const data = await getTagList();
      setTagData(data);
    };
    getHashTagData();
  }, []);

  const postHashtag = async () => {
    const selectedTags = selectedValues.map((hashtagId) => ({
      hashtagId,
    }));

    await addTagList(uuid, selectedTags);
    handleButton();
  };

  return (
    <section className="py-2 space-y-1 h-full flex flex-col justify-between">
      <span>
        <h2 className="text-2xl font-bold">관심 키워드를 선택해주세요</h2>
        <h3 className="text-slate-500 text-lg mt-1 mb-8">*최대 5개</h3>

        {/* 현재 페이지에 해당하는 태그들을 전달 */}
        <div className="sm:h-72 mb-4 overflow-y-scroll">
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
      <NextButton onClick={postHashtag} text="완료하기" />
    </section>
  );
}
