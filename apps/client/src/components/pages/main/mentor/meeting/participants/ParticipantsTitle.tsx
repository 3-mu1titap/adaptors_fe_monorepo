import UserAddIcon from '../../../../../assets/icons/UserAdd';

function ParticipantsTitle({ addParticipant }: { addParticipant: () => void }) {
  return (
    <div className="flex h-[20px] justify-between items-center">
      <h3 className="text-sm font-bold">Participants</h3>
      <button
        onClick={addParticipant}
        className="flex items-center text-xs bg-[#DFEBFF] text-adaptorsBlue px-2 py-1 rounded-2xl hover:bg-gray-200 transition-colors"
      >
        <UserAddIcon />
        Add Participant
      </button>
    </div>
  );
}

export default ParticipantsTitle;
