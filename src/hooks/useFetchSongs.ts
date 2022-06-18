import { useContext, useEffect, useState } from "react";
import { AppContext /* SongCardsContext ,SongCardsUpdateContext */ } from "../context/songCardsContext";
import { actions, State } from "../reducers/songCards";
import axiosInstance from "../modules/axios/Axios";
import { AxiosResponse } from "axios";
import SongType from "../types/song.json"

type Song = typeof SongType;

const useFetchSongs = (apiUrl?:string): Song[] => {
  // const songs = useContext(SongCardsContext);
  const { state,dispatch } = useContext(AppContext);
  // const dispatch = useContext(SongCardsUpdateContext);
  // const [apiUrl, setApiUrl] = useState<string>("/api/songs");

  // const refetch = () =>
  //   setRefetchIndex((prevRefetchIndex) => prevRefetchIndex + 1);

  useEffect(() => {
    console.log("useFetchSongs useEffect")
    const fetchData = async (apiUrl:string) => {
      // console.log("dispatch = ",dispatch)
      // if (!dispatch) return;
      dispatch(actions.startFetchSongsAction());
      axiosInstance.get(apiUrl)
        .then((res : AxiosResponse<Song[]>) => res.data)
        .then((data : Song[]) => dispatch(actions.successFetchSongsAction(data)))
        .catch(() => dispatch(actions.failFetchSongsAction()));
    };

    fetchData(apiUrl ?? "api/songs");
  },[apiUrl]);

  const result : Song[] = state ? (state.data ? state!.data : [] ) : []

  return result;
};

export default useFetchSongs;