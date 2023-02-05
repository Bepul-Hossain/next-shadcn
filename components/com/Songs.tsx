import Item from "../data/dataTypes";
import Song from "./Song";

// type UserType = {
//     name?: string;
//     videoLink?: string;
//     lyrics?: string;
//   };
// interface Props{
    //     data: UserType
    // }
// interface UserProps {
//     data?: Item[],
// }

type UserProps={
  data?:Item[],
  query:string,
}

const Songs = (props: UserProps) => {
    const{data, query} =props
    return (
        <div className="songs">
          {data?.filter((item) => item?.name?.toLowerCase().includes(query.toLowerCase())).map((song, index) =>
                <Song
                name={song.name}
                videoLink={song.videoLink}
                lyrics={song.lyrics}
                index={++index}
                key={song.name}
                />
            )}
        </div>
    )
}

export default Songs