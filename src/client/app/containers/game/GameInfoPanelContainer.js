import { connect } from 'react-redux';
import GameInfoPanelComponent from '../../components/game/GameInfoPanelComponent';

function mapStateToProps(state) {
	return {
		user: state.user.currentUser,
		game: state.game.game,
		moves: state.game.moves
	};
}

export default connect(mapStateToProps)(GameInfoPanelComponent);