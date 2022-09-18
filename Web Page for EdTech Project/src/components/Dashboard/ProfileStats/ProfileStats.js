import './ProfileStats.css'
import Timeline from './Timeline';
import Header from './Header';
import Heatmap from './Heatmap';
import Card from '../../UI/Card';
import LiveVideo from './LiveVideo';

const ProfileStats = () => {
    return (
        <Card className="ProfileStats">
            <div id="ProfileStatsBody">
                <Header />
                <Heatmap />
                <div className='TimelineBox'>
                    <h2>Schedule</h2>
                    <Timeline className="Timeline" />
                </div>
            </div>
        </Card>
    );

};

export default ProfileStats;