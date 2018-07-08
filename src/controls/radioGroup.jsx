import React from 'react';
import RadioButton from './radioButton.jsx';
import PropTypes from 'prop-types';
//TODO: implement themes
//TODO: implement the 'enabled' property
//may need to come up with disabled css styles
//TODO: write up readme.md
export default class RadioGroup extends React.Component {
  constructor(props){
    super(props);
    this._onClick = this._onClick.bind(this);

    if (!!this.props.selectedItem)
          this.state = { selectedItem: this.props.selectedItem };
  }
  componentDidMount = () => {

  }
  _onClick = (event, index, item) => {
    console.log('radio group clicked');
    if (this.props.onClick){
      this.props.onClick(event, index, item);
    }

    this.setState({selectedItem : item});
  }
  render() {
    let selected = undefined;
    let selectedId = undefined;

    if (!!this.state.selectedItem){
      selectedId = this.props.getIdFunc(this.state.selectedItem);
    }

    return (
    <div style={{display: 'inline-block'}}>
      {
        this.props.items.map((item, index) => {

          let id = this.props.getIdFunc(item);
          selected = (selectedId === id);

          return(
            <RadioButton key={index} 
              selected={selected}
              onClick={(event, index, id) => this._onClick(event, index, item)}
              labelContent={this.props.getLabelContentFunc(item)}
              id={id}
                />
            )
        })
      }
    </div>
    );
  }
}

RadioGroup.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  getValueFunc: PropTypes.func.isRequired,
  getLabelContentFunc: PropTypes.func.isRequired,
  getIdFunc: PropTypes.func.isRequired,
  selectedItem: PropTypes.object,
  onClick: PropTypes.func
}