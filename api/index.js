import showdown from 'showdown';
import showdownKatex from "showdown-katex";
import showdownHighlight from "showdown-highlight";

const converter = new showdown.Converter({
    openLinksInNewWindow: true,
    extensions: [
        showdownKatex({
            throwOnError: true,
            displayMode: false,
        }),
        showdownHighlight()
    ],
});
converter.setFlavor("github");


module.exports = async (req, res) => {
    if (req && req.body) {
        console.log("one conversion");
        const result = converter.makeHtml(req.body);
        res.end(result);
    }
    res.end("");
}
