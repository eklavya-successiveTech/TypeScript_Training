const fetchProducts= async( skip=0, limit=10)=> {
  const res = await fetch(`https://dummyjson.com/posts?limit=${limit}&skip=${skip}`);
  const data = await res.json();
  return {
    posts: data.posts,
    total: data.total
  };
}

export default fetchProducts;
