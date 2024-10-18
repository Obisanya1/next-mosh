import Link from "next/link";
import ProductCard from "./users/components/ProductCard";


export default function Home() {
  return (
   <main>
    <h1 className="text-lg font-bold">Hello World</h1>
 <Link href="/users">Users</Link>
 <ProductCard/>
   </main>
    
  );
}
