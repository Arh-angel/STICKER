import React, { useEffect, useState } from 'react';
import SearchResultsPage from '../../components/pages/SearchResultsPage';
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks';
import { ISearchAds } from '../../models/ISearchAds';
import { getAds, searchAds, selectAds } from '../../store/slice/adsSlice/adsSlice';

const SearchResultsContainer = () => {
  const [foundAds, setFoundAds] = useState<ISearchAds[]>([]);
  const ads = useAppSelector(selectAds);

  useEffect(() => {
    setFoundAds(ads);
  }, [ads]);

  return (
    <SearchResultsPage foundAds={foundAds} />
  );
};

export default SearchResultsContainer;
