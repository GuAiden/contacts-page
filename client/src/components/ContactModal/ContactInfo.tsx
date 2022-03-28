import React from 'react';

type ContactInfoProps = {
  title: string,
  value: string,
}

function ContactInfo({
  title,
  value,
}: ContactInfoProps) {
  return (
    <div className="mt-2 flex flex-row justify-start items-center">
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

export default ContactInfo;
