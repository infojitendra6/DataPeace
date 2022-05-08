import { useEffect, useState } from "react";
import List from "./List";
import Pagination from "./pagination";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(
      "https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json"
    )
      .then((resp) => resp.json())
      .then((response) => {
        setData(response);
        setLoading(false);
      });
  }, []);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastPost = currentPage * 50;
  const indexOfFirstPost = indexOfLastPost - 50;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  if (loading) return <h1>Please wait data is Loading</h1>;

  return (
    <div className="App">
      <List data={currentPosts} />
      <Pagination totalPosts={data.length} paginate={paginate} />
    </div>
  );
}
