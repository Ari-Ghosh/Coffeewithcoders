import './LiveVideo.css'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

const LiveVideo = () => {
  return (
    <div className="LiveVideo">
      <div id="Live"><img src="live-1.jpg" alt="" height="100%" width="100%"/></div>
      <div id="Controls"><PlayCircleIcon/></div>
    </div>
  );
}

export default LiveVideo;