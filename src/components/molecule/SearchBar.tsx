import React,{useState} from 'react'
import "../../index.css";
import { ReactComponent as Search }  from './search.svg'
import SuggestionSongType from "../../types/suggestions/song.json"
import SuggestionArtistType from "../../types/suggestions/artist.json"
import SuggestionGenreType from "../../types/suggestions/genre.json"

type SuggestionSong = typeof SuggestionSongType
type SuggestionArtist = typeof SuggestionArtistType
type SuggestionGenre = typeof SuggestionGenreType

type SuggestionAll = (SuggestionSong | SuggestionArtist | SuggestionGenre)

const SearchBar:React.FC = () => {

    const [searchText,setSearchText] = useState("")
    const [searchType,setSearchType] = useState("")
    const [suggestions,setSuggestions] = useState<SuggestionAll[]>([])

    const searchSuggestions = async (inputText:string) => {
        // genreの場合
        if(inputText.slice(0,1) === "#"){
            const searchGenre = inputText.slice(1)
            setSearchType("genre")
            setSearchText(searchGenre)
            const res = await fetch(`http://localhost:3003/api/suggestions/genres?q=${searchGenre}`);
			const json = await res.json();

			console.log(json);
			setSuggestions(json);
        }
        else{
            setSearchText(inputText)

            const songsRes = await fetch(`http://localhost:3003/api/suggestions/songs?q=${inputText}`);
			const songsJson = await songsRes.json();

            const artistsRes = await fetch(`http://localhost:3003/api/suggestions/artists?q=${inputText}`);
			const artistsJson = await artistsRes.json();

            setSearchType("song,artist")

			console.log(songsJson);
			console.log(artistsJson);
			setSuggestions([...artistsJson,...songsJson]);
        }
    }

    return (
        // This is an example component
        <div className="pt-2 relative mx-auto text-gray-600 p-2 bg-black">
            <form method="GET" action="/search?">
                <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm  focus:outline-none w-full"
                    type="search" name="q" placeholder="Search" list="suggestions" autoComplete="off"
                    onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
                        console.log(e.target.value)
                        searchSuggestions(e.target.value)
                    }}
                />
                <datalist id="suggestions">
                    {
                        suggestions.map((suggestion,index) => {
                            return (
                                <option key={index} value={suggestion.name}>{suggestion.name}</option>
                            )
                        })
                    }
                </datalist>
                <input type="hidden" name="type" value={searchType}/>
                <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
                    <Search/>
                </button>
                {
                        suggestions.map((suggestion,index) => {
                            return (
                                <div key={index} ><a href={suggestion.target_url}>{suggestion.name}</a></div>
                            )
                        })
                    }
            </form>
        </div>
    )

}

export default SearchBar
