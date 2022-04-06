import React,{useState} from 'react'
import "../../index.css";
import SuggestionSongType from "../../types/suggestions/song.json"
import SuggestionArtistType from "../../types/suggestions/artist.json"
import SuggestionGenreType from "../../types/suggestions/genre.json"

import Search from '../SvgComponents/Search'

type SuggestionSong = typeof SuggestionSongType
type SuggestionArtist = typeof SuggestionArtistType
type SuggestionGenre = typeof SuggestionGenreType

type SuggestionAll = (SuggestionSong | SuggestionArtist | SuggestionGenre)

const SearchBar:React.FC = () => {

    const [searchData,setSearchData] = useState({text:"",type:"song,artist"})
    const [suggestions,setSuggestions] = useState<SuggestionAll[]>([])

    const searchSuggestions = async (inputText:string) => {
        // genreの場合
        if(inputText.slice(0,1) === "#"){
            
            setSearchData({"text" : inputText , "type" : "genre"})
            const res = await fetch(`http://localhost:3003/api/suggestions/genres?q=${inputText}`);
			const json = await res.json();       

			console.log(json);
			setSuggestions(json);
        }
        else{
            setSearchData({...searchData,"text": inputText})
            
            if(searchData.text === "" ){
                setSearchData({...searchData, type:"song,artist"})
            }

            const songsRes = await fetch(`http://localhost:3003/api/suggestions/songs?q=${inputText}`);
			const songsJson = await songsRes.json();

            const artistsRes = await fetch(`http://localhost:3003/api/suggestions/artists?q=${inputText}&_limit=5`);
			const artistsJson = await artistsRes.json();

			console.log(songsJson);
			console.log(artistsJson);

            const suggestions  = [...artistsJson,...songsJson]

            if(suggestions.length === 1){
                setSearchData({...searchData,"type": suggestions[0].type})
            }
			setSuggestions(suggestions);
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
                                <option key={index} value={suggestion.name} />
                            )
                        })
                    }
                </datalist>
                <input type="hidden" name="type" value={searchData.type} />
                <button type="submit" className="mt-4 absolute right-0 top-0 mr-4">
                    <Search width={25} height={25}/>
                </button>
            </form>
        </div>
    )

}

export default SearchBar
