import { useRouter } from "next/router";

export function ProductItem({ hit, components }) {
  const router = useRouter();
  return (
    <div className="aa-ItemWrapper">
      <div className="aa-ItemContent">
        <div className="aa-ItemContentBody">
          <a className="aa-ItemLink" href={`products/${hit.permalink}`}>
            {hit.name}
          </a>
        </div>
      </div>
    </div>
  );
}
