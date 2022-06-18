import SongType from "../types/song.json"

type Song = typeof SongType

const BEFORE_FETCH_SONGS = "BEFORE_FETCH_SONGS" as const;
const START_FETCH_SONGS = "START_FETCH_SONGS" as const;
const SUCCESS_FETCH_SONGS = "SUCCESS_FETCH_SONGS" as const;
const FAIL_FETCH_SONGS = "FAIL_FETCH_SONGS" as const;

const beforeFetchSongsAction = () => {
  return { type: BEFORE_FETCH_SONGS };
};
const startFetchSongsAction = () => {
  return { type: START_FETCH_SONGS };
};

const successFetchSongsAction = (songs: Song[]) => {
  return { type: SUCCESS_FETCH_SONGS, payload: songs };
};

const failFetchSongsAction = () => {
  return { type: FAIL_FETCH_SONGS };
};

export const actions = {
  beforeFetchSongsAction,
  startFetchSongsAction,
  successFetchSongsAction,
  failFetchSongsAction
}

export type ActionType =
  | ReturnType<typeof startFetchSongsAction>
  | ReturnType<typeof successFetchSongsAction>
  | ReturnType<typeof failFetchSongsAction>;

export type State = 
| undefined // before init
| { isLoading: true,isError : false, data: undefined } // loading
| { isLoading: false,isError : false, data: Song[] } // success
| { isLoading: false,isError : true, data: undefined }; // fail

export const initialState : State = undefined;

export const reducer = (state: State, action: ActionType): State => {
  switch (action.type) {
    case START_FETCH_SONGS:
      return {
        ...state,
        isLoading: true,
        isError : false,
        data: undefined,
      };
    case SUCCESS_FETCH_SONGS:
      return {
        ...state,
        isLoading: false,
        isError : false,
        data: action.payload,
      };
    case FAIL_FETCH_SONGS:
      return {
        ...state,
        isLoading: false,
        isError : true,
        data: undefined,
      };
    default:
      return state;
  }
};