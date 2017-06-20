// var Todo = require('./models/todo');

// function getTodo(res) {
//     Todo.find(function (err, todo) {

//         // if there is an error retrieving, send the error. nothing after res.send(err) will execute
//         if (err) {
//             res.send(err);
//         }

//         res.json(todo); // return all todo in JSON format
//     });
// };

module.exports = function (app) {

    //EXAMPLES

    // // get all todo
    // app.get('/api/todo', function (req, res) {
    //     // use mongoose to get all todo in the database
    //     getTodo(res);
    // });

    // // create todo and send back all todo after creation
    // app.post('/api/todo', function (req, res) {

    //     // create a todo, information comes from AJAX request from Angular
    //     Todo.create({
    //         text: req.body.text,
    //         done: false
    //     }, function (err, todo) {
    //         if (err)
    //             res.send(err);

    //         // get and return all the todo after you create another
    //         getTodo(res);
    //     });

    // });

    // // delete a todo
    // app.delete('/api/todo/:todo_id', function (req, res) {
    //     Todo.remove({
    //         _id: req.params.todo_id
    //     }, function (err, todo) {
    //         if (err)
    //             res.send(err);

    //         getTodo(res);
    //     });
    // });

    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};
