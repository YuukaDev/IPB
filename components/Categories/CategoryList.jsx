import Link from "next/link";

export default function CategoryList({ categories }) {
  if (!categories) return null;

  return (
    <ul>
      {categories.map((category) => (
        <li key={category.slug}>
          <Link href={`products/categories/${category.slug}`}>
            <a>{category.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
