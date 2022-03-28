import React from 'react';
import { Contact } from '../../types/contact';

type MobileContactCardProps = {
  contact: Contact;
}

function MobileContactCard({
  contact,
}: MobileContactCardProps) {
  return (
    <div className="flex place-items-center bg-slate-800 flex-col mx-5 my-3 text-gray-500 p-5 hover:scale-105 transition ease-linear duration-100 group space-y-1">
      <div className="flex flex-row items-center space-x-3">
        <div className="text-lg tracking-wider group-hover:text-sky-400 transition duration-100 ease-linear text-white">{contact.name}</div>
      </div>
      <div className="flex text-xs justify-self-end group-hover:text-white transition duration-100 ease-linear text-gray-600">
        @
        {contact.username}
      </div>
    </div>
  );
}

export default MobileContactCard;
