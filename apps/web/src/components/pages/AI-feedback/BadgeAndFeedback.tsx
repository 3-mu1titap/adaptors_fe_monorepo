import React from 'react';

export default function BadgeAndFeedback({
  children,
  feedbackText,
}: {
  children: React.ReactNode;
  feedbackText: string;
}) {
  return (
    <div className="border-2 border-dashed border-adaptorsGray p-4 mt-4 rounded-lg flex-1 bg-adaptorsGray/5">
      {children}
      <p className="mt-2 leading-7 text-lg">{feedbackText}</p>
    </div>
  );
}
