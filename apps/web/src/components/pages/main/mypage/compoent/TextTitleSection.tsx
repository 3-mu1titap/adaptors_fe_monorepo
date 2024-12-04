import React from 'react';

function TextTitleSection({
  subtitle,
  title,
}: {
  subtitle: string;
  title: string;
}) {
  return (
    <div className="text-start py-4 mb-2">
      <span className="text-sm text-gray-600 uppercase tracking-wider">
        {subtitle}
      </span>
      <h2 className="text-3xl font-bold mt-1">{title}</h2>
    </div>
  );
}

export default TextTitleSection;
