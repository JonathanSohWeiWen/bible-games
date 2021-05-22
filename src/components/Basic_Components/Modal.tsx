import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Button from "./Button";
import closeIcon from "../../icons/x-circle.svg";

interface ModalProps {
  buttonText: string;
  roundedButton?: boolean;
  dialogTitle?: string;
  children: React.ReactNode;
}

const Modal = ({
  buttonText,
  roundedButton = true,
  dialogTitle = "",
  children,
}: ModalProps) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Button
        text={buttonText}
        rounded={roundedButton}
        onClick={() => setShowModal(true)}
      />
      {showModal && (
        <Transition appear show={showModal} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto"
            onClose={() => setShowModal(false)}
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
                <Dialog.Overlay className="fixed inset-0 bg-gray-500 opacity-30" />
              </Transition.Child>

              {/* This element is to trick the browser into centering the modal contents. */}
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
                <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl focus">
                  <div className="flex  justify-between">
                    {dialogTitle && (
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        {dialogTitle}
                      </Dialog.Title>
                    )}
                    <button
                      type="button"
                      className="focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                      onClick={() => setShowModal(false)}
                    >
                      <img
                        width="20px"
                        src={closeIcon}
                        alt="Close icon"
                        onClick={() => setShowModal(false)}
                      />
                    </button>
                  </div>
                  {children}
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      )}
    </>
  );
};

interface ModalFromTextProps {
  text: string;
  dialogTitle?: string;
  children: React.ReactNode;
}

export const ModalFromText = ({
  text,
  dialogTitle = "",
  children,
}: ModalFromTextProps) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div
        className="text-blue-600 hover:text-blue-700"
        onClick={() => setShowModal(true)}
      >
        {text}
      </div>
      {showModal && (
        <Transition appear show={showModal} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto"
            onClose={() => setShowModal(false)}
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
                <Dialog.Overlay className="fixed inset-0 bg-gray-500 opacity-30" />
              </Transition.Child>

              {/* This element is to trick the browser into centering the modal contents. */}
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
                <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl focus">
                  <div className="flex  justify-between">
                    {dialogTitle && (
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        {dialogTitle}
                      </Dialog.Title>
                    )}
                    <button
                      type="button"
                      className="focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                      onClick={() => setShowModal(false)}
                    >
                      <img
                        width="20px"
                        src={closeIcon}
                        alt="Close icon"
                        onClick={() => setShowModal(false)}
                      />
                    </button>
                  </div>
                  {children}
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      )}
    </>
  );
};

export default Modal;
