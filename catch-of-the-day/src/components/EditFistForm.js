import React from 'react'

class EditFishForm extends React.Component {
  handleChange = (e) => {
      // update fish
      // 1. make a copy of current fish
      const updateFish = { 
        ...this.props.fish,
        [e.currentTarget.name]: e.currentTarget.value
      }
      this.props.updateFish(this.props.index, updateFish);
  }

  render () {
    return (
      <div className="fish-edit">
        <input name="name" ref={this.nameRef} onChange={this.handleChange} type="text" placeholder="Name" value={this.props.fish.name} />
        <input name="price" ref={this.priceRef} onChange={this.handleChange} type="text" placeholder="Price" value={this.props.fish.price} />
        <select name="status" ref={this.statusRef} onChange={this.handleChange} value={this.props.fish.status}>
          <option value="avaible">Fresh!</option>
          <option value="unavaible">Sold Out!</option>
        </select>
        <textarea name="desc" ref={this.descRef} placeholder="Desc" onChange={this.handleChange} value={this.props.fish.desc}></textarea>
        <input name="image" ref={this.imageRef} type="text" placeholder="Image" onChange={this.handleChange} value={this.props.fish.image} />
        <button onClick={() => this.props.deleteFish(this.props.index)}>Remove Fish</button>
      </div>
    );
  }
}

export default EditFishForm;