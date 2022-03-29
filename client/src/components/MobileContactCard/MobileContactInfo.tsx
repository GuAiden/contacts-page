import React from 'react';

type MobileContactInfoProps = {
  title: string,
  value: string,
}

function MobileContactInfo({
  title,
  value,
}: MobileContactInfoProps) {
  return (
    <div className="mt-2 flex flex-row justify-center items-center">
      <p className="text-sm font-bold text-gray-400">
        {title}
        :
      </p>
      <p className="text-sm ml-2 text-gray-200">
        {value}
      </p>
    </div>
  );
}

export default MobileContactInfo;
