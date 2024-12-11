import { HashtagDataType } from '@repo/ui/types/CommonType.ts';

const CustomMentorDescriptionHashtag = ({
  hashtags,
}: {
  hashtags: HashtagDataType[] | null;
}) => {
  return (
    <div className="flex flex-wrap gap-2">
      {hashtags
        ? hashtags.map((hashtag, index) => {
            return (
              <button
                key={index}
                type="button"
                className={`flex items-center font-bold gap-2 py-2 px-2 rounded-xl w-fit text-md bg-transparent text-adaptorsYellow cursor-default`}
              >
                # {hashtag.hashtagName}
              </button>
            );
          })
        : null}
    </div>
  );
};

export default CustomMentorDescriptionHashtag;
