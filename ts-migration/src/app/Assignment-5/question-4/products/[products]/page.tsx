/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import fetchProducts from "../../actions";
import Pagination from "./Pagination";

interface Params {
  params: {
    products: string;
  };
}

const Page = async ({ params }: Params) => {
  const currentPage = parseInt(params.products, 10);
  const itemsPerPage = 10;
  const skip = (currentPage - 1) * itemsPerPage;

  const { posts, total } = await fetchProducts(skip, itemsPerPage);
  const totalPages = Math.ceil(total / itemsPerPage);

  return (
    <div>
      {posts.map((post: any) => (
        <div key={post.id}>
          <p>{post.title}</p>
        </div>
      ))}
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
};

export default Page;
