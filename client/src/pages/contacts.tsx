import React, { useEffect, useState } from 'react';
import ContactCard from '../components/ContactCard';
import MobileContactCard from '../components/MobileContactCard';
import { Contact } from '../types/contact';
import LoadingPage from './loading';

function ContactsPage() {
  const [error, setError] = useState<string>('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [contacts, setContacts] = useState<Contact[]>([]);

  async function request<T>(
    url: string,
    config: RequestInit = {},
  ): Promise<T> {
    return fetch(url, config)
      .then((response) => response.json())
      .then((data) => data);
  }

  useEffect(() => {
    request<Contact[]>('https://jsonplaceholder.typicode.com/users')
      .then(
        (fetchedContacts) => {
          setContacts(fetchedContacts);
          setIsLoaded(true);
        },
      )
      .catch(
        (errors) => setError(errors),
      );
  }, []);

  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  } if (!isLoaded) {
    return (
      <LoadingPage />
    );
  }
  return (
    <>
      <div className="flex justify-center text-3xl text-gray-100 mt-3 sm:mt-6 lg:mt-12">
        Contact us
      </div>
      <div className="flex justify-center text-center text-lg text-gray-400 m-6 sm:m-5 lg:m-8">
        Get in touch with us and let us know how we might be able to help
      </div>
      <div className="grid-cols-1 hidden md:grid 2xl:grid md:grid-cols-2 2xl:grid-cols-3">
        {contacts.map((contact: Contact) => (
          <ContactCard contact={contact} />
        ))}
      </div>
      <div className="md:hidden">
        {contacts.map((contact: Contact) => (
          <MobileContactCard contact={contact} />
        ))}
      </div>
    </>
  );
}

export default ContactsPage;
