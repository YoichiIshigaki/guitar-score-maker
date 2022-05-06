import React,{ ReactNode , useEffect , useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../index.css";
import Config from '../../modules/config/config';
import SongType from "../../types/song.json"

type Song = typeof SongType

type Props = {
  children : ReactNode
}

// https://qiita.com/turmericN/items/f3421899a4ac4bb207f1

// 演算子	略称	英語
// =	eq	equal to
// !=	ne	not equal to
// <	lt	less than
// <=	le	less than or equal to
// >	gt	greater than
// <=	ge	greater than or equal to

type Query = {
  limit?: number,
  offset? : number,
  like? : {
    target: string,
    keyword: string
  }
  q? : string,
  operation? :{
    ope_type : "eq" | "ne" | "lt" | "le" | "gt" | "ge" ,
    target : string
  },
  sort?: {
    target : string[],
    order: "desc" | "asc" []
  },
  pagenation? : {
    page: number,
    limit: number
  }
}

const SimpleSlider : React.FC<Props> = ({children}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  const [songs, setSongsState] = useState<Song[]>([]);




// 新着順

// おすすめ順
	const getSongsState = async (query:Query) => {

    const searchParams = new URLSearchParams();

    const queryDict : { [key:string] : string } = {
      _sort: "created_at",
      _order:"asc"
    }

    Object.keys(queryDict).forEach( key => {
      searchParams.append(key, queryDict[key]);
    })

    const queryString = searchParams.toString();

		try{
      
			const res = await fetch(`${Config.apiUrl}/api/songs?${queryString}`);
			const json = await res.json();

			console.log(json);
			setSongsState(json);

		}catch(error:any){
			console.log(`error:${error}`);
		}
	};
  return (
    <div className='bg-gray-200 p-10'>
      <Slider {...settings} >
        {children}
      </Slider>
    </div>
  );
}

export default SimpleSlider
