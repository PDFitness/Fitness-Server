import * as Actions from './actions'
import { bindActionCreators } from 'redux';

export const mapStateToProps = (state)  => ({

    results: state.demo.results

});

export const mapDispatchToProps = (dispatch) => ({

    actions: bindActionCreators(Actions, dispatch)

});