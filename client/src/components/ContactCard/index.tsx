import React from 'react';
import { Contact } from '../../types/contact';
import ContactModal from '../ContactModal';
import './index.css';

type ContactCardProps = {
  contact: Contact;
}

function ContactCard({
  contact,
}: ContactCardProps) {
  return (
    <div className="flex bg-slate-800 flex-col mx-5 my-3 rounded-md text-gray-500 p-5 hover:scale-105 transition ease-linear duration-100 group space-y-1">
      <div className="flex flex-row items-center space-x-3 justify-between">
        <div className="flex flex-row items-center space-x-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
          </svg>
          <div className="text-lg tracking-wider group-hover:text-sky-400 transition duration-100 ease-linear text-white">{contact.name}</div>
        </div>
        <button type="button" onClick={() => { navigator.clipboard.writeText(contact.username); }}>
          <div className="flex text-xs justify-self-end group-hover:text-white transition duration-100 ease-linear text-gray-600">
            @
            {contact.username}
          </div>
        </button>
      </div>
      <div className="card-item">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
        <div className="text-xs text-indigo-500 hover:text-indigo-700">
          <a href={contact.email}>{contact.email}</a>
        </div>
      </div>
      <div className="card-item">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
        <div className="text-xs text-gray-400">
          {contact.phone}
        </div>
      </div>
      <div className="card-item">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
        </svg>
        <div className="text-xs text-gray-400">
          {contact.company.name}
        </div>
      </div>
      <div className="flex justify-center pt-3">
        <div className="text-md text-gray-300">
          {contact.company.catchPhrase}
        </div>
      </div>
      <ContactModal contact={contact} />
    </div>
  );
}

export default ContactCard;
