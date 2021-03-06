import { connect } from 'react-redux';
import Words from '../../components/words/Words';
import { getFirstWordsByTerm } from '../../selectors/words';

const mapStateToProps = (state, props) => ({
  words: getFirstWordsByTerm(state, props.match.params.count || 1000)
});

export default connect(
  mapStateToProps
)(Words);
