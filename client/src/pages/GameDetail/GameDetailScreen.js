import React, {Component} from 'react';
import styles from './GameDetailStyles';
import { withRouter } from 'react-router-dom';
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";

class GameDetailScreen extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={{width: '100%' , height: '50%', overflow: 'hidden', top: 0, left: 0, position: "absolute"}}>
          <img
              src={'https://image.api.playstation.com/vulcan/ap/rnd/202009/0300/JTghsjX2IS4g0VlPcFXfDhTv.jpg'}
              style={{width: '100%'}}
          />
        </div>

          <div style={{minHeight: '46vh' , display: "flex", justifyContent: 'flex-start' , alignItems: 'flex-end'}}>
              <Typography variant="h1" color="inherit" component="p" noWrap>
                  { 'Prince of persia'}
              </Typography>

          </div>

          <div style={{marginTop: '3vh'}}>
              <Typography variant="h3" color="inherit" component="p" noWrap>
                  { 'Prince History'}
              </Typography>
          </div>


      </div>
    );
  }
}

export default withRouter(GameDetailScreen)