import ReactPlayer from 'react-player/youtube'
// const ReactPlayer = React.lazy(() => import('react-player/youtube'));

type propsTypes={
    videoLink: string
}

const VideoPlay = ({videoLink}: propsTypes)=>{
        return (
        <div className='player-wrapper'>
            <ReactPlayer
                className='react-player fixed-bottom'
                url= {videoLink}
                width='auto'
                height='auto'
                controls = {true}
                playing
            />
        </div>
        )
}

export default VideoPlay;