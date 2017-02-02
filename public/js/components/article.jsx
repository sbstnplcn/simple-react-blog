let React = require('react')

let Article = React.createClass({
    getInitialState() {
        return {article: "", author: "", content: ""}
    },
    render() {
        return (
            <div className="row">
                {this.props.article}
            </div>
        )
    }
})

module.exports = Article
