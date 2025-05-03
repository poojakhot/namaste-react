/*
Create below HTML structure using React
<div id="parent">
    <div id="child1">
        <h1> I am an h1 tag1 </h1>
        <h2> I am an h2 tag1 </h2>
    </div>
    <div id="child2">
        <h1> I am an h1 tag2 </h1>
        <h2> I am an h2 tag2 </h2>
    </div>
</div>

*/

const heading = React.createElement("div", {id:"parent"}, 
    [
        React.createElement("div", {id:"child1"}, 
            [
                React.createElement("h1", {id:"h1"}, "I am an h1 tag1"),
                React.createElement("h2", {id:"h2"},"I am an h2 tag1 ") 
            ]),
        React.createElement("div", {id:"child2"}, 
            [
                React.createElement("h1", {id:"h11"}, "I am an h1 tag2"),
                React.createElement("h2", {id:"h22"},"I am an h2 tag2 ") 
            ])
    ]    
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading)