const byeRoute = (req, res) => {
    res.send("Bye");
};

const helloRoute = (req, res) => {
    res.send("Hello");
};

module.exports = {
    byeRoute,
    helloRoute
};