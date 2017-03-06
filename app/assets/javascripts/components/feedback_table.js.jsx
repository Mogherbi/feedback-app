var FeedbackTable = React.createClass({

  renderTableHeader: function() {
    return(
      <thead>
      <tr>
        <th> Name </th>
        <th> Description </th>
        <th> Issue Type </th>
        <th> Priority </th>
      </tr>
      </thead>
    )
  },

  renderTableContents: function() {
    return(
      this.props.feedbacks.map(function(feedback){
        return(
          <tbody key={feedback.id}>
          <tr>
            <td> {feedback.title} </td>
            <td> {feedback.description} </td>
            <td> {feedback.issue_type} </td>
            <td> {feedback.priority} </td>
          </tr>
          </tbody>
        )
      })
    );
  },
  
  render: function() {
    return(
      <div>
        <table className="table table-bordered" style={{marginTop: "24px"}}>
          {this.renderTableHeader()}
          {this.renderTableContents()}
        </table>
      </div>
    );
  }
});