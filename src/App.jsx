import "./App.css";
import { useState, useEffect } from "react";
import galleryQuery from "./api-query";
import SerchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
// import ImageModal from "./components/ImageModal/ImageModal";

import Modal from "react-modal";
import toast from "react-hot-toast";

Modal.setAppElement("#root");

function App() {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getArticlesData = async () => {
      try {
        if (query === "") {
          return;
        }
        setError(false);
        setLoading(true);

        const { results } = await galleryQuery(query, page);
        setArticles((prev) => [...prev, ...results]);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getArticlesData();
  }, [query, page]);

  const handleNewQuery = (newQuery) => {
    if (query === newQuery) {
      toast.error("Enter please new request!");

      return;
    }
    setPage(1);
    setQuery(newQuery);
    setArticles([]);
  };

  const handleUpPage = () => {
    setPage(page + 1);
  };

  return (
    <>
      <SerchBar onSubmit={handleNewQuery} />
      {loading && <Loader />}
      {error ? <ErrorMessage /> : <ImageGallery articles={articles} />}

      {articles.length > 0 && <LoadMoreBtn click={handleUpPage} />}
    </>
  );
}

export default App;
