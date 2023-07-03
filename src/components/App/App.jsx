import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { useEffect, useState } from 'react';
import { Button } from 'components/Button/Button';
import { getGallery } from 'service/api';
import { Loader } from 'components/Loader/Loader';

export const App = () => {
  const [value, setValue] = useState('');
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getGallery(value, page);
        setPhotos(prevPhotos => [...prevPhotos, ...data.hits]);
        setShowBtn(page < Math.ceil(data.totalHits / 12));
      } catch (error) {
        console.error('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [page, value]);

  const onSubmitQuery = value => {
    setValue(value);
    setPage(1);
    setPhotos([]);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <Searchbar onSubmitValue={onSubmitQuery} />
      <ImageGallery photos={photos} />
      {loading ? (
        <Loader />
      ) : (
        showBtn && <Button handleLoadMore={handleLoadMore} />
      )}
    </>
  );
};
