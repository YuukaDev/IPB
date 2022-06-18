import { useState } from "react";
import useShop from "../utils/StoreContext";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { AiOutlineSearch } from "react-icons/ai";

export default function Test2() {
    const { products } = useShop();
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            {isOpen ?
                <div onMouseLeave={() => setIsOpen(false)}>
                    <ReactSearchAutocomplete
                        items={products}
                    />
                </div> :
                <AiOutlineSearch onClick={() => setIsOpen(true)} />
            }
        </div>
    )
}
