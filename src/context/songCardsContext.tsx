import { createContext, Dispatch, ReactChild, useReducer } from "react";
import { initialState, reducer, State, ActionType } from "../reducers/songCards";
// import SongType from "../types/song.json"

// type Song = typeof SongType;

export const SongCardsContext = createContext<State | undefined>(undefined);

// export const SongCardsUpdateContext = createContext<Dispatch<ActionType>>(null);

export const AppContext = createContext({} as {
  state: State 
  dispatch: Dispatch<ActionType>
})


// const initialState = {
//   count: 0
// }

export const SongCardsContextProvider = ({ children }: { children: ReactChild }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
      <AppContext.Provider value={{ state, dispatch }}>
          {children}
      </AppContext.Provider>
  )
}

// export const SongCardsContextProvider = ({ children }: { children: ReactChild }) =>  {
//   const [songs, dispatch] = useReducer(reducer, initialState);

//   return (
//     <SongCardsContext.Provider value={songs}>
//       <SongCardsUpdateContext.Provider value={dispatch}>
//         {children}
//       </SongCardsUpdateContext.Provider>
//     </SongCardsContext.Provider>
//   );
// }
