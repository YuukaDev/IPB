import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Search from "../Algolia/Search";

export default function Modal() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      {isOpen ? (
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog onClose={closeModal}>
            <div>
              <Dialog.Panel className="transform transition-all overflow-hidden bg-navigationBackground p-4 text-left align-middle shadow-2xl">
                <Search />
              </Dialog.Panel>
            </div>
          </Dialog>
        </Transition>
      ) : (
        <div onClick={openModal}>
          <AiOutlineSearch color="rgb(68, 68, 68)" fontSize="1.3em" />
        </div>
      )}
    </>
  );
}
