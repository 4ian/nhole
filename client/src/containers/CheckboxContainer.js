import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Checkbox from '../components/Checkbox/Checkbox';
import * as updateClientSlotAction from '../components/SlotUpdate/actions';

const MapDispatchToProps = (dispatch) => {
  return bindActionCreators(updateClientSlotAction , dispatch)
}

const mapStateToProps = (state) => ({
  morning: state.get('morning'),
  lunch: state.get('lunch'),
  evening: state.get('evening'),
  afternoon: state.get('afternoon'),
});

export default connect(mapStateToProps, MapDispatchToProps)(Checkbox)
