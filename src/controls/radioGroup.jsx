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

    if (!!this.props.selectedItem){
      this.state = { selectedItem: this.props.selectedItem };
    }

  }
  componentDidMount = () => {
 
  }
  _onClick = (event, index, item) => {
    if (this.props.onClick){
      this.props.onClick(event, index, item);
    }
    this.setState(state => ({selectedItem : item}));
  }
  render() {
    let { selectedItem, theme} = this.props;
    
    let selectedItemId = this.props.getIdFunc(selectedItem);

    return (
    <div style={{display: 'inline-block'}}>
      {
        this.props.items.map((item, index) => {

          let selected = this.props.getIdFunc(item) === selectedItemId;
          
          return(
            <RadioButton key={index} 
              selectedItem={this.state.selectedItem}
              selected={selected}
              onClick={(event, index, id) => this._onClick(event, index, item)}
              labelContent={this.props.getLabelContentFunc(item)}
              id={selectedItemId}
              theme={theme}
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
  getLabelContentFunc: PropTypes.func.isRequired,
  getIdFunc: PropTypes.func.isRequired,
  selectedItem: PropTypes.object.isRequired,
  onClick: PropTypes.func
}