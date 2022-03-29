import { Disclosure } from '@headlessui/react';
import React from 'react';
import { Contact } from '../../types/contact';
import MobileContactInfo from './MobileContactInfo';

type ToggleDisclosureProps = {
  open: boolean;
}

function ToggleDisclosure({
  open,
}: ToggleDisclosureProps) {
  if (!open) {
    return (
      <Disclosure.Button>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:translate-y-2 transition-all ease-linear duration-100 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 13l-5 5m0 0l-5-5m5 5V6" />
        </svg>
      </Disclosure.Button>
    );
  }
  return (
    <Disclosure.Button>
      <svg xmlns="http://www.w3.org/2000/svg" className="mt-3 h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 11l5-5m0 0l5 5m-5-5v12" />
      </svg>
    </Disclosure.Button>
  );
}

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
      <Disclosure>
        {({ open }) => (
          <>
            {!open
              && (
                <ToggleDisclosure open={false} />
              )}
            <Disclosure.Panel className="flex flex-col text-gray-500 w-full">
              <MobileContactInfo title="Email" value={contact.email} />
              <MobileContactInfo title="Mobile" value={contact.phone} />
              <MobileContactInfo title="Website" value={contact.website} />
              <MobileContactInfo title="Address" value={`${contact.address.street} ${contact.address.suite} ${contact.address.city} ${contact.address.zipcode}`} />
              <MobileContactInfo title="Company" value={contact.company.name} />
              <div className="flex mt-3 text-lg justify-center text-indigo-400 tracking-wider">
                {contact.company.catchPhrase}
              </div>
              <ToggleDisclosure open />
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}

export default MobileContactCard;
