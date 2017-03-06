var FeedbacksContainer = React.createClass({

  getInitialState: function() {
    return {
      feedbacks: this.props.feedbacks
    };
  },

  parentFeedbackSubmit: function(formData){
    // debugger
    $.ajax({
      url: "/feedbacks",
      dataType: 'json',
      type: 'POST',
      data: formData,
      success: function(feedbacks) {
        this.setState({feedbacks: feedbacks});
      }.bind(this),
      error: function(response, status, err) {
        console.log("An error occured");
        console.log(response.responseText);
      }
    });
  },

  render: function() {
    return (
      <div className="container">
        <h1>Feedback System</h1>
        <FeedbackForm
          parentFeedbackSubmit={this.parentFeedbackSubmit}
          issueTypes={this.props.issueTypes}
          priorities={this.props.priorities}
        />
        <FeedbackTable feedbacks={this.state.feedbacks} />
      </div>
      );
  }
});
