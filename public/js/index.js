var Main = React.createClass({
    /*
    componentDidMount: function(){
        $.getJSON('api/user/1', function(data){
            alert(JSON.stringify(data));
        });
    }, */
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