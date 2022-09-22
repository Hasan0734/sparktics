import React from "react";
import { Dialog } from "@headlessui/react";

export default function Modal({ isOpen, setIsOpen, children, size, shadow,  }) {
  // drop-shadow-[0_1px_4px_rgba(0,0,0,0.25)
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div className={`fixed inset-0 `} aria-hidden="true" />

      <div className="fixed inset-0 flex  justify-center items-start">
        <Dialog.Panel
          className={`w-full mx-5 overflow-scroll h-full
         bg-white rounded-md ${size} ${shadow}`}
        >
          {children}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
