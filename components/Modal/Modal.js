import React from "react";
import { Dialog } from "@headlessui/react";

export default function Modal({ isOpen, setIsOpen, children }) {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 flex  justify-center items-center">
        <Dialog.Panel
          className={`w-full max-w-[433px] drop-shadow-[0_1px_4px_rgba(0,0,0,0.25)]
         bg-white rounded-md `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6  top-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>

          {children}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
