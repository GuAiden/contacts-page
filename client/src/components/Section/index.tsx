import React from 'react';

type SectionProps = {
  children: React.ReactNode;
}

function Section({
  children,
}: SectionProps) {
  return (
    <div className="m-3 w-full md:w-11/12 lg:w-10/12 mx-auto">
      {children}
    </div>
  );
}

export default Section;
