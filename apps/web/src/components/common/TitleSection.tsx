import React from 'react';

function TitleSection({
  subtitle,
  title,
}: {
  subtitle: string;
  title: string;
}) {
  return (
    <div className="text-center py-4 mt-8 mb-6">
      <span className="text-sm text-gray-600 uppercase tracking-wider">
        {subtitle}
      </span>
      <h2 className="text-4xl font-bold mt-1">{title}</h2>
    </div>
  );
}

export default TitleSection;
