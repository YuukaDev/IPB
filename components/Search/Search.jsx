import useShop from "../../utils/StoreContext";

import { useState } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { AiOutlineSearch } from "react-icons/ai";
import { useRouter } from "next/router";

export default function Search() {
  const { products } = useShop();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleOnSelect = (item) => {
    router.push(`/products/${item.permalink}`);
  };

  return (
    <div>
      {isOpen ? (
        <div
          style={{
            width: 200,
            transition: "1s all ease",
          }}
          onMouseLeave={() => setIsOpen(false)}
        >
          <ReactSearchAutocomplete
            styling={{
              height: "30px",
            }}
            items={products}
            onSelect={handleOnSelect}
          />
        </div>
      ) : (
        <AiOutlineSearch
          className="cursor-pointer"
          color="rgb(68, 68, 68)"
          fontSize="1.3em"
          onClick={() => setIsOpen(true)}
        />
      )}
    </div>
  );
}
