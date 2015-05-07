React = require('react')
madparser = require('markdown').markdown

App = React.createClass(
  getInitialState: ->
    {markdown: ''}
  ,
  updateMarkdown: (markdown) ->
    this.setState({markdown: markdown})
  ,
  render: ->
    (
      <div>
        <TextInput onChange={this.updateMarkdown} />
        <Markdown markdown={this.state.markdown} />
      </div>
    )
)

TextInput = React.createClass(
  propTypes: ->
    onChange: React.PropTypes.func.isRequired
  ,
  _onChange: (e) ->
    this.props.onChange(e.target.value)
  ,
  render: ->
    (
      <textarea onChange={this._onChange}>
      </textarea>
    )
)

Markdown = React.createClass(
  propTypes: ->
    markdown: React.PropTypes.string.isRequired
  ,
  render: ->
    html = madparser.toHTML(this.props.markdown)
    (
      <div dangerouslySetInnerHTML={{__html:html}}></div>
    )
)

React.render(
  <App />
  document.getElementById('app-container')
)
