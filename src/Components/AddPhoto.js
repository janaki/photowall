import React, {Component} from 'react'


class AddPhoto extends Component {
constructor() {
  super()
  this.handleSubmit = this.handleSubmit.bind(this)
}
handleSubmit(event){
  event.preventDefault();
  const imageLink = event.target.elements.Link.value
  const description = event.target.elements.Description.value
  const post = {
    id: Number(new Date()),
    description: description,
    imageLink: imageLink
  }
  if (description && imageLink){
    this.props.startAddingPost(post)
    this.props.history.push('/')
  }
}
  render() {
    return(
<div>

    <div className="form">
    <form onSubmit={this.handleSubmit}>
    <input type = "text" placeholder="Link" name="Link"/>
    <input type = "text" placeholder="Description" name="Description"/>
    <button>Post</button>
    </form>
    </div>
</div>
)

  }
}
export default AddPhoto
