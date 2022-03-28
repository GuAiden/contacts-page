import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useState } from 'react';
import { Contact } from '../../types/contact';
import ContactInfo from './ContactInfo';

type ContactModalProps = {
  contact: Contact;
}

function ContactModal({
  contact,
}: ContactModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="px-4 mt-3 py-2 w-full lg:w-2/5 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 tracking-wider hover:text-sky-400 transition ease-linear duration-150"
        >
          More info...
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => closeModal()}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Overlay className="inline-block w-full max-w-xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-900 shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg text-center font-medium leading-6 text-white"
                >
                  {contact.name}
                </Dialog.Title>
                <div className="mt-2">
                  <ContactInfo title="Website" value={contact.website} />
                </div>
                <div className="mt-2">
                  <ContactInfo title="Business Slogan" value={contact.company.bs} />
                </div>
                <div className="mt-2">
                  <ContactInfo title="Address" value={`${contact.address.street} ${contact.address.suite} ${contact.address.city} ${contact.address.zipcode}`} />
                </div>
                <div className="mt-2">
                  <ContactInfo title="Coordinates" value="" />
                </div>
                <div className="mt-1">
                  <div className="flex flex-col ml-5">
                    <p className="text-sm text-gray-200">
                      {`Latitude: ${contact.address.geo.lat}`}
                    </p>
                    <p className="text-sm text-gray-200">
                      {`Longitude: ${contact.address.geo.lng}`}
                    </p>
                  </div>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-indigo-200 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Overlay>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default ContactModal;