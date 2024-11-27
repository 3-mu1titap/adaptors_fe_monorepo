import React from 'react';

function MentorProfile({ mentoruuid }: { mentoruuid: string }) {
  return (
    <div className="h-[200px]">
      <span className="text-4xl text-black">{mentoruuid}</span>
      <span>fasfsf</span>
    </div>
  );
}

export default MentorProfile;
