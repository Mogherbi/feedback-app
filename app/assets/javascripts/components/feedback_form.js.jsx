var FeedbackForm = React.createClass({
  getInitialState: function(){
    return {
      title: "", 
      description: "", 
      issue_type: "",
      priority: ""
    };
  },
  newFeedbackSubmit: function(e){
    e.preventDefault();
    this.props.parentFeedbackSubmit({
      feedback: {
        title: this.state.title,
        description: this.state.description,
        issue_type: this.state.issue_type,
        priority: this.state.priority
      }
    });
  },
  handleTitleChange: function(e){
    this.setState({title: e.target.value});
  },
  handleDescriptionChange: function(e){
    this.setState({description: e.target.value});
  },
  handleIssueTypeChange: function(e){
    this.setState({issue_type: e.target.value});
  },
  handlePriorityChange: function(e){
    this.setState({priority: e.target.value});
  },
  renderFeedbackTitleField: function(){
    return(
      <div className='row'>
        <div className='col-sm-4'>
          <div className= 'form-group'>
            <input
                name="feedback[title]"
                type="string"
                placeholder="Title"
                value={this.state.title}
                onChange={this.handleTitleChange}
                className="string form-control"
              />
          </div>
        </div>
      </div>
    );
  },
  renderFeedbackDescriptionField: function(){
    return(
      <div className='row'>
        <div className='col-sm-4'>
          <div className= 'form-group'>
            <textarea
              name="feedback[description]"
              type="string"
              placeholder="Description"
              value={this.state.description}
              onChange={this.handleDescriptionChange}
              className="text form-control"
            />
          </div>
        </div>
      </div>
    );
  },
  renderFeedbackIssueTypeField: function(){
    return(
      <div className='row'>
        <div className='col-sm-4'>
          <div className='form-group'>
            <select className="form-control" onChange={this.handleIssueTypeChange}>
              <option disabled selected value> -- select Issue type -- </option>
              {this.props.issueTypes.map(function(opt){
                return(
                    <option value={opt}>{opt}</option>
                  )
              })}
            </select>
          </div>
        </div>
      </div>
    );
  },
  renderFeedbackPriorityField: function(){
    return(
      <div className='row'>
        <div className='col-sm-4'>
          <div className='form-group'>
            <select className="form-control" onChange={this.handlePriorityChange}>
              <option disabled selected value> -- select Priority -- </option>
              {this.props.priorities.map(function(opt){
                return(
                    <option value={opt}>{opt}</option>
                  )
              })}
            </select>
          </div>
        </div>
      </div>
    );
  },
  render: function() {
    return(
      <div>
        <h4 style={{marginTop: "50px"}}> Create New Feedback </h4>
        <form style={{marginTop: "30px"}} onSubmit={this.newFeedbackSubmit}>
          <div className='form-inputs'/>
            {this.renderFeedbackTitleField()}
            {this.renderFeedbackDescriptionField()}
            {this.renderFeedbackIssueTypeField()}
            {this.renderFeedbackPriorityField()}
            <div className='row'>
              <div className='col-sm-4'>
                <input type="submit" value="Save" className='btn btn-primary' />
              </div>
            </div>
        </form>
      </div>
    );
  }
});