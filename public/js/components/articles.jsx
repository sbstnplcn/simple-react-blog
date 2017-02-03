let React = require('react')
let Article = require('./article')

let Articles = React.createClass({
    getInitialState() {
        return {articles: []}
    },
    componentWillMount() {
        fetch('posts.json').then((res) => {
            return res.json().then((response) => {
                var articles = response
                this.setState({articles})

            })
        })
    },
    render() {
        let article = this.state.articles.map((e) => {
            return (
                <section>
                    <div className="col-xs-4">
                        <div className="thumbnail">
                            <div className="caption">
                                <h2>{e.title}</h2>
                                <label>{e.author}</label>
                                <p>{e.content.substr(0, 200)}...</p>
                                <a href={e._id}>Voir Plus</a>
                            </div>
                        </div>
                    </div>
                </section>
            )
        })
        return <Article article={article}></Article>
    }
})

module.exports = Articles
