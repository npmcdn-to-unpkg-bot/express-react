var Main = React.createClass({
    render: function(){
        return (
            <div className="container-fluid well text-center">
                <h1>Base React Express App</h1>
            </div>
        );
    }
})

ReactDOM.render(
    <Main />,
    document.getElementById('main')
);